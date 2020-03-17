

@extends('layouts.app')

@section('title')

@section('content')
{{-- 全局css all  除了头尾意外的部分 --}}


<div class="all" style="padding-right: 0px; padding-left:0px; margin-left:0px; margin-right:0px;z-index: 10;">


   

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
                    <div class="alltitle">水质</div>
                    <div class="allnav" id="e222"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">光强</div>
                    <div class="allnav" id="e333"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall">
                <style type="text/css">#shushiimg{background:url("/img/xiaoren.png") 5%  center  no-repeat ;}</style>
           <div id="shushiimg" style=" width:100%; height:100%; ">
                    <div class="alltitle">舒适</div>   
                    
                    
                
                  
                    <div class="allnav" id="e444">
                 </div>
                  
                    <div class="boxfoot"></div>
                    
                    </div>
                
                </div>




              
            </div>

            <div class="col-xs-12 col-sm-6">
                <style type="text/css">#backImg{background: url("/img/oweld2dd.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="boxall_3d" id="backImg" style="width:100%; height:97.5%; background-size:100%; -moz-background-size:100%; background-repeat: no-repeat;">

                    <div class="alltitle">全景地图</div>
                    <div class="allnav3d" id="e555"></div>
                    <div class="boxfoot"></div>
                </div> 
            </div>


            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">


                <div class="boxallright">
                    <div class="alltitle">营养</div>
                    <div class="allnav" id="e666"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">健身</div>
                    <div class="allnav" id="e777"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">防疫</div>
                    <div class="allnav" id="e888"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">人员占地密度</div>
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
                    <div class="alltitle">控制</div>

                    
                    <div class="shubox1"> 
                        <div class='henbox'></div>
                        <div class='henbox'>办公区</div>
                        <div class='henbox'>会议室</div>
                        <div class='henbox'>办公区</div>
                        <div class='henbox'>会议室</div>
                        <div class='henbox'>办公区</div>

                    </div>   
                     <div class="shubox2">
                        <div class='henbox'></div>
                        <div class='henbox'>空调</div>
                        <div class='henbox'>空调</div>
                        <div class='henbox'>新风</div>
                        <div class='henbox'>新风</div>
                        <div class='henbox'>门窗</div>


                    </div>  
                     <div class="shubox2">


                                <div class='henbox'></div>
                                                        <div class='henbox'>               <label class="kaiguan">
                                <input type="checkbox">
                                <span></span>
                                <span></span>
                                <span></span>
                                </label>

                                                        </div>
                                                        <div class='henbox'>               <label class="kaiguan">
                                <input type="checkbox">
                                <span></span>
                                <span></span>
                                <span></span>
                                </label></div>
                                                        <div class='henbox'>               <label class="kaiguan">
                                <input type="checkbox">
                                <span></span>
                                <span></span>
                                <span></span>
                                </label></div>
                                                        <div class='henbox'>               <label class="kaiguan">
                                <input type="checkbox">
                                <span></span>
                                <span></span>
                                <span></span>
                                </label></div>
                                                        <div class='henbox'>               <label class="kaiguan">
                                <input type="checkbox">
                                <span></span>
                                <span></span>
                                <span></span>
                                </label></div>

         


                     </div>

                       
              

                 
 

                    <div class="boxfoot"></div>
                </div>
            </div>

        </div>
    </div>

    
    <div class="maincontain maincontain_shuizhi">

   
        
        <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:0.5px; margin-right:0.5px;">



            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">

                <div class="boxall">
                    <div class="alltitle">水质</div>
                    <div class="allnav" id="sz111"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">PH值</div>
                    <div class="allnav" id="sz222"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">浑浊度</div>
                    <div class="allnav" id="sz333"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall">
                    <div class="alltitle">余氯</div>
                    <div class="allnav" id="sz444"></div>
                    <div class="boxfoot"></div>
                </div>
            
                
                </div>

        

            <div class="col-xs-12 col-sm-6">
                <style type="text/css">#backImg{background: url("/img/oweld2dd.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="boxall_3d" id="backImg" style="width:100%; height:97.5%; background-size:100%; -moz-background-size:100%; background-repeat: no-repeat;">

                    <div class="alltitle">全景地图</div>
                    <div class="allnav3d" id="e555"></div>
                    <div class="boxfoot"></div>
                </div> 
            </div>


            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">


                <div class="boxallright">
                    <div class="alltitle">电导率</div>
                    <div class="allnav" id="sz666"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">滤芯情况</div>
                    <div class="allnav" id="sz777"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">建议</div>
                    <div class="allnav" id="sz888"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">区域</div>
                    <div class="allnav" id="sz999">

                    <div class="sysw">
 
                       <a href="#" class="button white bigrounded">茶水间1</a> 
                   </div>
                    <div class="sysw">

                        <a href="#" class="button white bigrounded">茶水间2</a> 
                    </div>
                    <div class="sysw">

                    <a href="#" class="button white bigrounded">茶水间3</a> 
                    </div>
                    <div class="sysw">

                    <a href="#" class="button white bigrounded">办公室</a> 
                    </div>
                        

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
                    <div class="alltitle">室外光强</div>
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
                    <div class="alltitle">办公区1</div>
                    <div class="allnav" id="gechart3"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall">
                    <div class="alltitle">办公区1</div>
                    <div class="allnav" id="gechart4"></div>
                    <div class="boxfoot"></div>
                </div>


      


            </div>

            <div class="col-xs-12 col-sm-6">
            <style type="text/css">#backImg{background: url("/img/owell2dd.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="boxall_3d" id="backImg" style="width:100%; height:97.5%; background-size:100%; -moz-background-size:100%; background-repeat: no-repeat;">
                    <div class="alltitle">全景地图</div>
                    <div class="allnav3d" id="gechart5"></div>
                    <div class="boxfoot"></div>
                </div> 
            </div>




                        <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">


            <div class="boxallright">
                <div class="alltitle">会议室</div>
                <div class="allnav" id="gechart6"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxallright">
                <div class="alltitle">办公区2</div>
                <div class="allnav" id="gechart7"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxallright">
                <div class="alltitle">办公区2</div>
                <div class="allnav" id="gechart8"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxallright">
                    <div class="alltitle">控制</div>

                    
                    <div class="shubox1"> 
                        <div class='henbox'></div>
                        <div class='henbox'>灯光1区</div>
                        <div class='henbox'>灯光2区</div>
                        <div class='henbox'>窗帘1区</div>
                        <div class='henbox'>窗帘2区</div>
                        <div class='henbox'>办公区</div>

                    </div>   
                     <div class="shubox2">
                        <div class='henbox'></div>
                        <div class='henbox'>空调</div>
                        <div class='henbox'>空调</div>
                        <div class='henbox'>新风</div>
                        <div class='henbox'>新风</div>
                        <div class='henbox'>门窗</div>


                    </div>  
                     <div class="shubox2">


                                <div class='henbox'></div>
                                                        <div class='henbox'>              <input type="checkbox" class="jtoggler" data-jtmulti-state></div>

                                                      
                                                        <div class='henbox'>                <input type="checkbox" class="jtoggler" data-jtmulti-state></div>
                                                        <div class='henbox'>               <input type="checkbox" class="jtoggler" data-jtmulti-state></div>
                                                     
                                                        <div class='henbox'>           <input type="checkbox" class="jtoggler" data-jtmulti-state></div>
                                                        <div class='henbox'>             <input type="checkbox" class="jtoggler" data-jtmulti-state></div>

         


                    

                       
              

                 
 

                    <div class="boxfoot"></div>
                </div>
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
