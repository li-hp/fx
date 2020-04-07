# wss://cn-pconnect2.coolkit.cc:8080/api/ws
# url = "wss://" + part3post.main() + ":8080/api/ws"
from control import constant
import get_device_status

import websocket
import time
import json

import sys

# sys.path.append(".")

try:
    import thread
except ImportError:
    import _thread as thread


def go(device_name, device_status):

    # 主要特征
    appid = constant.appid1
    url = "wss://" + "cn-pconnect2.coolkit.cc" + ":8080/api/ws"

    # 握手凭证获取
    woshou = {
        "action": "userOnline",
        "version": 8,
        "ts": 1571141259,
        "at": constant.at,
        "userAgent": "app",
        "apikey": "fdd2c4a2-ee08-4b8a-a0cb-46dfd8c3e90a",
        "appid": appid,
        "nonce": "12345678",
        "sequence": "1571141530100"}

    def controlling_params(controlling_name, controlling_status):
        # 获取最新设备状态
        device_get = get_device_status.go(controlling_name)
        device_params = device_get

        # 根据 controlling_name 判断必要参数的取值,对应 constant 文件内的 device_vs_contrl 字典
        device_outlet = device_params['outlet']  # 1 or 0
        device_key2 = device_params['key2']  # "switch" or "lock"

        # 状态更新
        device_params['params'][device_outlet][device_key2] = controlling_status
        print(device_params)

        concrol = {
            "action": "update",
            "apikey": 'fdd2c4a2-ee08-4b8a-a0cb-46dfd8c3e90a',
            "deviceid": device_params['id'],
            "userAgent": "app",
            "sequence": "1571141530101",
            "params": {
                device_params['key1']: device_params['params']
            },
        }

        print(concrol)
        return concrol

    def on_message(ws, message):
        print("####### on_message #######")
        print(message)

    def on_error(ws, error):
        print("####### on_error #######")
        print(ws)
        print(error)

    def on_close(ws):
        print("####### on_close #######")
        print(ws)
        print("####### closed #######")

    def on_open(ws):
        wdata = json.dumps(woshou, sort_keys=False)
        ws.send(wdata)

        # 读取
        def run(control_params):
            for i in range(1):
                time.sleep(1)
                jdata = json.dumps(control_params, sort_keys=False)
                ws.send(jdata)
            time.sleep(1)
            ws.close()
            print("thread terminating...")

        thread.start_new_thread(
            run(controlling_params(controlling_name=device_name, controlling_status=device_status)), ()
        )

    websocket.enableTrace(False)
    ws = websocket.WebSocketApp(url=url, on_message=on_message, on_error=on_error, on_close=on_close)
    ws.on_open = on_open
    ws.run_forever()

    # print(get_device_status.go(device_name))
    return get_device_status.go(device_name)


if __name__ == "__main__":
    go(device_name='light_nothing', device_status="off")



