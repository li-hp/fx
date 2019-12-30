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

  <!-- Styles -->
  <link href="{{ mix('css/app.css') }}" rel="stylesheet">

 <!--<link href="css/index_style.css" rel="stylesheet" type="text/css">-->
  @yield('styles')

</head>

<body>


 <div class="container-fulid">
  <canvas id="canvas"></canvas>
 

    @include('layouts._header')

    @yield('content')

    @include('layouts._footer')
  </div>

  <!-- Scripts -->
  <script src="{{ mix('js/app.js') }}"></script>
<<<<<<< HEAD
  <script type="text/javascript" src="js/bg.js"></script>  
  <script type="text/javascript" src="js/china.js"></script> 
  <script type="text/javascript" src="js/area_echarts.js"></script> 
  
  <script type="text/javascript" src="js/js1.js"></script> 
  <script type="text/javascript" src="js/js.js"></script>
  <script type="text/javascript" src="js/superAPI.min.js"></script>
  <script type="text/javascript" src="js/51vr.js"></script>
=======
  <script type="text/javascript" src="js/bg.js"></script>
  <script type="text/javascript" src="js/china.js"></script>
  <script type="text/javascript" src="js/area_echarts.js"></script>
   <script type="text/javascript" src="js/kongqi.js"></script>
  <script type="text/javascript" src="js/guangqiang.js"></script>
  <script type="text/javascript" src="js/js1.js"></script>
  <script type="text/javascript" src="js/js.js"></script>
>>>>>>> 4dd7e439d0e968c4c37eabd2f98197f14ce95836
  @yield('scripts')

</body>

</html>
