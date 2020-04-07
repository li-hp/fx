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
    # print(json_data['params'][constant.device_vs_contrl[controlling_name]['params_key1']])
    return json_data['params'][constant.device_vs_contrl[controlling_name]['params_key1']]


if __name__ == "__main__":
    # main(controlling_name='light_ring')
    go(controlling_name='light_spotlight')

