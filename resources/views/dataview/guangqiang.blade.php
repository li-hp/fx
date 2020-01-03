@extends('layouts.app')

@section('title')

@section('content')
<script>
getdocument.getElementByClass("nav-link1").innerHTML="font-color:rgb(90, 134, 255)";
</script>

<style>
.content { width:100%;
height:100%;

}
.div_td { width:50%;
height:50%;
float:left;
color:#3490dc;
text-align:center;
line-height:250px;
font-size:5rem;
}
</style>

    <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">
        <div class="col-xs-12 col-sm-3">

        <div class="boxno">

                 <div class="allnav" id="player" style="display:none;"></div>

         </div>
            <div class="boxall">
                <div class="alltitle">光照昼夜节律图</div>
                <div class="allnav" id="gechart1"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">实时光强</div>
                <div class="allnav" id="gechart2">




                        <div class="content">
                        <div class="div_td" >
                        室内光强
                        </div>
                        <div class="div_td" >
                        室外光强
                        </div>
                        <div class="div_td" id="shineiguangqiang">

                        </div>
                        <div class="div_td" id="shiwaiguangqiang">

                        </div>
                        </div>



                </div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxall">
                <div class="alltitle">光强曲线</div>
                <div class="allnav" id="gechart3"></div>
                <div class="boxfoot"></div>
            </div>


             <div class="boxall">
                <div class="alltitle">光照控制</div>
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

        <div class="col-xs-12 col-sm-9">
        {{-- <div class="boxall_3d">
                <div class="alltitle">全景地图</div>
                <div class="allnav">

                <img src="/img/东田三层.png"    style="position: relative;width:100%;height:100%;opacity:0.4">
                </div>
                <div class="boxfoot"></div>
            </div> --}}
        </div>



    </div>


@stop
