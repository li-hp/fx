@extends('layouts.app')

@section('title')

@section('content')
<script>
getdocument.getElementByClass("nav-link1").innerHTML="font-color:rgb(90, 134, 255)";
</script>

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
                <div class="allnav" id="kechart3"></div>
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
            </div> <div class="boxall">
                <div class="alltitle">  </div>
                <div class="allnav" id="kechart6"></div>
                <div class="boxfoot"></div>
            </div>

        </div>

    </div>


@stop
