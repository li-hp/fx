<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <!-- CSRF Token -->
  <meta name="csrf-token" content="{{ csrf_token() }}">

  <!-- Js -->
  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="js/echarts.min.js"></script>
  {{-- <script type="text/javascript" src=" https://api.51hitech.com/jsapi/vender/superAPI-2.6.0-owell.min.js"></script> --}}
  <script type="text/javascript" src="js/superAPI-2.6.0-owell.min.js"></script>
  
  <!-- Styles -->
  <link href="{{ mix('css/app.css') }}" rel="stylesheet">

 <!--<link href="css/index_style.css" rel="stylesheet" type="text/css">-->

  <!-- 20200204新增 -->
  <link href="css/fashionfoucs.css" rel="stylesheet">
  <script src="js/jquery-1.4.2.min.js" type="text/javascript"></script>
  <script src="js/jquery-1.9.1.min.js" type="text/javascript"></script>
  <script src="js/jquery.plugin.min.js" type="text/javascript"></script>



  @yield('styles')

</head>

<body>
  <div class="boxno"> 
    <div class="allnav" id="player" style="display:block;"></div>> 
  </div>

<div class="container-fulid">

    
    @include('layouts._header')

    @yield('content')

    @include('layouts._footer')
</div>




  <!-- Scripts -->
  <script src="{{ mix('js/app.js') }}"></script>



  <script type="text/javascript" src="js/kongqi.js"></script> 
  <script type="text/javascript" src="js/guangqiang.js"></script>
  <script type="text/javascript" src="js/js.js"></script>
  <script type="text/javascript" src="js/51vr.js"></script>
  <script type="text/javascript" src="js/let.js"></script>

  <script type="text/javascript" src="js/bg.js"></script>

  <script type="text/javascript" src="js/fashionfoucs.js"></script>
  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js"></script>
  <script type="text/javascript" src="https://echarts.baidu.com/resource/echarts-liquidfill-latest/dist/echarts-liquidfill.min.js"></script>


  @yield('scripts')

</body>

</html>
