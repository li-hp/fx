###
#
# 第1.5部分，认证刷新，获得新的at


import json
from requests import Request, Session

# 调用 contrl 文件夹内的其他
import sys
sys.path.append("./")
from control import constant
from control import sha256
from control import part1post

sign = sha256.main()
#refreshtoken = part1post.main()
# appid = appid1
url = 'https://cn-api.coolkit.cc:8080/api/user/refresh'
head = {
    'Content-Type': 'application/json',
    'Authorization': 'Sign ' + sign
}



def main():
    # 运行请求代码
    body = {
        "rt": part1post.main()[1],
        "grantType": "refresh",
        "appid": "eEk44UiFKs48Mw5UFb6X4nVOB60kw4oz",
        "nonce": "12345678",
        "ts": "1558004249",
        "version": "8"
    }
    request = Request(
        'GET',
        url=url,
        headers=head,
        params=body
    ).prepare()

    s = Session()
    response = s.send(request)
    json_data = json.loads(response.text)
    #print("json_data: ", json_data)

    # print(json_data['at'])
    return json_data['at']


# 导出at，用于part2 获取设备列表

if __name__ == "__main__":
      main()