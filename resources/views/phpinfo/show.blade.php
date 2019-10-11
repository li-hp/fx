@extends('layouts2.app')

@section('title')

@section('content')

    <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">  
        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">空气</div>
                <div class="allnav" id="echart1"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">水</div>
                <div class="allnav" id="echart2"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-6">
            <div class="boxall_3d">
                <div class="alltitle">全景地图</div>
                <div class="allnav" id="echart3"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">营养</div>
                <div class="allnav" id="echart5"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">健身</div>
                <div class="allnav" id="echart6"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

    </div>      

    <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">  
        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">消防</div>
                <div class="allnav" id="echart1"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">安防</div>
                <div class="allnav" id="echart3"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle"></div>
                <div class="allnav" id="echart5"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">其他2</div>
                <div class="boxfoot"></div>
            </div>
        </div>
    </div>  
@stop