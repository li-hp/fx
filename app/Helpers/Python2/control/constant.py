appid1 = "eEk44UiFKs48Mw5UFb6X4nVOB60kw4oz"
appkey1 = "A0cfPOGbD2KCClb7fKAWBRAWip5Hv3by"

at = "50b4ed8d7b2669de582d4ccad80e780c9a2b3cea"
rt = "bb6a77037bc2a8cc5c5583b9d9340e9da147647a"

deng = "1000d6d6f2"  # 灯
mengchuangci = "a400003e8d"  # 门窗磁
hongwai = "a400003e71"  # 红外感应
wenshidu = "a40000426c"  # 温湿度
kaiguan = "a40000436a"  # 安防开关

# 触摸开关面板
switch_panel_test = "1000b2f8f1"       # 可测试
switch_panel_1 = "1000b2f7a6"          # 勿动！
switch_panel_2 = "1000b2f76a"          # 勿动！
switch_panel_3 = "1000b2f863"          # 通道二测试
switch_panel_4 = "1000b2f5b8"		   # 勿动！勿动！
switch_panel_5 = "1000b2f896"          # 勿动！勿动！

device_vs_contrl = {
    # eg：灯光1 对应 {易微联设备开关面板1 的 0通道,params关键字1是switches... }
    'light_ring': {"id": switch_panel_test, "outlet": 0, "params_key1": "switches", "params_key2": "switch"},
    'light_nothing': {"id": switch_panel_test, "outlet": 1, "params_key1": "switches", "params_key2": "switch"},
    'light_booth': {"id": switch_panel_1, "outlet": 0, "params_key1": "switches", "params_key2": "switch"},
    'light_ultra_violet': {"id": switch_panel_1, "outlet": 1, "params_key1": "switches", "params_key2": "switch"},
    'light_IC1_1': {"id": switch_panel_2, "outlet": 0, "params_key1": "switches", "params_key2": "switch"},
    'light_IC1_2': {"id": switch_panel_2, "outlet": 1, "params_key1": "switches", "params_key2": "switch"},
    'light_IC4_1': {"id": switch_panel_3, "outlet": 0, "params_key1": "switches", "params_key2": "switch"},
    'light_spotlight': {"id": switch_panel_3, "outlet": 1, "params_key1": "switches", "params_key2": "switch"},
    'light_IC4_2': {"id": switch_panel_4, "outlet": 0, "params_key1": "switches", "params_key2": "switch"},
    'light_IC4_3': {"id": switch_panel_4, "outlet": 1, "params_key1": "switches", "params_key2": "switch"},
    # ...更多
}
