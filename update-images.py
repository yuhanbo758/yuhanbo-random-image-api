import os
import json

def generate_image_list():
    base_url = 'https://raw.githubusercontent.com/yuhanbo758/image/main/random/'
    image_dir = 'D:\\wenjian\\github\\image\\random'  # 你的图片目录路径
    
    print(f"正在读取目录: {image_dir}")
    
    try:
        # 获取所有图片文件
        images = [f for f in os.listdir(image_dir) if f.endswith(('.jpg', '.jpeg', '.png', '.gif'))]
        print(f"找到 {len(images)} 个图片文件")
        
        # 生成完整 URL 列表
        image_urls = [f"{base_url}{img}" for img in sorted(images)]
        
        # 生成 API 文件内容
        api_content = """export default function handler(req, res) {
  const images = [
    "%s"
  ];
  
  const randomImage = images[Math.floor(Math.random() * images.length)];
  
  // 设置缓存控制头
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  res.redirect(307, randomImage);
}
""" % '",\n    "'.join(image_urls)
        
        print("创建 pages/api 目录")
        # 确保目录存在
        os.makedirs('./pages/api', exist_ok=True)
        
        print("写入 random.js 文件")
        # 写入文件
        with open('./pages/api/random.js', 'w', encoding='utf-8') as f:
            f.write(api_content)
        
        print("完成!")
    except Exception as e:
        print(f"处理文件时出错: {str(e)}")

if __name__ == '__main__':
    try:
        generate_image_list()
    except Exception as e:
        print(f"发生错误: {str(e)}") 