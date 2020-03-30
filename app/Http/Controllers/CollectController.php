<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LanjuInside;
use Illuminate\Support\Facades\DB;

class CollectController extends Controller
{
    //实时数据采集
    public function datathismoment() {
        // 设置时区
        date_default_timezone_set('PRC');

        $py_data = ppython2("lanju_inside::Lanju_inside");
        DB::table('lanju_insides')->insert($py_data);

        return $py_data;

    }

    // 7小时历史数据
    public function data7hour () {
        $hourtest = DB::table('lanju_insides')->latest('SERVER_TIME')
            ->where('SERVER_TIME', '>', date('Y-m-d H:i:s',strtotime('-7 day')))
            ->where('SERVER_TIME', '<=', date('Y-m-d H:i:s',strtotime('now')))
            ->limit(10800)->get();

        return $hourtest;
    }

    //7日历史数据
    public function  data7day () {
        $day_data = LanjuInside::
        whereDate('SERVER_TIME', '>', date('Y-m-d',strtotime('-2 day')))
            ->whereDate('SERVER_TIME', '<', date('Y-m-d',strtotime('now')))
            ->pluck('SERVER_TIME');
//        return $day_data;
    }

}

