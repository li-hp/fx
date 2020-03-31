<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LanjuInside;
use Illuminate\Support\Facades\DB;
use phpDocumentor\Reflection\Types\Array_;

class CollectController extends Controller
{
    //实时数据采集
    public function datathismoment() {
        // 设置时区,待优化，写入php.ini文件内
        date_default_timezone_set('PRC');

        //插入数据
        $py_data = ppython2("lanju_inside::Lanju_inside");
        DB::table('lanju_insides')->insert($py_data);

        //读取最新数据
        $maxid = DB::table('lanju_insides')->max('id');
        $data_now = DB::table('lanju_insides')->where('id', '=', $maxid)->first();

        return $py_data;
    }

    // 7小时历史数据
    public function data7hour () {
        date_default_timezone_set('PRC');
        $history_hour_origin = DB::table('lanju_insides')->latest('SERVER_TIME')
            ->where('SERVER_TIME', '>', date('Y-m-d H:i:s',strtotime('-7 hour')))
            ->where('SERVER_TIME', '<=', date('Y-m-d H:i:s',strtotime('now')))
            ->limit(420)->get()->toArray();
        $history_hour = $this->array_change($history_hour_origin);
        return $history_hour;
    }

    //7日历史数据
    public function  data7day () {
        date_default_timezone_set('PRC');
        $history_day_origin = DB::table('lanju_insides')->latest('SERVER_TIME')
            ->where('SERVER_TIME', '>', date('Y-m-d H:i:s',strtotime('-7 day')))
            ->where('SERVER_TIME', '<=', date('Y-m-d H:i:s',strtotime('now')))
            ->limit(10800)->get()->toArray();
        $history_day = $this->array_change($history_day_origin);
        return $history_day;
    }

    public function axis () {
        date_default_timezone_set('PRC');
        $axis7days = [date('Y-m-d H:i:s',strtotime('-6 day')),
            date('Y-m-d H:i:s',strtotime('-5 day')),
            date('Y-m-d H:i:s',strtotime('-4 day')),
            date('Y-m-d H:i:s',strtotime('-3 day')),
            date('Y-m-d H:i:s',strtotime('-2 day')),
            date('Y-m-d H:i:s',strtotime('-1 day')),
            date('Y-m-d H:i:s',strtotime('now'))];

        $axis7hour = [date('Y-m-d H:i:s',strtotime('-6 hour')),
            date('Y-m-d H:i:s',strtotime('-5 hour')),
            date('Y-m-d H:i:s',strtotime('-4 hour')),
            date('Y-m-d H:i:s',strtotime('-3 hour')),
            date('Y-m-d H:i:s',strtotime('-2 hour')),
            date('Y-m-d H:i:s',strtotime('-1 hour')),
            date('Y-m-d H:i:s',strtotime('now'))];
        return [$axis7days,$axis7hour];
    }

    public function array_change($originArray) {

        //定义必要的变量
        $part = 7;
        $ori = $originArray;
        $length = (int)count($originArray) / $part;
        $strdata = ["DeviceID", "TEMP", "PM25", "CO2", "NOISE", "HUMI", "VOC", "CH2O", "LUX"];

        // 分成 $part 组
        $array2 = [];
        for ($i=0; $i<$part; $i++) {
            $array1 = [];
            for ($j=0; $j<$length; $j++) {
                array_push($array1,$ori[$j]);
                array_shift($ori);
                array_push($ori,$ori[$j]);
            }
            array_push($array2,$array1);
        }

        // 计算分组的平均值
        $array_4 = [];
        for ($a=0; $a<$part; $a++) {
            $array_avg = [];
            for ($b=1; $b<count($strdata); $b++) {
                $sum = 0;
                for ($c=0; $c<count($array2[$a]); $c++) {
                    $str = object_array($strdata[$b]);
                    $sum += $array2[$a][$c]->$str; //d可以h不可以
                }
                $avg = round($sum / count($array2[$a]),1);
                array_push($array_avg,$avg);
            }
            array_push($array_4,$array_avg);
        }

        return $array_4 ;
    }


}

