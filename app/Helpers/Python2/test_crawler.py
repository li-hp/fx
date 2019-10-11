import pymysql
import serial
import json
from urllib.request import Request, urlopen
import time
import threading
import socket

encoding = 'utf-8'
BUFSIZE = 1024
class Reader(threading.Thread):
      def __init__(self, client):
          threading.Thread.__init__(self)
          self.client = client
      def run(self):
          while True:
             data = self.client.recv(BUFSIZE)
             if (data):
                  string = bytes.decode(data, encoding)
                #   print(string)
                  strs = str(string)
                  print(strs)
                  print("----------------------------")
                  d={}
                  connection = pymysql.connect(host="47.96.18.108",port=3306,user="root",passwd="root",db="default" )
                #   wangzhi="https://www.jb51.net/article/148183.htm"
                  Clientid=strs[40:49]
                  strs_for_json = strs[55:]
                  strs_for_json= strs_for_json[:-9]
                  print(strs_for_json)
                  s1=strs_for_json.split(";")
                  print(s1)
                  print("----------------------------")
                  d['Clientid']=Clientid
                  for s2 in s1 :
                      s3=s2.split("=",2)
                      key=s3[0][:-4]
                      value=s3[1]
                      d[key]=value
                  print (d)
                  print("----------------------------")
                  data_json=d
                  cursor_ser = connection.cursor()
                  cursor_ser.execute("INSERT INTO airs (co2,voc,tem,hum,pm25,ch2o) VALUES ('%s','%s','%s','%s','%s','%s')" % (data_json['CO2'],data_json['VOC'],data_json['TEMP'],data_json['HUMI'],data_json['PM25'],data_json['CH2O']))
                  connection.commit()
                  connection.close()
                  time.sleep(60)
             else:
                  break
          print("close:", self.client.getpeername() )
      def readline(self):
          rec =self.client.readline()
          if rec:
              string = bytes.decode(rec, encoding)
              if len(string)>2:
                  string = string[0:-2]
              else:
                  string = ' '
          else:
              string = False
          return string

class Listener(threading.Thread):
      def __init__(self, port):
          threading.Thread.__init__(self)
          self.port = port
          self.sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)    
          self.sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
          self.sock.bind(("172.16.85.52", port))
          self.sock.listen(0)

      def run(self):
          print("listener started")
          while True:
            client, cltadd = self.sock.accept()
            Reader(client).start()
            cltadd = cltadd

            print(cltadd)
            print("accept a connect")

lst  = Listener(11111)   # create a listen thread
lst.start() # then start
