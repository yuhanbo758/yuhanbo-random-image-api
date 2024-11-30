import https from 'https';

export default function handler(req, res) {
  try {
    // 使用 GitHub API 获取仓库内容
    const options = {
      hostname: 'api.github.com',
      path: '/repos/yuhanbo758/image/contents/random',
      headers: {
        'User-Agent': 'Random-Image-API'
      }
    };

    https.get(options, (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        try {
          const files = JSON.parse(data);
          
          // 过滤出图片文件
          const imageFiles = files.filter(file => 
            file.name.toLowerCase().endsWith('.jpg') || 
            file.name.toLowerCase().endsWith('.png') || 
            file.name.toLowerCase().endsWith('.gif') || 
            file.name.toLowerCase().endsWith('.jpeg')
          );

          if (imageFiles.length === 0) {
            throw new Error('No images found in the repository');
          }

          // 随机选择一张图片
          const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
          const imageUrl = `https://image.sanrenjz.com/random/${randomImage.name}`;
          
          // 设置缓存控制头
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          res.setHeader('Pragma', 'no-cache');
          res.setHeader('Expires', '0');
          
          res.redirect(307, imageUrl);
        } catch (error) {
          console.error('Error parsing GitHub response:', error);
          res.status(500).json({ error: 'Failed to parse repository contents', details: error.message });
        }
      });
    }).on('error', (error) => {
      console.error('Error fetching from GitHub:', error);
      res.status(500).json({ error: 'Failed to fetch repository contents', details: error.message });
    });
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ error: 'Failed to get random image', details: error.message });
  }
}
