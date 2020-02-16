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
  <link rel="stylesheet" type="text/css" href="css/style.css">
 <!--<link href="css/index_style.css" rel="stylesheet" type="text/css">-->
  @yield('styles')

</head>

<body >
<!--container-fulid是之前做的星空背景，覆盖整个网页的背景图，未启用>-->
<!--miancontain是想要填充子页面的大的div   将各个子页面用load方法填充进maincontian里>-->



 <div class="container-fulid">
    @include('layouts._header')


    @yield('content')

    @include('layouts._footer')
</div>




  <!-- Scripts -->
  <script src="{{ mix('js/app.js') }}"></script>
  <script type="text/javascript" src="js/js.js"></script>
  <script type="text/javascript" src="js/show.js"></script>
  <script type="text/javascript" src="js/guangqiang.js"></script>
  <script type="text/javascript" src="js/kongqi.js"></script>
  <script type="text/javascript" src="js/51vr.js"></script>
  <script type="text/javascript" src="js/let.js"></script>




  <script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>
  <script type="text/javascript" src="js/jquery-nav.js"></script>
  <script type="text/javascript">
    $('#f-nav').tooltip({
          default: 2,       // 默认为空  --  选中默认值
          width: '200',     // 限制宽度
          height: '100',
          textList: ['首页','分页1','分页2','分页3'],   // 每个导航的内容
          type: 'slideMove',  // 必填, 选择内容
          success: function(ret){

          }   //初始化回调
        });
        $('#f-nav2').tooltip({
          default: 3,    
          type: 'fontUp',
          width: '150',
        });
        $('#f-nav3').tooltip({
          type: 'downUp'
        });
        $('#f-nav4').tooltip({
          type: 'edgeLeft'
        });
        $('#f-nav5').tooltip({
          type: 'edgeRight'
        });
          $('#f-nav6').tooltip({
          type: 'scaleChange'
        });
      </script>



  @yield('scripts')

</body>

</html>
