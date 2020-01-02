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
    public function kongqi()
    {
        return view('dataview.kongqi');
    }
    public function shuizhi()
    {
        return view('dataview.shuizhi');
    }
    public function shushi()
    {
        return view('dataview.shushi');
    }
    public function guangqiang()
    {
        return view('dataview.guangqiang');
    }
    public function yingyang()
    {
        return view('dataview.yingyang');
    }
    public function jianshen()
    {
        return view('dataview.jianshen');
    }
    public function huiyi()
    {
        return view('dataview.huiyi');
    }
    public function renyuan()
    {
        return view('dataview.renyuan');
    }
    public function test()
    {
        return view('dataview.test');
    }







    public function phpinfo()
    {
        return view('phpinfo.datav');
    }
}
