<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DevicesController extends Controller
{
    public function light($id) {
        switch ($id) {
            case 1:
                // 定义当id为1时为指定的灯光或设备
                $device_name = "light_spotlight";

                // 获取设备最新状态
                $device_status_array = ppython2("get_device_status::go", $device_name);
                $device_status_now = $device_status_array['status'];

                //简单切换开关状态
                if ($device_status_now == "on")
                    {
                        $device_status_now = "off";
                    } else {
                    $device_status_now = "on";
                }

                // 根据按钮进行灯光指令输出
                 $a = ppython2("light_controller::go",$device_name, $device_status_now);
                return $a;
                break;

            case 2:
                // 定义当id为1时为指定的灯光或设备
                $device_name = "light_ultra_violet";

                // 获取设备最新状态
                $device_status_array = ppython2("get_device_status::go", $device_name);
                $device_status_now = $device_status_array['status'];

                //简单切换开关状态
                if ($device_status_now == "on")
                {
                    $device_status_now = "off";
                } else {
                    $device_status_now = "on";
                }

                // 根据按钮进行灯光指令输出
                $a = ppython2("light_controller::go",$device_name, $device_status_now);
                return $a;
                break;

            case 3:
                // 定义当id为1时为指定的灯光或设备
                $device_name = "light_booth";

                // 获取设备最新状态
                $device_status_array = ppython2("get_device_status::go", $device_name);
                $device_status_now = $device_status_array['status'];

                //简单切换开关状态
                if ($device_status_now == "on")
                {
                    $device_status_now = "off";
                } else {
                    $device_status_now = "on";
                }

                // 根据按钮进行灯光指令输出
                $a = ppython2("light_controller::go",$device_name, $device_status_now);
                return $a;
                break;

            case 0:
                // 定义当id为1时为指定的灯光或设备
                $device_name = "light_IC4_2";

                // 获取设备最新状态
                $device_status_array = ppython2("get_device_status::go", $device_name);
                $device_status_now = $device_status_array['status'];

                //简单切换开关状态
                if ($device_status_now == "on")
                {
                    $device_status_now = "off";
                } else {
                    $device_status_now = "on";
                }

                // 根据按钮进行灯光指令输出
                $a = ppython2("light_controller::go",$device_name, $device_status_now);
                return $a;
                break;
            // 更多

        }

    }
}
