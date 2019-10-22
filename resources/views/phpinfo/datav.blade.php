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
</head>

<canvas>
    <iframe frameborder="0"
    {{-- src="https://datav.aliyuncs.com/share/53acbc42122368a68f2de87a816f38ae"  --}}
    src="https://www.baidu.com" 
    style="width: 100%; height: 100%">
    </iframe>
</canvas>


<body>
    <canvas>
        <iframe frameborder="0"
                {{-- src="https://datav.aliyuncs.com/share/53acbc42122368a68f2de87a816f38ae"  --}}
                src="https://www.baidu.com" 
                style="width: 100%; height: 100%">
        </iframe>
    </canvas>


    <div class="container-fulid">

    </div>

<!-- Scripts -->
<script src="{{ mix('js/app.js') }}"></script>
<script type="text/javascript" src="js/led_controller.js"></script> 

</body>

</html>