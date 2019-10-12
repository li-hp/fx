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

  @yield('styles')

</head>

<body>
        <div class="container-fulid">

            @include('layouts._header')      
            @yield('content')

        </div>
    
        @include('layouts._footer')


  <!-- Scripts -->
  <script src="{{ mix('js/app.js') }}"></script>
  <script type="text/javascript" src="js/china.js"></script> 
  <script type="text/javascript" src="js/area_echarts.js"></script> 
  {{-- <script type="text/javascript" src="js/js1.js"></script>  --}}
  @yield('scripts')

</body>

</html>