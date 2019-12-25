@extends('layouts.app')

@section('title')

@section('content')


    <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">
        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">空气</div>
                <div class="allnav" id="e111"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">水</div>
                <div class="allnav" id="e222"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">光强</div>
                <div class="allnav" id="e666"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">健身</div>
                <div class="allnav" id="e777"></div>
                <div class="boxfoot"></div>
            </div>

        </div>

        <div class="col-xs-12 col-sm-6">
            <div class="boxall_3d">
                <div class="alltitle">全景地图</div>
                <div class="allnav"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">营养</div>
                <div class="allnav" id="e444"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">舒适</div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">会议管理</div>
                <div class="allnav" id="e888"></div>
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
