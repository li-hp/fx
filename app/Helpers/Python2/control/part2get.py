#第二步请求设备列表

from requests import Request, Session
import json
from control import constant

# appid = appid1
url = 'https://cn-api.coolkit.cc:8080/api/user/device'
head = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + constant.at
}
body = {
    "lang": "cn",
    "appid": "eEk44UiFKs48Mw5UFb6X4nVOB60kw4oz",
    "nonce": "12345678",
    "ts": "1558004249",
    "version": "8"
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
    print(json_data)
    return json_data['devicelist'][0]['deviceid']


if __name__ == "__main__":
    main()
