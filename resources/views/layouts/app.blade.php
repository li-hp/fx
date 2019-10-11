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
    <link rel="stylesheet" href="css/comon0.css">
</head>

 {{-- 有空再来整这个js --}}
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


<body>
    <div class="canvas" style="opacity: .2">
        <iframe frameborder="0" src="js/index.html" style="width: 100%; height: 100%"></iframe>
    </div>
    <div class="loading">
        <div class="loadbox"> <img src="picture/loading.gif"> 页面加载中... </div>
    </div>

    <div class="container-fulid">
        @include('layouts._header')
    
        @yield('content')

        {{-- @include('layouts._footer') --}}
    </div>

<!-- Scripts -->
<script src="{{ mix('js/app.js') }}"></script>
<script type="text/javascript" src="js/china.js"></script> 
<script type="text/javascript" src="js/area_echarts.js"></script> 
{{-- <script type="text/javascript" src="js/js1.js"></script>  --}}
{{-- <script type="text/javascript" src="js/led_controller.js"></script>  --}}
</body>

</html>