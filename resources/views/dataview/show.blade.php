@extends('layouts.app')

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
                <div class="alltitle">
                    <i class="far fa-spin fa-neuter " aria-hidden="true"></i> 
                    营养
                </div>
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
                <div class="alltitle">
                    <i class="far fa-spin fa-neuter " aria-hidden="true"></i> 
                    其他1
                </div>
                <div class="allnav" id="echart5"></div>
                <div class="boxfoot"></div>
            </div>
        </div>

        <div class="col-xs-12 col-sm-3">
            <div class="boxall">
                <div class="alltitle">其他2</div>
                <a type="button" class="btn btn-success btn-sm center-block" 
                    id="ledswitch_all"
                    {{-- href="{{ route('led.socketpython',0) }}" --}}
                    aria-label="Left Align"
                    style="padding-bottom: 0px; padding-top: 0px; margin-top: 0.2rem;">
                    <i class="fa fa-spin fa-lemon " aria-hidden="true"></i> 
                </a>
                <div class="boxfoot"></div>
            </div>
        </div>
    </div>  
@stop