

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
    <div class="maincontain maincontain_zhuye">
        
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


    <div class="miancontain maincontain_kongqi" style="margin-top:50px">


        <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">
            <div class="col-xs-12 col-sm-3">

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
                    <div class="alltitle">新风控制交互</div>
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

    <div class="maincontain maincontain_guangqiang">

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
                    <div class="alltitle">光照控制交互</div>
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

    <div class="maincontain maincontain_shushi">

        <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">
            <div class="col-xs-12 col-sm-3">

                <div class="boxall">
                    <div class="alltitle">实时舒适度</div>
                    <div class="allnav" id="shushi_echart_1"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">舒适度变化趋势</div>
                        <div class="allnav" id="shushi_echart_2">    
                    </div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">舒适度热词分析</div>
                    <div class="allnav" id="shushi_echart_3"></div>
                    <div class="boxfoot"></div>
                </div>


                <div class="boxall">
                    <div class="alltitle">舒适交互</div>
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

    <div class="maincontain maincontain_szyy">


        <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">
            <div class="col-xs-12 col-sm-3">

                <div class="boxall">
                    <div class="alltitle">水质指标</div>
                    <div class="allnav" id="szyy_echarts_1"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">净水器滤芯使用情况</div>
                        <div class="allnav" id="szyy_echarts_2">    
                    </div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">今日菜品营养结构</div>
                    <div class="allnav" id="szyy_echarts_3"></div>
                    <div class="boxfoot"></div>
                </div>


                <div class="boxall">
                    <div class="alltitle">水质&营养交互</div>
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

    <div class="maincontain maincontain_kangyi">
        <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:9.5px; margin-right:9.5px;">
            <div class="col-xs-12 col-sm-3">

                <div class="boxall">
                    <div class="alltitle">红外测温门禁实时数据</div>
                    <div class="allnav" id="kangyi_echarts_0"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">消毒时长管理</div>
                        <div class="allnav" id="kangyi_echarts_1">    
                    </div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">会议管理</div>
                    <div class="allnav" id="kangyi_echarts_2"></div>
                    <div class="boxfoot"></div>
                </div>


                <div class="boxall">
                    <div class="alltitle">舒适交互</div>
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

            <div class="col-xs-12 col-sm-6">
            </div>

            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">


            <div class="boxallright">
                <div class="alltitle">表格1</div>
                <div class="allnav" style="padding-left:100px; padding-right: 10px" id="table" ></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxallright">
                <div class="alltitle">表格2</div>
                <div class="allnav" id="kangyi_echarts_5"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxallright">
                <div class="alltitle">舒适</div>
                <div class="allnav" id="kangyi_echarts_6"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxallright">
                <div class="alltitle">综合</div>
                <div class="allnav" id="kangyi_echarts_7"></div>
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
