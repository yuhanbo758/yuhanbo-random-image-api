const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const OWNER = 'yuhanbo758';
const REPO = 'image';
const PATH = 'random';
const BASE_URL = `https://image.sanrenjz.com/${PATH}`;

async function getImageList() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${OWNER}/${REPO}/contents/${PATH}`,
      {
        headers: {
          'Authorization': `token ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch image list');
    }

    const data = await response.json();
    return data
      .filter(item => item.type === 'file')
      .filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file.name))
      .map(file => `${BASE_URL}/${file.name}`);
  } catch (error) {
    console.error('Error fetching image list:', error);
    return [];
  }
}

export default async function handler(req, res) {
  const images = await getImageList();
  
  if (images.length === 0) {
    return res.status(500).json({ error: 'No images available' });
  }
  
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  res.redirect(307, randomImage);
}
