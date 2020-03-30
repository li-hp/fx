<?php
//-----------------------------------------------------------
// PPython(PHP and Python).
//   (2012-15 http://code.google.com/p/ppython/)
//
// License: http://www.apache.org/licenses/LICENSE-2.0
//-----------------------------------------------------------

define("LAJP_PORT_2", 11112);         //Python端侦听端口,对应php_python.py的端口
define("LAJP_IP_2", "192.168.28.1");

//php-fpm 地址：172.22.0.9   workspace：172.22.0.5  主机：10.0.75.1
//Python端IP-python端位于workspace容器IP地址172.22.0.9 主机地址10.0.75.1
//由于新建镜像（dock-compose build）后再启动laradock容器可能会导致IP地址有变化
//在主机内使用命令( dock network inspect "lardock-backend网络ID" ) 查看具体的IP地址



define("PARAM_TYPE_ERROR_2", 101);    //参数类型错误
define("SOCKET_ERROR_2", 102);        //SOCKET错误
define("LAJP_EXCEPTION_2", 104);      //Python端反馈异常

function ppython2()
{
    //参数数量
    $args_len = func_num_args();
    //参数数组
    $arg_array = func_get_args();

    //参数数量不能小于1
    if ($args_len < 1)
    {
        throw new Exception("[PPython Error] lapp_call function's arguments length < 1", PARAM_TYPE_ERROR_2);
    }

    //第一个参数是Python模块函数名称，必须是string类型
    if (!is_string($arg_array[0]))
    {
        throw new Exception("[PPython Error] lapp_call function's first argument must be string \"module_name::function_name\".", PARAM_TYPE_ERROR_2);
    }

    if (($socket = socket_create(AF_INET, SOCK_STREAM, 0)) === false)
    {
        throw new Exception("[PPython Error] socket create error.", SOCKET_ERROR_2);
    }

    if (socket_connect($socket, LAJP_IP_2, LAJP_PORT_2) === false)
    {
        throw new Exception("[PPython Error] socket connect error.", SOCKET_ERROR_2);
    }

    //消息体序列化
    $request = serialize($arg_array);
    $req_len = strlen($request);

    $request = $req_len.",".$request;

    //echo "{$request}<br>";

    $send_len = 0;
    do
    {
        //发送
        if (($sends = socket_write($socket, $request, strlen($request))) === false)
        {
            throw new Exception("[PPython Error] socket write error.", SOCKET_ERROR_2);
        }

        $send_len += $sends;
        $request = substr($request, $sends);

    }while ($send_len < $req_len);

    //接收
    $response = "";
    while(true)
    {
        $recv = "";
        if (($recv = socket_read($socket, 1400)) === false)
        {
            throw new Exception("[PPython Error] socket read error.", SOCKET_ERROR_2);
        }
        if ($recv == "")
        {
            break;
        }

        $response .= $recv;

        //echo "{$response}<br>";

    }

    //关闭
    socket_close($socket);

    $rsp_stat = substr($response, 0, 1);    //返回类型 "S":成功 "F":异常
    $rsp_msg = substr($response, 1);        //返回信息

    //echo "返回类型:{$rsp_stat},返回信息:{$rsp_msg}<br>";

    if ($rsp_stat == "F")
    {
        //异常信息不用反序列化
        throw new Exception("[PPython Error] Receive Python exception: ".$rsp_msg, LAJP_EXCEPTION_2);
    }
    else
    {
        if ($rsp_msg != "N") //返回非void
        {
            try {
            if (!unserialize($rsp_msg))
                if ($rsp_msg)
                    echo "receive ".$rsp_msg."<br/>\r\n";

            //反序列化
            return unserialize($rsp_msg);
            }
            catch (Exception $e){
                echo "receive ".$rsp_msg."<br/>\r\n";
            }
        }
    }
}
?>
