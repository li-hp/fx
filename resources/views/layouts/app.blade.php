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
  
  <link href="css/index_style.css" rel="stylesheet" type="text/css">
  @yield('styles')

</head>

<body>
<div class="header" id="demo">
  
  <div class="nav">

 <div class="container-fulid">
        @include('layouts._header')
       
       
    
          @yield('content')
    
        </div>
    
        @include('layouts._footer')
        </div>
    


  
    <canvas id="canvas"></canvas>
  

  <!-- Scripts -->
  <script src="{{ mix('js/app.js') }}"></script>
  <script type="text/javascript" src="js/bg.js"></script> 
  <script type="text/javascript" src="js/china.js"></script> 
  <script type="text/javascript" src="js/area_echarts.js"></script> 
  {{-- <script type="text/javascript" src="js/js1.js"></script>  --}}
  @yield('scripts')
  </div>
</body>

</html>