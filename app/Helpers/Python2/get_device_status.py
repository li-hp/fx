from requests import Request, Session
import json
from control import constant


# from control import part1post


def go(controlling_name):
    url = 'https://cn-api.coolkit.cc:8080/api/user/device/deng'
    head = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + constant.at
    }
    body = {
        "deviceid": constant.device_vs_contrl[controlling_name]['id'],
        "apikey": "fdd2c4a2-ee08-4b8a-a0cb-46dfd8c3e90a",
        "appid": "eEk44UiFKs48Mw5UFb6X4nVOB60kw4oz",
        "ts": "1558004249",
        "version": "8",
        "nonce": "12345678"
    }

    # 运行请求代码
    request = Request(
        'GET',
        url=url,
        headers=head,
        params=body
    ).prepare()

    s = Session()
    response = s.send(request)
    json_data = json.loads(response.text)

    # 根据 controlling_name 判断必要参数的取值,对应 constant 文件内的 device_vs_contrl 字典
    device_id = constant.device_vs_contrl[controlling_name]['id']  # "1000b2f8f1"
    device_outlet = constant.device_vs_contrl[controlling_name]['outlet']  # 1 or 0
    device_key1 = constant.device_vs_contrl[controlling_name]['params_key1']  # "switches" or "lock"
    device_key2 = constant.device_vs_contrl[controlling_name]['params_key2']  # "switch" or "lock"

    # print(json_data)
    return {"id": device_id,
            "outlet": device_outlet,
            "key1": device_key1,  # 用于获取设备控制的参数的key
            "key2": device_key2,  # 用于获取设备控制的参数的key
            "params": json_data['params'][device_key1],  # 用于获取设备控制的参数的values
            "status": json_data['params'][device_key1][device_outlet][device_key2]
            # 用于php函数实时更新设备状态，不能用于light_controller
            }


if __name__ == "__main__":
    # main(controlling_name='light_ring')
    go(controlling_name='light_IC4_2')
