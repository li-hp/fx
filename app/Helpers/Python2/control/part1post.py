# 第一部分，登录易位联服务器，获得rt

from requests import Request, Session
import json
import sys
# sys.path.append("./")
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
    # "phoneNumber": "+8615915726010",
    # "password": "123123aa",
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
        url=' https://cn-api.coolkit.cc:8080/api/user/login',
        headers=head,
        data=json.dumps(body, sort_keys=False)
    ).prepare()

    s = Session()
    response = s.send(request)
    json_data = json.loads(response.text)

    print(json_data)
    return [json_data]


if __name__ == "__main__":
    main()

    # 写入constant常量文件内，还没有处理好
    # with open('constant1.json', mode='w', encoding='utf-8') as f:  # 文件不存在就会生成
    #     json.dump(
    #         [{"at": json_data['at'], "rt": json_data['rt']}], f)
    #     f.flush()
