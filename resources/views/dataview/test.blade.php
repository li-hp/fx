
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta name="csrf-token" content="{{ csrf_token() }}">
<title>index</title>
<script type="text/javascript" src="js/jquery.js"></script>
<link rel="stylesheet" href="css/comon0.css">
<link rel="stylesheet" href="css/app.css">
</head>

<script>
  $(window).load(function(){
              $(".loading").fadeOut()
            })

  /****/
  $(document).ready(function(){
    var whei=$(window).width()
    $("html").css({fontSize:whei/20})
    $(window).resize(function(){
      var whei=$(window).width()
    $("html").css({fontSize:whei/20})
    });
  });
</script>
<script type="text/javascript" src="js/echarts.min.js"></script>
<script language="JavaScript" src="js/js.js"></script>
{{-- <script src="js/app.js"></script> --}}
{{-- 1 --}}

<style>


.boxall{ border: 1px solid rgba(25,186,139,.17); padding:0 .2rem .4rem .15rem;  background: rgba(255,255,255,.04) url(../images/line.png); background-size: 100% auto; position: relative; margin-bottom: .15rem; z-index: 10;}
.boxall:before,
.boxall:after{ position:absolute; width: .1rem; height: .1rem; content: "";  border-top: 2px solid #02a6b5; top: 0;}
.boxall:before,.boxfoot:before{border-left: 2px solid #02a6b5;left: 0;}
.boxall:after,.boxfoot:after{border-right: 2px solid #02a6b5; right: 0;}
.alltitle{ font-size:.2rem; color:#fff; text-align: center; line-height: .5rem;}

.boxfoot{ position:absolute; bottom: 0; width: 100%; left: 0;}
.boxfoot:before,
.boxfoot:after{ position:absolute; width: .1rem; height: .1rem;  content: "";border-bottom: 2px solid #02a6b5; bottom: 0;}

.bar{background:rgba(101,132,226,.1); padding: .15rem;}
.bar2{background:rgba(101, 132, 226, 0); padding: .15rem;}
.barbox li,.barbox2 li{ width:50%; text-align: center; position: relative; z-index: 100;}
.barbox3 li{ width:25%; text-align: center; position: relative; z-index: 100;}
.barbox4 li{ width:25%; text-align: center; position: relative; z-index: 100;}
.barbox:before,
.barbox:after{ position:absolute; width: .3rem; height: .1rem; content: ""; }
.barbox:before{border-left: 2px solid #02a6b5;left: 0;border-top: 2px solid #02a6b5; }
.barbox:after{border-right: 2px solid #02a6b5; right: 0; bottom: 0;border-bottom: 2px solid #02a6b5; }

.barbox li:first-child:before{ position:absolute; content: ""; height:50%; width: 1px; background: rgba(255,255,255,.2); right: 0; top: 25%;}

.barbox{  border: 1px solid rgba(25,186,139,.17); position: relative;}
.barbox li{ font-size: .7rem; color: #eeff00; padding: .05rem 0;  font-family:electronicFont; font-weight: bold;}
.barbox2 li{ font-size: .19rem; color:rgba(255,255,255,.7); padding-top: .1rem;}
.barbox3 li{ font-size: .3rem; color: rgb(22, 219, 121); padding: .05rem 0;  font-family:electronicFont; font-weight: bold;}
.barbox4 li{ font-size: .19rem; color:rgba(255,255,255,.7); padding-top: .1rem;}



</style>

<body>
      <div class="canvas" style="opacity: .2">
        <iframe frameborder="0" src="js/index.html" style="width: 100%; height: 100%"></iframe>
        </div>
      <div class="loading">
        <div class="loadbox"> <img src="picture/loading.gif"> 页面加载中... </div>
      </div>

      <div class="head">
        <h1>OWell智慧健康办公数据可视化平台</h1>
        <div class="weather">
          <img src="picture/weather.png"><span>多云转小雨</span><span id="showTime"></span>
        </div>
        <script>
          var t = null;
            t = setTimeout(time,1000);//開始运行
            function time()
            {
              clearTimeout(t);//清除定时器
              dt = new Date();
            var y=dt.getFullYear();
            var mt=dt.getMonth()+1;
            var day=dt.getDate();
              var h=dt.getHours();//获取时
              var m=dt.getMinutes();//获取分
              var s=dt.getSeconds();//获取秒
              document.getElementById("showTime").innerHTML = y+"年"+mt+"月"+day+"-"+h+"时"+m+"分"+s+"秒";
              t = setTimeout(time,1000); //设定定时器，循环运行
            }
        </script>
      </div>

      <div class="mainbox">
        <ul class="clearfix">
          <li>
            <div class="boxall" style="height: 3.2rem">
              <div class="alltitle">行业类别</div>
              <div class="allnav" id="echart1"></div>
              <div class="boxfoot"></div>
            </div>
            <div class="boxall" style="height: 3.2rem">
              <div class="alltitle">地市业务</div>
              <div class="allnav" id="echart2"></div>
              <div class="boxfoot"></div>
            </div>
            <div class="boxall" style="height: 3.2rem">
              <div style="height:100%; width: 100%;">
              <div class="sy" id="fb1"></div>
              <div class="sy" id="fb2"></div>
              <div class="sy" id="fb3"></div>
              <div class="boxfoot">
            </div>
          </li>
          <li>
            <div class="bar">
              <div class="barbox">
                <ul class="clearfix">
                <li class="pulll_left counter">1</li>
                <li class="pulll_left counter">2</li>
                </ul>
              </div>
              <div class="barbox2">
                <ul class="clearfix">
                  <li class="pulll_left">新风功率 </li>
                  <li class="pulll_left">排风功率 </li>
                </ul>
              </div>
            </div>
            <div class="map">
              <div class="map1"><img src="picture/lbx.png"></div>
              <div class="map2"><img src="picture/jt.png"></div>
              <div class="map3"><img src="picture/map.png"></div>
              <div class="map4" id="map_1"></div>
            </div>
          </li>
          <li>
            <div class="boxall" style="height:3.4rem">
              <div class="alltitle">温湿度变化趋势</div>
              <div class="allnav" id="echart4"></div>
              <div class="boxfoot"></div>
            </div>
            <div class="boxall" style="height: 3.2rem">
              <div class="alltitle">核心健康数据</div>

                <div class="bar2">
                  <div class="barbox3">
                    <ul class="clearfix">
                        <li class="pulll_left counter">3</li>
                        <li class="pulll_left counter">4</li>
                        <li class="pulll_left counter">5</li>
                        <li class="pulll_left counter">6</li>
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
                </div>

                <div class="bar2">
                    <div class="barbox3">
                      <ul class="clearfix">
                          <li class="pulll_left counter">7</li>
                          <li class="pulll_left counter">8
                          </li>
                          <li class="pulll_left counter" id="tmp"></li>
                          <li class="pulll_left counter" id="hum"></li>
                      </ul>
                    </div>
                    <div class="barbox4">
                      <ul class="clearfix">
                        <li class="pulll_left">甲醛浓度</li>
                        <li class="pulll_left">空气可挥发物</li>
                        <li class="pulll_left">温度ajax</li>
                        <li class="pulll_left">湿度ajax</li>
                      </ul>
                    </div>
                </div>


              <div class="boxfoot"></div>
            </div>
            <div class="boxall" style="height: 3rem">
              <div class="alltitle">模块标题样式6</div>
              <div class="allnav" id="echart6"></div>
              <div class="boxfoot"></div>
            </div>
          </li>
        </ul>
      </div>

      <div class="back"></div>

      <script type="text/javascript" src="js/china.js"></script>
  <script type="text/javascript" src="js/area_echarts.js"></script>
</body>

</html>
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
