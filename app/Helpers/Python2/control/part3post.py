# 第三步请求分配服务
from requests import Request, Session
import json
import sys

import sys
sys.path.append("./")
from control import constant
from control import sha256
from control import part1post
from control import part15

appid = constant.appid1
url = 'https://cn-api.coolkit.cc:8080/dispatch/app'

head = {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + part15.main()
}

body = {
    "accept": "ws",
    "appid": appid,
    "ts": "1558004249",
    "version": "8",
    "nonce": "12345678"
}


def main():
    # 运行请求代码
    request = Request(
        'POST',
        url=url,
        headers=head,
        data=body
    ).prepare()

    s = Session()
    response = s.send(request)
    json_data = json.loads(response.text)

    # print (json_data['domain'])
    return json_data['domain']


if __name__ == "__main__":
    main()
