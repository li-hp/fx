@extends('layouts.app')

@section('title')

@section('content')
<script type="text/javascript" src="js/charts/show.js"></script>

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
                <div class="allnav" id="e333"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">健身</div>
                <div class="allnav" id="e444"></div>
                <div class="boxfoot"></div>
            </div>

        </div>

        <div class="col-xs-12 col-sm-6">
        {{-- <div class="boxall_3d">
                <div class="alltitle">全景地图</div>
                <div class="allnav">

                <img src="/img/东田三层.png"    style="position: relative;width:100%;height:100%;opacity:0.4">
                </div>
                <div class="boxfoot"></div>
            </div> --}}
        </div>

        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">营养</div>
                <div class="allnav" id="e666"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">舒适</div>
                <div class="allnav" id="e777"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">会议管理</div>
                <div class="allnav" id="e888"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">人员管理</div>
                <div class="allnav" id="e999"></div>
                <div class="boxfoot"></div>
            </div>

        </div>

    </div>


@stop
