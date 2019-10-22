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
                <div class="alltitle">消防</div>
                <div class="allnav" id="e555">
                    <div class="radar">
                        <div class="line"></div>
                    </div>


                </div>
                
                <div class="boxfoot"></div>
            </div>
        </div>

    </div>      

    <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">  
        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">光强</div>
                <div class="allnav" id="e666"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">健身</div>
                <div class="allnav" id="e777"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">舒适</div>
                <div class="allnav" id="e888"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">安防</div>
                <div class="allnav" id="e999"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        {{-- <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">9安防</div>


                <div class="bar">
                    <div class="barbox1">
                      <ul class="clearfix">
                        <li class="pulll_left">办公区人数</li>
                        <li class="pulll_left">会议区人数</li>
                        <li class="pulll_left">来访人数</li>
                      </ul>
                    </div>
                    <div class="barbox2">
                      <ul class="clearfix">
                        <li class="pulll_left">75</li>
                        <li class="pulll_left">10</li>
                        <li class="pulll_left">3</li>
                      </ul>
                    </div>
                </div>  

                <div class="bar">
                    <div class="barbox1">
                      <ul class="clearfix">
                        <li class="pulll_left">已开活动窗</li>
                        <li class="pulll_left">已开门</li>
                        <li class="pulll_left">门窗状态</li>
                      </ul>
                    </div>
                    <div class="barbox2">
                      <ul class="clearfix">
                        <li class="pulll_left">5</li>
                        <li class="pulll_left">3</li>
                        <li class="pulll_left">正常</li>

                      </ul>
                    </div>
                </div>  

                <div class="bar">
                    <div class="barbox1">
                      <ul class="clearfix">
                        <li class="pulll_left">已开活动窗</li>
                        <li class="pulll_left">已开门</li>
                        <li class="pulll_left">门窗状态</li>
                      </ul>
                    </div>
                    <div class="barbox2">
                      <ul class="clearfix">
                        <li class="pulll_left">5</li>
                        <li class="pulll_left">3</li>
                        <li class="pulll_left">正常</li>

                      </ul>
                    </div>
                </div>

                <div class="boxfoot"></div>
            </div>
        </div> --}}
    </div>  

@stop