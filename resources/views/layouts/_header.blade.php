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
          <li class="nav-item"><a style="color:#fff" class="nav-link" href="{{ url('/') }}">&nbsp;健康办公可视化平台</a></li>
      </ul>

      <!-- Right Side Of Navbar -->
      <ul class="navbar-nav navbar-right ">
          <li class="nav-item1 "><a style="color:#fff" class="nav-link" href="/kongqi" target="_top"><i class="fa fa-thermometer-half"></i>&nbsp;<span>空气</span>&nbsp;&nbsp;&nbsp;</a></li>
          <li class="nav-item2 "><a style="color:#fff" class="nav-link" href="/shuizhi"><i class="fa fa-tint" aria-hidden="true"></i>&nbsp;水质&nbsp;&nbsp;&nbsp;</a></li>
          <li class="nav-item3 "><a style="color:#fff" class="nav-link" href="/shushi"><i class="fa fa-child"></i>&nbsp;舒适&nbsp;&nbsp;&nbsp;</a></li>
          <li class="nav-item4 "><a style="color:#fff" class="nav-link" href="/guangqiang"><i class="fa fa-sun" aria-hidden="true"></i>&nbsp;光强&nbsp;&nbsp;&nbsp;</a></li>
          <li class="nav-item5 "><a style="color:#fff" class="nav-link" href="/yingyang"><i class="fa fa-futbol"></i>&nbsp;营养&nbsp;&nbsp;&nbsp;</a></li>
          <li class="nav-item6 "><a style="color:#fff" class="nav-link" href="/jianshen"><i class="fa fa-fire" aria-hidden="true"></i>&nbsp;健身&nbsp;&nbsp;&nbsp;</a></li>
          <li class="nav-item7 "><a style="color:#fff" class="nav-link" href="/huiyi"><i class="fa fa-camera" aria-hidden="true"></i>&nbsp;会议室管理&nbsp;&nbsp;&nbsp;</a></li>
          <li class="nav-item8 "><a style="color:#fff" class="nav-link" href="/renyuan"><i class="fa fa-camera" aria-hidden="true"></i>&nbsp;人员管理&nbsp;&nbsp;&nbsp;</a></li>
      </ul>

      <div id="banner_ctr">
            <div id="drag_ctr"></div>
            <ul>     
              <!-- <li class="first-item"></li> -->
                <li>1</li>      
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li> 
                <li>7</li> 
                <li>8</li> 
                <!-- <li class="last-item"></li> -->
            </ul>
            <div id="drag_arrow"></div>
        </div>

    </div>

</nav>
