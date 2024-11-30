const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OWNER = 'yuhanbo758';
const REPO = 'image';
const PATH = 'random';
const BASE_URL = `https://image.sanrenjz.com/${PATH}`;

async function getImageList() {
  try {
    console.log('Fetching from:', `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`);
    const response = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('GitHub API Error:', response.status, errorText);
      throw new Error(`Failed to fetch image list: ${response.status} ${errorText}`);
    }

    const data = await response.json();
    console.log('Files found:', data.length);
    
    const images = data
      .filter(item => item.type === 'file')
      .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file.name))
      .map(file => `${BASE_URL}/${file.name}`);
    
    console.log('Image URLs:', images.length);
    return images;
  } catch (error) {
    console.error('Detailed error:', error);
    return [];
  }
}

export default async function handler(req, res) {
  const images = await getImageList();
  
  if (images.length === 0) {
    console.error('No images found in the list');
    return res.status(500).json({ 
      error: 'No images available',
      message: 'Failed to fetch images from GitHub repository'
    });
  }
  
  const randomImage = images[Math.floor(Math.random() * images.length)];
  console.log('Selected image:', randomImage);
  
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  res.redirect(307, randomImage);
}
