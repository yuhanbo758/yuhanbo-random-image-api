import fs from 'fs';
import path from 'path';
import https from 'https';

export default function handler(req, res) {
  try {
    // 发送请求到你的图片目录
    https.get('https://image.sanrenjz.com/random/', (response) => {
      let data = '';
      
      response.on('data', (chunk) => {
        data += chunk;
      });
      
      response.on('end', () => {
        try {
          // 解析返回的HTML内容，提取图片文件名
          const imageFiles = data.match(/href="([^"]+\.(jpg|jpeg|png|gif))"/gi)
            ?.map(href => href.match(/href="([^"]+)"/)[1])
            ?.filter(file => 
              file.toLowerCase().endsWith('.jpg') || 
              file.toLowerCase().endsWith('.png') || 
              file.toLowerCase().endsWith('.gif') || 
              file.toLowerCase().endsWith('.jpeg')
            ) || [];

          if (imageFiles.length === 0) {
            throw new Error('No image files found');
          }

          // 随机选择一张图片
          const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
          const imageUrl = `https://image.sanrenjz.com/random/${randomImage}`;
          
          // 设置缓存控制头
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
          res.setHeader('Pragma', 'no-cache');
          res.setHeader('Expires', '0');
          
          res.redirect(307, imageUrl);
        } catch (error) {
          console.error('Error parsing response:', error);
          res.status(500).json({ error: 'Failed to parse image list', details: error.message });
        }
      });
    }).on('error', (error) => {
      console.error('Error fetching directory:', error);
      res.status(500).json({ error: 'Failed to fetch image directory', details: error.message });
    });
  } catch (error) {
    console.error('Error details:', error);
    res.status(500).json({ error: 'Failed to get random image', details: error.message });
  }
}
