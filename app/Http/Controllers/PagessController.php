<?php

namespace App\Http\Controllers;

use App\Models\Temporary;
use Models\Airdata;
use Illuminate\Http\Request;

class PagessController extends Controller
{
    //
    public function index()
    {
        return view('dataview.show');
    }

    public function phpinfo()
    {
        $co2 = Temporary::pluck('co2')->avg();
            $voc = Temporary::pluck('voc')->avg();
            $tem = Temporary::pluck('tem')->avg();
            $hum = Temporary::pluck('hum')->avg();
            $pm25 = Temporary::pluck('pm25')->avg();
            $ch2o = Temporary::pluck('ch2o')->avg();

            $airs = [
            'co2' => $co2, 
            'voc' => $voc, 
            'tem' => $tem, 
            'hum' => $hum, 
            'pm25' => $pm25,
            'ch2o' => $ch2o
            ];

        return [$airs];
    // return view('phpinfo.phpinfo');
    }
}
