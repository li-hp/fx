

@extends('layouts.app')

@section('title')

@section('content')
{{-- 全局css all  除了头尾意外的部分 --}}


<div class="all" style="padding-right: 0px; padding-left:0px; margin-left:0px; margin-right:0px;z-index: 10;">


    {{--coxno   用来加载51vr --}}
    <div class="boxno">
        <div class="allnav" id="player"></div>
    </div>


    {{--maincontain 用于加载echart--}}
    <div class="maincontain maincontain_zhuye" 
        style="padding-right: 0px; padding-left:0px; margin-left:0.1px; margin-right:0.1px;position:relative;z-index: 11;display:bloke;">
        
        <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:0.5px; margin-right:0.5px;">



            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">

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
                    <div class="alltitle">营养</div>
                    <div class="allnav" id="e444"></div>
                    <div class="boxfoot"></div>
                </div>



                <div class="boxall">
                    <div class="alltitle">交互指令</div>
                    <div class="sysw">
                        <button
                        class="changjingqiehuan btn-success center-block btn-sm ">
                        <p style="font-size:5rem;">场景</p>
                        </button>
                    </div>
                    <div class="sysw">
                        <button
                        class="light button-3d button-primary center-block btn-sm ">
                        <p style="font-size:5rem;">灯光</p>
                        </button>
                    </div>
                    <div class="sysw">
                        <button
                        class="heatmap btn-success center-block btn-sm ">
                        <p style="font-size:5rem;">热力</p>
                        </button>
                    </div>
                    <div class="sysw">
                        <button
                        class="curtains btn-primary center-block btn-sm ">
                        <p style="font-size:5rem;">窗帘</p>
                        </button>
                    </div>
                    <div class="sysw">
                        <button
                        class="roam btn-primary center-block btn-sm ">
                        <p style="font-size:5rem;">漫游</p>
                        </button>
                    </div>
                    <div class="sysw">
                        <button
                        class="freshair btn-primary center-block btn-sm ">
                        <p style="font-size:5rem;">新风</p>
                        </button>
                    </div>
                    <div class="sysw">
                        <button
                        class="airpoi btn-primary center-block btn-sm ">
                        <p style="font-size:5rem;">空气</p>
                        </button>
                    </div>
                    <div class="sysw">
                        <button
                        class="dianji btn-primary center-block btn-sm ">
                        <p style="font-size:5rem;">测试</p>
                        </button>
                    </div>
                    <div class="boxfoot"></div>

                </div>
            </div>

            <div class="col-xs-12 col-sm-6">
            </div>

            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">


                <div class="boxallright">
                    <div class="alltitle">光强</div>
                    <div class="allnav" id="e666"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">健身</div>
                    <div class="allnav" id="e777"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">舒适</div>
                    <div class="allnav" id="e888"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">综合</div>
                    <div class="allnav" id="e999"></div>
                    <div class="boxfoot"></div>
                </div>

            </div>

        
        </div>
    </div>


    <div class="miancontain maincontain_kongqi" 
        style="padding-right: 0px; padding-left:0px; margin-left:0.1px; margin-right:0.1px;position:relative;z-index:12;display:bloke;">

        <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">
            <div class="col-xs-12 col-sm-3">

                <!-- <div class="boxall">
                    <div class="alltitle">  空气实时数据 </div>
                    <div class="allnav" id="kechart7">

                        <div class="barbox3">
                        <ul class="clearfix">
                            <li class="pulll_left counter">25℃</li>
                            <li class="pulll_left counter">40%</li>
                            <li class="pulll_left counter">50ppm</li>
                            <li class="pulll_left counter">300ppm</li>
                        </ul>
                        </div>

                        <div class="barbox4">
                        <ul class="clearfix">
                        <li class="pulll_left">温度</li>
                        <li class="pulll_left">湿度</li>
                        <li class="pulll_left">PM2.5</li>
                        <li class="pulll_left">二氧化碳浓度</li>
                        </ul>
                        </div>


                        <div class="barbox3">
                        <ul class="clearfix">
                            <li class="pulll_left counter">20ppm</li>
                            <li class="pulll_left counter">300ppm
                            </li>
                            <li class="pulll_left counter" id="tmp">30db</li>
                            <li class="pulll_left counter" id="hum">300lux</li>
                        </ul>
                        </div>
                        <div class="barbox4">
                        <ul class="clearfix">
                            <li class="pulll_left">甲醛浓度</li>
                            <li class="pulll_left">空气可挥发物</li>
                            <li class="pulll_left">声音强度</li>
                            <li class="pulll_left">光照强度</li>
                        </ul>
                        </div>
                    </div>
                    <div class="boxfoot"></div>
                </div> -->
                <div class="boxall">
                    <div class="alltitle">实时数据</div>
                    <div class="allnav" id="kechart0"></div>
                    <div class="boxfoot"></div>
                </div>

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
                </div>

            </div>

            <div class="col-xs-12 col-sm-6">
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
                        <button
                        class="fushi btn-success center-block btn-sm ">
                        <p style="font-size:5rem;">总开关</p>
                        </button>
                    </div>
                    <div class="sysw">
                        <button
                        class="light btn-success center-block btn-sm ">
                        <p style="font-size:5rem;">auto</p>
                        </button>
                    </div>
                    <div class="boxfoot"></div>
                </div>
            </div>

        </div>
    </div>

    <div class="maincontain maincontain_guangqiang" 
        style="padding-right: 0px; padding-left:0px; margin-left:0.1px; margin-right:0.1px;position:relative;z-index: 12;display:bloke;">


        <style>
        .content { width:100%;
        height:100%;}
        .div_td { width:50%;
        height:50%;
        float:left;
        color:#3490dc;
        text-align:center;
        line-height:250px;
        font-size:5rem; }
        </style>

        <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">
            <div class="col-xs-12 col-sm-3">

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
            </div>

        </div>

    </div>

    <div class="maincontain maincontain_shushi" 
        style="padding-right: 0px; padding-left:0px; margin-left:0.1px;
         margin-right:0.1px;position:relative;z-index: 12;display:bloke;">

        <style>
        .content { width:100%;
        height:100%;}
        .div_td { width:50%;
        height:50%;
        float:left;
        color:#3490dc;
        text-align:center;
        line-height:250px;
        font-size:5rem; }
        </style>

        <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">
            <div class="col-xs-12 col-sm-3">

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
            </div>

        </div>

    </div>

</div>






@stop
