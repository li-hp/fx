
# wss://cn-pconnect2.coolkit.cc:8080/api/ws

import websocket
import time
import json
import part1post
import part3post
import part2get
from appid import *
try:
    import thread
except ImportError:
    import _thread as thread


appid = appid1
url = "wss://" + part3post.main()  + ":8080/api/ws"
apikey = "fdd2c4a2-ee08-4b8a-a0cb-46dfd8c3e90a"
deviceid = part2get.main()

woshou = {
    "action": "userOnline",
    "version": 8,
    "ts": 1571141259,
    "at": part1post.main(),
    "userAgent": "app",
    "apikey":"fdd2c4a2-ee08-4b8a-a0cb-46dfd8c3e90a",
    "appid": "eEk44UiFKs48Mw5UFb6X4nVOB60kw4oz",
    "nonce": "12345678",
    "sequence": "1571141530100"
}
concrol = {
    "action":"update",
    "apikey":"fdd2c4a2-ee08-4b8a-a0cb-46dfd8c3e90a",
    "deviceid":"1000d6d6f2",
    "userAgent":"app",
    "sequence":"1571141530101",
    "params":{
        "switch":"on"
    }
}

def on_message(ws, message):
    print(message)

def on_error(ws, error):
    print(error)

def on_close(ws):
    print("### closed ###")

def on_open(ws):
    wdata = json.dumps(woshou, sort_keys=False)
    ws.send(wdata)

    def run(*args):
        for i in range(1):
            time.sleep(1)
            jdata = json.dumps(concrol, sort_keys=False)
            ws.send(jdata)
        time.sleep(1)
        ws.close()
        print("thread terminating...")
    thread.start_new_thread(run, ())


def main():
    websocket.enableTrace(False)
    ws = websocket.WebSocketApp(url= url,
                              on_message = on_message,
                              on_error = on_error,
                              on_close = on_close)
    ws.on_open = on_open
    ws.run_forever()
