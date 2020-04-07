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
            class="light_IC4_2 btn-success center-block btn-sm ">
            <p style="font-size:5rem;">区域灯光</p>
        </button>
    </div>
    <div class="sysw">
        <button
            class="light_spotlight button-3d button-primary center-block btn-sm ">
            <p style="font-size:5rem;">射灯灯光</p>
        </button>
    </div>
    <div class="sysw">
        <button
            class="light_ultra_violet btn-success center-block btn-sm ">
            <p style="font-size:5rem;">紫外线灯</p>
        </button>
    </div>
    <div class="sysw">
        <button
            class="light_booth btn-primary center-block btn-sm ">
            <p style="font-size:5rem;">展台灯光</p>
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


</body>
<script>
//js.js  用于场景切换，点击事件，跳转事件等。

let light_test0 = document.querySelector('.light_IC4_2');
light_test0.addEventListener('click', function() {
    $.ajax({
            url:'/light_controller/0',
            type:'get',
            success: function (data) {
                console.log(data);
            },
            error : function() {
                console.log("异常！");
            }
        }
    )
})

//用于biaogetest测试
let light_test1 = document.querySelector('.light_spotlight');
light_test1.addEventListener('click', function() {
    $.ajax({
            url:'/light_controller/1',
            type:'get',
            success: function (data) {
                console.log(data);
            },
            error : function() {
                console.log("异常！");
            }
        }
    )
})

let light_test2 = document.querySelector('.light_ultra_violet');
light_test2.addEventListener('click', function() {
    $.ajax({
            url:'/light_controller/2',
            type:'get',
            success: function (data) {
                console.log(data);
            },
            error : function() {
                console.log("异常！");
            }
        }
    )
})

let light_test3 = document.querySelector('.light_booth');
light_test3.addEventListener('click', function() {
    $.ajax({
            url:'/light_controller/3',
            type:'get',
            success: function (data) {
                console.log(data);
            },
            error : function() {
                console.log("异常！");
            }
        }
    )
})



let qixiaoshi = document.querySelector('.qixiaoshi');
    qixiaoshi.addEventListener('click', function() {
        $.ajax({
            url:'/lanju_inside_h',
            type:'get',
            success: function (data) {
                console.log("-------------");
                //是否可以使用php写出来
                var len = data.length / 7;
                var dazu =[];
                var a =[];
                //分组
                for (let i=0; i<=6; i++ ) {
                    var xiaozu =[];
                    for (let j=0; j<len; j++) {
                        xiaozu.push(data[j]);
                        delOne(data[j],data);
                        data.push(data[j]);

                    }
                    dazu.push(xiaozu);

                }
                console.log("-------------");
                //计算平均值,生成新玩意
                var strdata = [
                    "DeviceID", "TEMP", "PM25",
                    "CO2", "NOISE", "HUMI",
                    "VOC", "CH2O", "LUX",
                ];

                var dazu_avg = [];
                let avg;

                for (let o = 0; o < 7; o++) {
                    //7个大组
                    var xiaozu_avg = [];
                    for (let j = 1; j < strdata.length; j++) {
                        // 将每个指标遍历进行求平均值
                        // var zhibiao_avg = [];
                        let sum1 = 0;
                        for (let i = 0; i < dazu[o].length; i++) {
                            //某个指标key下，每个对象的values求平均值
                            sum1 += dazu[o][i][strdata[j]];
                        }
                        avg = sum1 / dazu[o].length;

                        xiaozu_avg.push(avg);
                    }
                    console.log(xiaozu_avg);
                    dazu_avg.push(xiaozu_avg);
                }






            },
            error : function() {
                alert("异常！");
            }
        })
    })

    let qitian = document.querySelector('.qitian');
    qitian.addEventListener('click', function() {
        $.ajax({
            url:'/lanju_inside_d',
            type:'get',
            success: function (data) {
                console.log("-------------");
                //是否可以使用php写出来
                var len = data.length / 7;
                var dazu =[];
                var a =[];
                //分组
                for (let i=0; i<=6; i++ ) {
                    var xiaozu =[];
                    for (let j=0; j<len; j++) {
                        xiaozu.push(data[j]);
                        delOne(data[j],data);
                        data.push(data[j]);

                    }
                    dazu.push(xiaozu);

                }
                console.log("-------------");
                //计算平均值,生成新玩意
                var strdata = [
                    "DeviceID", "TEMP", "PM25",
                    "CO2", "NOISE", "HUMI",
                    "VOC", "CH2O", "LUX",
                ];

                var dazu_avg = [];
                let avg;

                for (let o = 0; o < 7; o++) {
                    //7个大组
                    var xiaozu_avg = [];
                    for (let j = 1; j < strdata.length; j++) {
                        // 将每个指标遍历进行求平均值
                        // var zhibiao_avg = [];
                        let sum1 = 0;
                        for (let i = 0; i < dazu[o].length; i++) {
                            //某个指标key下，每个对象的values求平均值
                            sum1 += dazu[o][i][strdata[j]];
                        }
                        avg = sum1 / dazu[o].length;
                        xiaozu_avg.push(avg);
                    }
                    dazu_avg.push(xiaozu_avg);
                }
                console.log(dazu_avg);

            },
            error : function() {
                alert("异常！");
            }
        })
    })

    let shishi = document.querySelector('.shishi');
    shishi.addEventListener('click', function() {

        $.ajax({
            url:'/lanju_inside_n',
            type:'get',
            success: function (data) {
                console.log(data);
                console.log("-------------");
            },
            error : function() {
                alert("异常！");
            }
        })

    })

    let axis = document.querySelector('.axis');
    axis.addEventListener('click', function() {

        $.ajax({
            url:'/axis',
            type:'get',
            success: function (data) {
                console.log(data);
                console.log("-------------");
            },
            error : function() {
                alert("异常！");
            }
        })

    })

    function delOne(str, data){

var index = data.indexOf(str);
data.splice(index,1);
return data;
}
</script>

</html>
