<nav class="navbar navbar-expand-lg  navbar-static-top">

    <!-- Branding Image -->
    <a class="navbar-brand " href="{{ url('/') }}" style="color:#fff">
      {{-- <img alt="Brand" src="..."> --}}
      &nbsp;&nbsp;OWELL
    </a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <!-- Left Side Of Navbar -->

      <ul class="navbar-nav navbar-left mr-auto">
          <li class="nav-item"><div style="color:#fff" class="nav-link" >&nbsp;健康办公可视化平台</div></li>
      </ul>

      <!-- Right Side Of Navbar -->
      <ul class="navbar-nav navbar-right f-nav" id="">
          <li class="nav-item "><div class="nav-link1" ><i class="fa fa-thermometer-half"></i>&nbsp;<span>空气</span>&nbsp;&nbsp;&nbsp;</div></li>
          <li class="nav-item "><div class="nav-link2" ><i class="fa fa-tint" ></i>&nbsp;光强&nbsp;&nbsp;&nbsp;</div></li>
          <li class="nav-item "><div class="nav-link3" ><i class="fa fa-child"></i>&nbsp;舒适&nbsp;&nbsp;&nbsp;</div></li>
          <li class="nav-item "><div class="nav-link4" ><i class="fa fa-sun" ></i>&nbsp;水质&nbsp;&nbsp;&nbsp;</div></li>
          <li class="nav-item "><div class="nav-link5" ><i class="fa fa-futbol"></i>&nbsp;营养&nbsp;&nbsp;&nbsp;</div></li>
          <li class="nav-item "><div class="nav-link6" ><i class="fa fa-fire" ></i>&nbsp;健身&nbsp;&nbsp;&nbsp;</div></li>
          <li class="nav-item "><div class="nav-link7" ><i class="fa fa-camera" ></i>&nbsp;综合&nbsp;&nbsp;&nbsp;</div></li>
          <div class='sideline'></div>
      </ul>

      <script type="text/javascript">
          $('#f-nav').tooltip({
            default: 2,       // 默认为空  --  选中默认值
            width: '200',     // 限制宽度
            height: '100',
            // textList: ['首页','分页1','分页2','分页3'],   // 每个导航的内容
            type: 'slideMove',  // 必填, 选择内容
            success: function(ret){

            }   //初始化回调
          });
          $('#f-nav2').tooltip({
            default: 3,    
            type: 'fontUp',
            width: '150',
          });
          $('#f-nav3').tooltip({
            default: 2,       
            width: '200',     
            height: '100',
            type: 'downUp'
          });
          $('#f-nav4').tooltip({
            type: 'edgeLeft'
          });
          $('#f-nav5').tooltip({
            type: 'edgeRight'
          });
            $('#f-nav6').tooltip({
            type: 'scaleChange'
          });
      </script>
        <!-- <div class="box">
	        <ul class="f-nav" id='f-nav'>
            <li>首页</li>
            <li>分页一</li>
            <li>分页二</li>
            <li>分页三</li>
            <li>分页四</li>
            <div class='sideline'></div>
          </ul>
        </div> -->
       
    </div>


</nav>
<script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>
<script type="text/javascript" src="js/jquery-nav.js"></script>



