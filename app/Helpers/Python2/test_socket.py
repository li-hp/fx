import socket

def  go(msg): 
    print(msg) 
    try:
        s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
        s.connect(('10.0.75.1',11111))
        bmsg=bytes(msg,"ascii")
        s.send(bmsg)
        print('已发送控制指令') 
    except:
        pass

    






