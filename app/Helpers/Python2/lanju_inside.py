import requests
import time
import json
def Lanju_inside() :
    # 请求地址
    url = "http://122.112.234.240:9007/monitor/devices/real/62011711/all/0"

    # 发送get请求
    r = requests.get(url)

   # 处理时间
    localtime_Y = time.strftime("%Y", time.localtime())

    data = {
        "DeviceID" : r.json()['data'][0]['DeviceID'],
        "TEMP" : r.json()['data'][0]['TEMP'],
        "PM25" : r.json()['data'][0]['PM25'],
        "CO2" : r.json()['data'][0]['CO2'],
        "NOISE" : r.json()['data'][0]['NOISE'],
        "HUMI" : r.json()['data'][0]['HUMI'],
        "VOC" : r.json()['data'][0]['VOC'],
        "CH2O" : r.json()['data'][0]['CH2O'],
        "LUX" : r.json()['data'][0]['LUX'],
        # "SERVER_TIME" : r.json()['data'][0]['CreateTime'],
    }
    # 获取返回的json数据
    print(data)
    return data

def avg (a):
    for s in a:
        sum(s) / count(s)
    print(a)
    return a

