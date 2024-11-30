export default function handler(req, res) {
  const images = [
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/10600.jpg",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/10832.jpg",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/14657.jpg",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/19480.jpg",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/20606.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/20993.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/22076.jpg",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/22295.jpg",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/26383.jpg",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/26671.jpg",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/27018.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/27117.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/27120.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/27251.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/27482.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/27547.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/27907.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/27923.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/27926.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/28043.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/28318.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/28324.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/28349.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/28368.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/28541.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/28683.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/29445.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/29629.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/29800.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/29849.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/29856.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/30261.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/30820.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/30861.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/31026.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/31079.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/31091.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/31192.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/31255.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/31753.jpg",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/31754.png",
    "https://raw.githubusercontent.com/yuhanbo758/image/main/random/5551.jpg"
  ];
  
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  // 设置缓存控制头
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  res.redirect(307, randomImage);
}
