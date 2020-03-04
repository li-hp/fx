

@extends('layouts.app')

@section('title')

@section('content')
{{-- 全局css all  除了头尾意外的部分 --}}


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
                <style type="text/css">#backImg{background: url("/img/owell2d.png");}</style>
                <div class="boxall_3d" id="backImg" style="width:100%;height:100%;background-size: cover; -moz-background-size: cover; ">
                    <div class="alltitle">全景地图</div>
                    <div class="allnav" id="e555"></div>
                    <div class="boxfoot"></div>
                </div> 
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



<script>
uiduck.setOptions({
			templateId: "table",
			url: { url: "http://data.live.126.net/livechannel/sub/3.json", type: "POST", key: "sublives" },
            loading: { icon: "uiduck-loading-6", time: 1000 },
            style: { tbClass: "uiduck-dark" },
			page: true,
			pageOptions: { layout: ["total", , "prev", "next", "last"] },
			fieldOptions: [
				{
					index: true,
					title: "序号"
				},
				{
					key: "cid",
					title: "ID"
				}, {
					key: "cname",
					title: "类型"
				}, {
					key: "collectionId",
					title: "测试",
					type: "map",
					computed: {
						"0": "李白",
						"1": "杜甫",
						"2": "白居易",
						"3": "王安石"
					}
				}, {
					key: "ename",
					title: "名称"
				}, {
					key: "icon",
					title: "图标",
					type: "image",
					width: "30px",
					height: "30px"
				}, {
					key: "tname",
					title: "节目名称"
				}]
		});
    </script>






@stop
