import json

d = [24,25,25,26,26,25,26]

with open('C:\\Users\\biaoge\\code\\owell\\public\js\\data_json\\jj111.json',mode='w',encoding='utf-8') as f: #文件不存在就会生成
    json.dump(d, f)  # 直接写在文章里没有retrun，所以不需要等号

j = json.dumps(d)
print(j)

