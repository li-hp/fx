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
        return view('phpinfo.datav');
    }
}
