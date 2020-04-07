from requests import Request, Session
import json
from control import constant
from control import part1post

url = 'https://cn-api.coolkit.cc:8080/api/user/device/deng'
head = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + part1post.main()[0]
}
body = {
    "deviceid": constant.mianban1,
    "apikey": "fdd2c4a2-ee08-4b8a-a0cb-46dfd8c3e90a",
    "appid": "eEk44UiFKs48Mw5UFb6X4nVOB60kw4oz",
    "ts": "1558004249",
    "version": "8",
    "nonce": "12345678"
}


def main():
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
    # print([part1post.main()[0], json_data['params']['switches']])
    return [part1post.main()[0], json_data['params']['switches']]


if __name__ == "__main__":
    main()

