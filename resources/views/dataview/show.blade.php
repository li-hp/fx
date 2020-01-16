@extends('layouts.app')

@section('title')

@section('content')

    <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:0.5px; margin-right:0.5px;">



        <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">

            <div class="boxno">
                <div class="allnav" id="player"></div>
            </div>

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
                    class="light button-3d button-plain button-primary center-block btn-sm ">
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


@stop
