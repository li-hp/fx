<!doctype html>
<html style="height:calc(100vh)">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title') Owell智慧健康可视化 </title>

    <!-- Js -->
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/echarts.min.js"></script>

    <!-- Styles -->
    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
    @yield('styles')
</head>



<body>
  
 <div class="container-fulid">
      <iframe src="https://datav.aliyuncs.com/share/53acbc42122368a68f2de87a816f38ae"
      style="  opacity: 1;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                min-width: 500px;
                position: fixed;
                z-index: -10;
                zoom: 1;
                background-repeat: no-repeat;
                background-size: cover;
                -webkit-background-size: cover;
                -o-background-size: cover;
                background-position: center 0;">
      </iframe>
  </div>

  <!-- Scripts -->
  <script src="{{ mix('js/app.js') }}"></script>
  @yield('scripts')
  
</body>
 
</html>>