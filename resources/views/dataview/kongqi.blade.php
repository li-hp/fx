@extends('layouts.app')

@section('title')

@section('content')



    <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">
        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">二氧化碳</div>
                <div class="allnav" id="kechart1"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">可挥发化合物</div>
                <div class="allnav" id="kechart2"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">湿度</div>
                <div class="allnav" id="kechart3"></div>
                <div class="boxfoot"></div>
            </div>   <div class="boxall">
                <div class="alltitle">   </div>
                <div class="allnav" id="kechart7"></div>







                <div class="boxfoot"></div>
            </div>



        </div>

        <div class="col-xs-12 col-sm-6">
            <div class="boxall_3d">
                <div class="alltitle">全景地图</div>
                <div class="allnav">

                <img src="/img/东田三层.png"    style="position: relative;width:100%;height:100%;opacity:0.4">
                </div>
                <div class="boxfoot"></div>
            </div>
        </div>


        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">温度</div>
                <div class="allnav" id="kechart4"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">PM2.5</div>
                <div class="allnav" id="kechart5"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">甲醛</div>
                <div class="allnav" id="kechart6"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">新风控制</div>
                <div class="sysw">
                    <a type="button"
                    class="btn btn-primary center-block btn-sm" >
                    <p style="font-size:5rem;">总开关</p>
                    </a>
                </div>
                <div class="sysw">
                    <a type="button"
                    class="btn btn-primary center-block btn-sm"
                    aria-label="Right Align">
                    <p style="font-size:5rem;">AUTO</p>
                    </a>
                </div>


                <div class="boxfoot"></div>
            </div>

        </div>

    </div>


@stop