export default function handler(req, res) {
  const images = [
    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/10600.jpg',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/10832.jpg',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/14657.jpg',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/19480.jpg',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/20606.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/20993.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/22076.jpg',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/22295.jpg',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/26383.jpg',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/26671.jpg',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/27018.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/27117.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/27120.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/27251.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/27482.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/27547.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/27907.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/27923.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/27926.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/28043.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/28318.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/28324.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/28349.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/28368.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/28541.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/28683.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/29445.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/29629.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/29800.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/29849.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/29856.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/30261.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/30820.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/30861.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/31026.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/31079.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/31091.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/31192.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/31255.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/31753.jpg',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/31754.png',\n    'https://raw.githubusercontent.com/yuhanbo758/image/main/random/5551.jpg'
  ];
  
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  // 设置缓存控制头
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  res.redirect(307, randomImage);
}