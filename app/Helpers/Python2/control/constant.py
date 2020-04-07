appid1 = "eEk44UiFKs48Mw5UFb6X4nVOB60kw4oz"
appkey1 = "A0cfPOGbD2KCClb7fKAWBRAWip5Hv3by"

deng = "1000d6d6f2"  # 灯
mengchuangci = "a400003e8d"  # 门窗磁
hongwai = "a400003e71"  # 红外感应
wenshidu = "a40000426c"  # 温湿度
kaiguan = "a40000436a"  # 安防开关
mianban1 = "1000b2f8f1"  # 开关面板

device_vs_contrl = {
    # eg：灯光1 对应 {易微联设备开关面板1 的 0通道,params关键字1是switches... }
    'light1': {"id": mianban1, "outlet": 0, "params_key1": "switches", "params_key2": "switch"},
    'light2': {"id": mianban1, "outlet": 1, "params_key1": "switches", "params_key2": "switch"},
    # ...更多
}

