import os
import json

def get_image_list():
    # 指定图片目录路径
    image_dir = "random"
    base_url = "https://image.sanrenjz.com/random/"
    
    # 获取所有图片文件
    images = []
    for filename in os.listdir(image_dir):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg', '.gif')):
            images.append(base_url + filename)
    
    # 将图片列表保存到 JSON 文件
    with open('public/images.json', 'w', encoding='utf-8') as f:
        json.dump(images, f, ensure_ascii=False, indent=2)

if __name__ == "__main__":
    get_image_list() 