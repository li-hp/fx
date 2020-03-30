<!doctype html>

<html lang="{{ app()->getLocale() }}">

<head>

    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    {{--        <meta name="csrf-token" content="{{ csrf_token() }}">--}}

    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Lar1avel1</title>

    <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>

<body>
<div class="boxall">
    <div class="alltitle">交互指令</div>
    <div class="sysw">
        <button
            class="changjingqiehuan btn-success center-block btn-sm ">
            <p style="font-size:5rem;">场景</p>
        </button>
    </div>
    <div class="sysw">
        <button
            class="light button-3d button-primary center-block btn-sm ">
            <p style="font-size:5rem;">灯光</p>
        </button>
    </div>
    <div class="sysw">
        <button
            class="heatmap btn-success center-block btn-sm ">
            <p style="font-size:5rem;">热力</p>
        </button>
    </div>
    <div class="sysw">
        <button
            class="curtains btn-primary center-block btn-sm ">
            <p style="font-size:5rem;">窗帘</p>
        </button>
    </div>
    <div class="sysw">
        <button
            class="axis btn-primary center-block btn-sm ">
            <p style="font-size:5rem;">坐标</p>
        </button>
    </div>
    <div class="sysw">
        <button
            class="qixiaoshi btn-primary center-block btn-sm ">
            <p style="font-size:5rem;">七小时</p>
        </button>
    </div>
    <div class="sysw">
        <button
            class="qitian btn-primary center-block btn-sm ">
            <p style="font-size:5rem;">七天</p>
        </button>
    </div>
    <div class="sysw">
        <button
            class="shishi btn-primary center-block btn-sm ">
            <p style="font-size:5rem;">实时</p>
        </button>
    </div>
    <div class="boxfoot"></div>
</div>

<script src="{{ mix('js/app.js') }}"></script>
<script src="js/js.js"></script>

</body>

</html>
