# Python
# 生成签名
import hashlib
import hmac
import base64
import sys

sys.path.append("/")
from control import constant

#
appid = constant.appid1
appkey = constant.appkey1


# sha256加密后返回的二进制数据使用base64编码（易微联标准）
def makeSign(key, value):
    message = value.encode('utf-8')
    sha256_message_dig = hmac.new(key.encode('utf-8'), message, digestmod=hashlib.sha256).digest()
    bash64_sha256_message = base64.b64encode(sha256_message_dig).decode('utf-8')
    return bash64_sha256_message


def main():
    import json
    data = {
        "appid": appid,
        "phoneNumber": "+8618682218203",
        "password": "66668888",
        "ts": "1558004249",
        "version": "8",
        "nonce": "12345678"
    }
    message = json.dumps(data, sort_keys=False)
    Sign = makeSign(appkey, message)
    return Sign


if __name__ == "__main__":
    main()
