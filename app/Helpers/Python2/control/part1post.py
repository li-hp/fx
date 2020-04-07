#第一部分，登录易位联服务器，获得rt

from requests import Request, Session
import json
import sys
sys.path.append("./")
from control import constant
from control import sha256


appid = constant.appid1
appkey = constant.appkey1

sign = sha256.main()

head = {
    'Content-Type': 'application/json',
    'Authorization': 'Sign ' + sign
}

body = {
    "appid": "eEk44UiFKs48Mw5UFb6X4nVOB60kw4oz",
    "phoneNumber": "+8618682218203",
    "password": "66668888",
    "ts": "1558004249",
    "version": "8",
    "nonce": "12345678"
}

def main():
    # 运行请求代码
    request = Request(
        'POST',
        url =' https://cn-api.coolkit.cc:8080/api/user/login',
        headers = head,
        data = json.dumps(body, sort_keys=False)
    ).prepare()

    s = Session()
    response = s.send(request)
    json_data = json.loads(response.text)

    return [json_data['at'], json_data['rt']]
    # 导出at，用于part2 获取设备列表


if __name__ == "__main__":
    main()