<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LanjuInside;
use Illuminate\Support\Facades\DB;

class CollectController extends Controller
{
    //实时数据采集
    public function datathismoment() {
        // 设置时区,待优化，写入php.ini文件内
        date_default_timezone_set('PRC');

        $py_data = ppython2("lanju_inside::Lanju_inside");
        DB::table('lanju_insides')->insert($py_data);

        return $py_data;

    }

    // 7小时历史数据
    public function data7hour () {
        date_default_timezone_set('PRC');
        $history_hour = DB::table('lanju_insides')->latest('SERVER_TIME')
            ->where('SERVER_TIME', '>', date('Y-m-d H:i:s',strtotime('-7 hour')))
            ->where('SERVER_TIME', '<=', date('Y-m-d H:i:s',strtotime('now')))
            ->limit(420)->get();

        return $history_hour;
    }

    //7日历史数据
    public function  data7day () {
        date_default_timezone_set('PRC');
        $history_day = DB::table('lanju_insides')->latest('SERVER_TIME')
            ->where('SERVER_TIME', '>', date('Y-m-d H:i:s',strtotime('-7 day')))
            ->where('SERVER_TIME', '<=', date('Y-m-d H:i:s',strtotime('now')))
            ->limit(10800)->get();

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
}

