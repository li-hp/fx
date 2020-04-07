<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\LedStatus;


class LedsController extends Controller
{


    public function light($id){

        // 根据按钮进行灯光指令输出
        ppython2("websocketapp::main", 'light1', 'on');
    }

//    public function websocket_ppython() {
////        ppython2("test_socket::go" );
//        ppython2("websocket45::main");
//    }
//
//    public function update(){
//
//        $led = LedStatus::first();
//        $lednew = ledonoff($led->id, $led->ch1, $led->ch2, $led->ch3);
//        $led->update($lednew);
//    }
//
//    public function show(){
//        $led = LedStatus::where('flag', '=', 'led')->first();
//        return [$led->ch1, $led->ch2, $led->ch3];

//    }
}
