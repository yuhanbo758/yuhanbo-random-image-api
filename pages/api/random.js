import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // 直接从 random 目录读取图片
    const imageDir = path.join(process.cwd(), 'random');
    const files = fs.readdirSync(imageDir);
    
    // 过滤图片文件
    const imageFiles = files.filter(file => 
      file.toLowerCase().endsWith('.jpg') || 
      file.toLowerCase().endsWith('.png') || 
      file.toLowerCase().endsWith('.gif') || 
      file.toLowerCase().endsWith('.jpeg')
    );

    // 随机选择一张图片
    const randomImage = imageFiles[Math.floor(Math.random() * imageFiles.length)];
    const imageUrl = `https://image.sanrenjz.com/random/${randomImage}`;
    
    // 设置缓存控制头
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.setHeader('Pragma', 'no-cache');
    res.setHeader('Expires', '0');
    
    res.redirect(307, imageUrl);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to get random image' });
  }
}
