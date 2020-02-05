@extends('layouts.app')

@section('title')

@section('content')

    <!-- <div id="banner"> -->


        <ul id="banner_img">
            
            <li>
                <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">       
                        <div class="col-xs-12 col-sm-3">

                            <div class="boxall">
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
            </li>
            
            <li>
                <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:0.5px; margin-right:0.5px;">
                    <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">
                        <div class="boxall">
                            <div class="alltitle">1空气</div>
                            <div class="allnav" id="e111"></div>
                            <div class="boxfoot"></div>
                        </div>

                        <div class="boxall">
                            <div class="alltitle">2水</div>
                            <div class="allnav" id="e222"></div>
                            <div class="boxfoot"></div>
                        </div>

                        <div class="boxall">
                            <div class="alltitle">4营养</div>
                            <div class="allnav" id="e444"></div>
                            <div class="boxfoot"></div>
                        </div>

                        {{-- <div class="boxall">
                            <div class="alltitle">5会议室管理</div>
                            <div class="allnav" id="e555"></div>
                            <div class="boxfoot"></div>
                        </div> --}}

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

                        {{-- <div class="boxall_3d">
                            <div class="alltitle">全景地图</div>
                            <div class="allnav">

                            <img src="/img/东田三层.png"    style="position: relative;width:100%;height:100%;opacity:0.4">
                            </div>
                            <div class="boxfoot"></div>
                        </div> --}}
                    </div>
                    <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">
                        <div class="boxno">
                        </div>

                        <div class="boxallright">
                            <div class="alltitle">6光强</div>
                            <div class="allnav" id="e666"></div>
                            <div class="boxfoot"></div>
                        </div>

                        <div class="boxallright">
                            <div class="alltitle">7健身</div>
                            <div class="allnav" id="e777"></div>
                            <div class="boxfoot"></div>
                        </div>

                        <div class="boxallright">
                            <div class="alltitle">8舒适</div>
                            <div class="allnav" id="e888"></div>
                            <div class="boxfoot"></div>
                        </div>

                        <div class="boxallright">
                            <div class="alltitle">9人员管理</div>
                            <div class="allnav" id="e999"></div>
                            <div class="boxfoot"></div>
                        </div>

                    </div>
                </div>
            </li>
    
        </ul>


    
    <!-- </div> -->
@stop

<!--[if IE 6]>

<script src="js/DDPngMin.js"></script>

<script>DD_belatedPNG.fix('.ad_img img,#banner_ctr ul');</script>

<![endif]--> 


