import re #导入正在表达式模块
#匹配数字示例
a = '2020-03-25T09:15:50.000Z'
r = re.findall('2[^2]Z', a)
print(r)
