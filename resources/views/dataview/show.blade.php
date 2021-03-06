

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
                    <div class="allnav" id="e444"> </div>
                    <div class="boxfoot"></div>  
                </div>


                
            </div>

            </div>

            <div class="col-xs-12 col-sm-6">
                <style type="text/css">#backImgshow{background: url("/img/owell2dd.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="boxall_3d" id="backImgshow" style="width:100%; height:97.5%; background-size:100%; -moz-background-size:100%; background-repeat: no-repeat;">

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
                    <div class="alltitle">人员密度</div>
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
                <style type="text/css">#backImgkq{background: url("/img/owell2dd.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="boxall_3d" id="backImgkq" style="width:100%; height:97.5%; background-size:100%; -moz-background-size:100%; background-repeat: no-repeat;">

                    <div class="alltitle">全景地图</div>
                    <div class="allnav3d" id="kechart555"></div>
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
                </div>

                <div class="boxall">
                    <div class="alltitle">控制</div>

                   
                    <div class="shubox2"> 
                        <div class='henbox'></div>    
                         <div class='henbox'>办公室空调</div>
                        <div class='henbox'>办公室新风</div>
                        <div class='henbox'>会议室空调</div>
                   
                        <div class='henbox'>会议室新风</div>
                        <div class='henbox'></div>

                    </div>   
                     <div class="shubox3">   
                          <div class='henbox'></div>
                        <div class='henbox'>模式</div>
                        <div class='henbox'>模式</div>
                        <div class='henbox'>模式</div>
                    
                        <div class='henbox'>模式</div>
                        <div class='henbox'></div>


                    </div>  
                     <div class="shubox4">
                     <div class='henbox'></div>
                     <div class='henbox'>                <div class="pretty circle primary">
            <input type="radio" name="radio1" checked  onclick="kqcontrol1(1)"> 
            <label><i class="default"></i> 低</label>
          </div>
          <div class="pretty circle success">
            <input type="radio" name="radio1"  onclick="kqcontrol1(2)"> 
            <label><i class="default"></i> 中</label>
          </div>
          <div class="pretty circle danger"onclick="kqcontrol1(3)">
            <input type="radio" name="radio1"> 
            <label><i class="default"></i> 高</label>
          </div>
             </div>
           

                    <div class='henbox'>                <div class="pretty circle primary">
            <input type="radio" name="radio4" checked onclick="kqcontrol2(1)">
            <label><i class="default"></i> 低</label>
          </div>
          <div class="pretty circle success">
            <input type="radio" name="radio4"onclick="kqcontrol2(2)">
            <label><i class="default"></i> 中</label>
          </div>
          <div class="pretty circle danger"onclick="kqcontrol2(3)">
            <input type="radio" name="radio4"> 
            <label><i class="default"></i> 高</label>
          </div>
             </div>

             <div class='henbox'>                <div class="pretty circle primary">
            <input type="radio" name="radio7" checked  onclick="kqcontrol3(1)">
            <label><i class="default"></i> 低</label>
          </div>
          <div class="pretty circle success">
            <input type="radio" name="radio7" onclick="kqcontrol3(2)">
            <label><i class="default"></i> 中</label>
          </div>
          <div class="pretty circle danger" onclick="kqcontrol3(3)">
            <input type="radio" name="radio7"> 
            <label><i class="default"></i> 高</label>
          </div>
             </div>



                    <div class='henbox'>             <div class="pretty circle primary">
            <input type="radio" name="radio11" checked onclick="kqcontrol4(1)">
            <label><i class="default"></i> 低</label>
          </div>
          <div class="pretty circle success">
            <input type="radio" name="radio11"      onclick="kqcontrol4(2)">
            <label><i class="default"></i> 中</label>
          </div>
          <div class="pretty circle danger"  onclick="kqcontrol4(3)">
            <input type="radio" name="radio11"> 
            <label><i class="default"></i> 高</label>
          </div>
</div>

  


                       
              

                 
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
                <style type="text/css">#backImgsz{background: url("/img/owell2dd.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="boxall_3d" id="backImgsz" style="width:100%; height:97.5%; background-size:100%; -moz-background-size:100%; background-repeat: no-repeat;">

                    <div class="alltitle">全景地图</div>
                    <div class="allnav3d" id="sz555"></div>
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
 
                       <a  class="button white bigrounded"  onclick="szbutton(1)"> 茶水间1</a> 
                   </div>

                    <div class="sysw">

                        <a  class="button white bigrounded"  onclick="szbutton(2)">茶水间2</a> 
                    </div>

                    <div class="sysw">

                    <a  class="button white bigrounded"  onclick="szbutton(3)">茶水间3</a> 
                    </div>

                    <div class="sysw">

                    <a  class="button white bigrounded" onclick="szbutton(4)">办公室</a> 
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
                    <div class="alltitle">会议室（日）</div>
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
                    <div class="alltitle">办公区1（日）</div>
                    <div class="allnav" id="gechart3"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall">
                    <div class="alltitle">办公区2（日）</div>
                    <div class="allnav" id="gechart4"></div>
                    <div class="boxfoot"></div>
                </div>


      


            </div>

            <div class="col-xs-12 col-sm-6">
            <style type="text/css">#backImggq{background: url("/img/owell2dd.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="boxall_3d" id="backImggq" style="width:100%; height:97.5%; background-size:100%; -moz-background-size:100%; background-repeat: no-repeat;">
                    <div class="alltitle">全景地图</div>
                    <div class="allnav3d" id="gechart5"></div>
                    <div class="boxfoot"></div>
                </div> 
            </div>




                        <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">


            <div class="boxallright">
                <div class="alltitle">室外光强（周）</div>
                <div class="allnav" id="gechart6"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxallright">
                <div class="alltitle">办公区1（周）</div>
                <div class="allnav" id="gechart7"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxallright">
                <div class="alltitle">办公区2（周）</div>
                <div class="allnav" id="gechart8"></div>
                <div class="boxfoot"></div>
            </div>

            <div class="boxallright">
                    <div class="alltitle">控制</div>

                     
                    <div class="shubox3"> 
                        <div class='henbox'></div>    
                         <div class='henbox'></div>
                        <div class='henbox'>新风</div>
                        <div class='henbox'>空调</div>
                   
                        <div class='henbox'></div>
                        <div class='henbox'></div>

                    </div>   
                     <div class="shubox3">   
                          <div class='henbox'></div>
                        <div class='henbox'></div>
                        <div class='henbox'>模式</div>
                        <div class='henbox'>温度</div>
                    
                        <div class='henbox'></div>
                        <div class='henbox'></div>


                    </div>  
                     <div class="shubox4">
                     <div class='henbox'></div>
                     <div class='henbox'></div>

                    <div class='henbox'>                <div class="pretty circle primary">
            <input type="radio" name="radio14" checked  onclick="gqcontrol1(1)"> 
            <label><i class="default"></i> 低</label>
          </div>
          <div class="pretty circle success">
            <input type="radio" name="radio14" onclick="gqcontrol1(2)"> 
            <label><i class="default"></i> 中</label>
          </div>
          <div class="pretty circle danger" onclick="gqcontrol1(3)"> 
            <input type="radio" name="radio14"> 
            <label><i class="default"></i> 高</label>
          </div>
                    </div>
                    <div class='henbox'>             <div class="pretty circle primary">
            <input type="radio" name="radio17" checked   onclick="gqcontrol2(1)"> 
            <label><i class="default"></i> 低</label>
          </div>
          <div class="pretty circle success">
            <input type="radio" name="radio17" onclick="gqcontrol2(2)"> 
            <label><i class="default"></i> 中</label>
          </div>
          <div class="pretty circle danger" onclick="gqcontrol2(3)"> 
            <input type="radio" name="radio17"> 
            <label><i class="default"></i> 高</label>
          </div>
</div>

  


                       
              

                 
                    </div>

                    <div class="boxfoot"></div>
                </div>
            </div>

        </div>
    </div>


    <div class="maincontain maincontain_shushi">
        
        <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:0.5px; margin-right:0.5px;">



            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">

                <div class="boxall">
                    <div class="alltitle">舒适</div>
                    <style type="text/css">#shushiimg{background:url("/img/xiaoren.png") 5%  center  no-repeat ;}</style>
                    <div id="shushiimg" style=" width:100%; height:100%; ">
                    <div class="allnav" id="ss111"></div>
                    </div>
                    <div class="boxfoot"></div>
                </div>


                

                <div class="boxall">
                    <div class="alltitle">噪声（日）</div>
                    <div class="allnav" id="ss222"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">温度（日）</div>
                    <div class="allnav" id="ss333"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall">
          
                    <div class="alltitle">湿度（日）</div>   
                    
                    
                
                  
                    <div class="allnav" id="ss444">
               
                  
                    <div class="boxfoot"></div>
                    
                    </div>
                
                </div>




              
            </div>

            <div class="col-xs-12 col-sm-6">
            <style type="text/css">#backImgss{background: url("/img/owell2dd.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="boxall_3d" id="backImgss" style="width:100%; height:97.5%; background-size:100%; -moz-background-size:100%; background-repeat: no-repeat;">
                    <div class="alltitle">全景地图</div>
                    <div class="allnav3d" id="ss555"></div>
                    <div class="boxfoot"></div>
                </div> 
            </div>


            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">


                <div class="boxallright">
                    <div class="alltitle">温度（周）</div>
                    <div class="allnav" id="ss666"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">湿度（周）</div>
                    <div class="allnav" id="ss777"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">烟感</div>
                    <div class="allnav" id="ss888">
                    
                    <div class="sysw">
 
                       <a href="#" class="button white bigrounded">烟感1</a> 
                   </div>
                    <div class="sysw">

                        <a href="#" class="button white bigrounded">烟感2</a> 
                    </div>
                    <div class="sysw">

                    <a href="#" class="button white bigrounded">烟感3</a> 
                    </div>
                    <div class="sysw">

                    <a href="#" class="button white bigrounded">烟感4</a> 
                    </div>
                    <div class="sysw2">
                      <div style="color:#fff;font-size:2.5rem; "> 正常</div>

                    </div>
                    <div class="sysw2">
                      <div style="color:#fff;font-size:2.5rem; "> 正常</div>

                    </div>
                    <div class="sysw2">
                      <div style="color:#fff;font-size:2.5rem; "> 正常</div>

                    </div>
                    <div class="sysw2">
                      <div style="color:#fff;font-size:2.5rem; "> 正常</div>

                    </div>
                        
                    
                    </div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">控制</div>
                    <div class="allnav" id="ss999"></div>

                     
                    <div class="shubox3"> 
                        <div class='henbox'></div>    
                         <div class='henbox'></div>
                        <div class='henbox'>新风</div>
                        <div class='henbox'>空调</div>
                   
                        <div class='henbox'></div>
                        <div class='henbox'></div>

                    </div>   
                     <div class="shubox3">   
                          <div class='henbox'></div>
                        <div class='henbox'></div>
                        <div class='henbox'>模式</div>
                        <div class='henbox'>温度</div>
                    
                        <div class='henbox'></div>
                        <div class='henbox'></div>


                    </div>  
                     <div class="shubox4">
                     <div class='henbox'></div>
                     <div class='henbox'></div>

                    <div class='henbox'>                <div class="pretty circle primary">
            <input type="radio" name="radio20" checked  onclick="sscontrol1(1)"> 
            <label><i class="default"></i> 低</label>
          </div>
          <div class="pretty circle success">
            <input type="radio" name="radio20"   onclick="sscontrol1(2)"> 
            <label><i class="default"></i> 中</label>
          </div>
          <div class="pretty circle danger" onclick="sscontrol1(3)"> 
            <input type="radio" name="radio20"> 
            <label><i class="default"></i> 高</label>
          </div>
                    </div>
                    <div class='henbox'>             <div class="pretty circle primary">
            <input type="radio" name="radio24" checked  onclick="sscontrol2(1)"> 
            <label><i class="default"></i> 低</label>
          </div>
          <div class="pretty circle success">
            <input type="radio" name="radio24"  onclick="sscontrol2(2)"> 
            <label><i class="default"></i> 中</label>
          </div>
          <div class="pretty circle danger"> 
          <input type="radio" name="radio24"  onclick="sscontrol2(3)"> 
            <label><i class="default"></i> 高</label>
          </div>
</div>

  


                       
              

                 
                    </div>

                    <div class="boxfoot"></div>
                </div>

            </div>

        
        </div>
    </div>

    
    <div class="maincontain maincontain_yingyang">
        
        <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:0.5px; margin-right:0.5px;">



            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">

                <div class="boxall">
                    <div class="alltitle">营养</div>
                    <div class="allnav" id="yy111"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">综合评分</div>
                    <div class="allnav" id="yy222"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">用餐情况（日）</div>
                    <div class="allnav" id="yy333"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall">
                    <div class="alltitle">营养摄入</div>
                    <div class="allnav" id="yy444"></div>
                    <div class="boxfoot"></div>
        
            </div></div>
                    <div class="col-xs-12 col-sm-6">
                <style type="text/css">#backImgyy{background: url("/img/owell2dd.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="boxall_3d" id="backImgyy" style="width:100%; height:97.5%; background-size:100%;background-repeat: no-repeat;">

                    <div class="alltitle">全景地图</div>
                    <div class="allnav3d" id="yy555"></div>

                    <div class="boxfoot"></div>
                </div> 
            </div>


            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">


                <div class="boxallright">
                    <div class="alltitle">每日菜单</div>


                    <style type="text/css">#backImgcaidan{background: url("/img/caidan.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="caidanimg" id="backImgcaidan"  style="width:100%; height:100%; background-size:100%;background-repeat: no-repeat;">

                 
                 
                   <div class="allnav" id="yy666"></div>
                    </div>



                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">果蔬推广</div>
                    <style type="text/css">#backImgcaidan{background: url("/img/caidan.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="caidanimg" id="backImgcaidan"  style="width:100%; height:100%; background-size:100%;background-repeat: no-repeat;">

                    <div class="allnav" id="yy777"></div>
                    </div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">用餐情况（周）</div>
                    <div class="allnav" id="yy888"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">充值查询</div>
                    <style type="text/css">#backImgcz{background: url("/img/chongzhi.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="caidanimg" id="backImgcz"  style="width:100%; height:100%; background-size:100%;background-repeat: no-repeat;">

                    <div class="allnav" id="yy777"></div>
                    </div>
                    <div class="boxfoot"></div>
                </div>
                    <div class="boxfoot"></div>
                </div>

            </div>

        
        </div>
    </div>



    
    {{--maincontain 用于加载echart--}}
    <div class="maincontain maincontain_jianshen">
        
        <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:0.5px; margin-right:0.5px;">



            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">

                <div class="boxall">
                    <div class="alltitle">健身情况</div>
                    <div class="allnav" id="js111"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">健身排名</div>
                    <div class="allnav" id="js222"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">健身活动</div>
                    <div class="allnav" id="js333"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                <style type="text/css">#shushiimg{background:url("/img/xiaoren.png") 5%  center  no-repeat ;}</style>
                    <div id="shushiimg" style=" width:100%; height:100%; ">
                    <div class="alltitle"></div>   
                    <div class="allnav" id="js444"> </div>

                    <div class="boxfoot"></div>  
                </div>


                
            </div>

            </div>

            <div class="col-xs-12 col-sm-6">
                <style type="text/css">#backImgshow{background: url("/img/owell2dd.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="boxall_3d" id="backImgshow" style="width:100%; height:97.5%; background-size:100%; -moz-background-size:100%; background-repeat: no-repeat;">

                    <div class="alltitle">全景地图</div>
                    <div class="allnav3d" id="js555"></div>

                    <div class="boxfoot"></div>
                </div> 
            </div>


            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">


                <div class="boxallright">
                    <div class="alltitle">培训课程</div>

                    <style type="text/css">#backImgkechen{background: url("/img/kechen.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="caidanimg" id="backImgkechen"  style="width:100%; height:100%; background-size:100%;background-repeat: no-repeat;">

                 
                 
                   <div class="allnav" id="js666"></div>
                    </div>


                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">没想好</div>
                    <div class="allnav" id="js777"></div>
                    <div class="boxfoot"></div>
                </div>



                <div class="boxallright">
                    <div class="alltitle">新风控制</div>
                    <div class="allnav" id="js888"></div>
                       
                    <div class="shubox3"> 
                        <div class='henbox'></div>    
                         <div class='henbox'></div>
                        <div class='henbox'>新风</div>
                        <div class='henbox'>空调</div>
                   
                        <div class='henbox'></div>
                        <div class='henbox'></div>

                    </div>   
                     <div class="shubox3">   
                          <div class='henbox'></div>
                        <div class='henbox'></div>
                        <div class='henbox'>模式</div>
                        <div class='henbox'>温度</div>
                    
                        <div class='henbox'></div>
                        <div class='henbox'></div>


                    </div>  
                     <div class="shubox4">
                     <div class='henbox'></div>
                     <div class='henbox'></div>

                    <div class='henbox'>              <div class="pretty circle primary">
            <input type="radio" name="radio27" checked  onclick="jscontrol1(1)"> 
            <label><i class="default"></i> 低</label>
          </div>
          <div class="pretty circle success">
            <input type="radio" name="radio27"  onclick="jscontrol1(2)"> 
            <label><i class="default"></i> 中</label>
          </div>
          <div class="pretty circle danger"  onclick="jscontrol1(3)"> 
            <input type="radio" name="radio27"> 
            <label><i class="default"></i> 高</label>
          </div>
                    </div>
                    <div class='henbox'>          
                            <div class="pretty circle primary">
            <input type="radio" name="radio30" checked  onclick="jscontrol2(1)"> 
            <label><i class="default"></i> 低</label>
          </div>
          <div class="pretty circle success">
            <input type="radio" name="radio30" onclick="jscontrol2(2)"> 
            <label><i class="default"></i> 中</label>
          </div>
          <div class="pretty circle danger"  onclick="jscontrol2(3)"> 
            <input type="radio" name="radio30"> 
            <label><i class="default"></i> 高</label>
          </div>
</div>

                 
     


                       
              

                 
                    </div>
                    <div class="boxfoot"></div>
                </div>


                <div class="boxallright">
                    <div class="alltitle">历史记录</div>
                    <div class="allnav" id="js999"></div>
                    <div class="boxfoot"></div>
                </div>

            </div>

        
        </div>
    </div>














   
    <div class="maincontain maincontain_kangyi">

   
        
        <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:0.5px; margin-right:0.5px;">



            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">

                <div class="boxall">
                    <div class="alltitle">疫情上报</div>
                    <div class="allnav" id="ky111"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">异常监测</div>
                    <div class="allnav" id="ky222"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">紫外消毒</div>
                    <div class="allnav" id="ky333"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall">
                    <div class="alltitle">雾化消毒</div>
                    <div class="allnav" id="ky444"></div>
                    <div class="boxfoot"></div>
                </div>
            
                
                </div>

        

            <div class="col-xs-12 col-sm-6">
                <style type="text/css">#backImgky{background: url("/img/owell2dd.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="boxall_3d" id="backImgky" style="width:100%; height:97.5%; background-size:100%; -moz-background-size:100%; background-repeat: no-repeat;">

                    <div class="alltitle">全景地图</div>
                    <div class="allnav3d" id="ky555"></div>
                    <div class="boxfoot"></div>
                </div> 
            </div>


            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">


                <div class="boxallright">
                    <div class="alltitle">物资（口罩）</div>
                    <div class="allnav" id="ky666"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">物资（防护服）</div>
                    <div class="allnav" id="ky777"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">人员</div>
                    <div class="allnav" id="ky888"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">实时监控</div>
                    <div class="allnav" id="ky999">

                    <div class="sysw">
 
                       <a  class="button white bigrounded"  onclick="kybutton(1)"> 茶水间1</a> 
                   </div>

                    <div class="sysw">

                        <a  class="button white bigrounded"  onclick="kybutton(2)">茶水间2</a> 
                    </div>

                    <div class="sysw">

                    <a  class="button white bigrounded"  onclick="kybutton(3)">茶水间3</a> 
                    </div>

                    <div class="sysw">

                    <a  class="button white bigrounded" onclick="kybutton(4)">办公室</a> 
                    </div>
                        

                    </div>
         


                    <div class="boxfoot"></div>
                </div>

            </div>

        
        </div>
    </div>





    <div class="maincontain maincontain_renyuan">
        
        <div class="row" style="padding-right: 0px; padding-left:0px; margin-left:0.5px; margin-right:0.5px;">



            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">

                <div class="boxall">
                    <div class="alltitle">人员密度</div>
                    <div class="allnav" id="rr111"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">办公人数</div>
                    <div class="allnav" id="rr222"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxall">
                    <div class="alltitle">请假人数</div>
                    <div class="allnav" id="rr333"></div>
                    <div class="boxfoot"></div>
                </div>
                <div class="boxall">
                    <div class="alltitle">来访人数</div>
                    <div class="allnav" id="rr444"></div>
                    <div class="boxfoot"></div>
                </div>

            

            </div>

            <div class="col-xs-12 col-sm-6">
                <style type="text/css">#backImgshow{background: url("/img/owell2dd.png");}</style>
                {{-- 此处height可以调整3d框图的高度 --}}
                <div class="boxall_3d" id="backImgshow" style="width:100%; height:97.5%; background-size:100%; -moz-background-size:100%; background-repeat: no-repeat;">

                    <div class="alltitle">全景地图</div>
                    <div class="allnav3d" id="rr555"></div>
                    <div class="boxfoot"></div>
                </div> 
            </div>


            <div class="col-xs-12 col-sm-3" style="padding-left:0px; padding-right: 0px">


                <div class="boxallright">
                    <div class="alltitle">会议人数</div>
                    <div class="allnav" id="rr666"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">站立办公</div>
                    <div class="allnav" id="rr777"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">开窗数</div>
                    <div class="allnav" id="rr888"></div>
                    <div class="boxfoot"></div>
                </div>

                <div class="boxallright">
                    <div class="alltitle">监控</div>
                    <div class="allnav" id="rr999"></div>
                    <div class="boxfoot"></div>
                </div>

            </div>

        
        </div>
    </div>











</div>





@stop
