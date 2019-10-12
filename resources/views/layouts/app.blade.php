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
    <canvas id="canvas" style="top: 0;
  left: 0;
  width:100%;
  height:100%;
  min-width: 1000px;
  position:fixed;z-index:-10;
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;"></canvas>
        @include('layouts._header')
       
       
    
          @yield('content')
      
        </div>
   
        @include('layouts._footer')
       
    


  
  
  

  <!-- Scripts -->
  <script src="{{ mix('js/app.js') }}"></script>
  <script type="text/javascript" src="js/bg.js"></script>  
  <script type="text/javascript" src="js/china.js"></script> 
  <script type="text/javascript" src="js/area_echarts.js"></script> 
  {{-- <script type="text/javascript" src="js/js1.js"></script>  --}}
  @yield('scripts')
  
</body>

</html>