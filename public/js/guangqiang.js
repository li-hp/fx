




$(function () {

    // airdata();setInterval(function(){airdata();}, 60000);

    gecharts_1();
    gecharts_2();setInterval(function(){gecharts_2();}, 15000);
    gecharts_3();setInterval(function(){gecharts_3();}, 15000);
    //gecharts_4();setInterval(function(){gecharts_4();}, 15000);
    //gecharts_5();setInterval(function(){gecharts_5();}, 15000);
    //gecharts_6();setInterval(function(){gecharts_6();}, 15000);




    function gecharts_1() {

        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('gechart1'));
        //数据
var XName= ["0:00","3：00","6:00","9:00","12：00","15:00","18:00","21:00","0:00"]
var data1 = [

            [290,330,350,360,355,335,315,300,290],
        ]
var Line = ["光照强度节律图"];
var img = [

            'image://data:image/png;base64,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',
        ];
var color =['#dcf776'];

//数据处理
        var datas = [];
        Line.map((item,index)=>{
            datas.push(
                {
                    symbolSize: 150,
                    symbol: img[index],
                    name: item,
                    type: "line",
                    yAxisIndex: 1,
                    smooth:true,
                    data: data1[index] ,
                    itemStyle: {
                        normal: {
                            borderWidth: 5,
                            color: color[index],

                        }
                    }
                }
            )
        })

option = {
    //backgroundColor: '#0e2147',
     grid: {
                left: '5%',
                top: '5%',
                bottom: '5%',
                right: '5%',
            },
             legend: {
                type: "scroll",
                data:Line,
                 itemWidth:18,
                 itemHeight:12,
                 textStyle: {
                    color:"#00ffff",
                     fontSize:14
                 },
             },
            yAxis: [
                {
                    type: 'value',
                    position: 'right',
                    splitLine: {
                        show: true
                    }
                    ,
                    axisLine: {
                        show: true
                    },
                    axisTick: {
                        show: true
                    },
                    axisLabel: {
                        show: true
                    }


                },

                {
                    type: 'value',
                    position: 'left',
                    nameTextStyle: {
                        color: '#00FFFF'
                    },
                    splitLine: {
                        lineStyle: {
                            type: 'dashed',
                            color: 'rgba(135,140,147,0.8)'
                        }
                    },
                    axisLine: {
                        show: true
                    },
                    axisTick: {
                        show: true
                    },
                    axisLabel: {
                        formatter: '{value}',
                        color: '#fff',
                        fontSize: 14
                    },
                    data: ["280","300","320","340","360","380"],
                },

            ],
            xAxis: [
                {
                    type: 'category',
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#6A989E',
                        }
                    },
                    axisLabel: {
                        inside: false,
                        textStyle: {
                            color: '#fff',// x轴颜色
                            fontWeight: 'normal',
                            fontSize: '14',
                            lineHeight: 22
                        }

                    },
                    data: XName,
                },

            ],
            series: datas,

};
//当点击legend选项时折线上的小图片会消失，为避免这种情况，可以采取以下初始化方法 使用svg
//var myCharts = echarts.init(document.getElementById('AnalysisChartLine'), null, {renderer: 'svg'});
//myCharts.clear();
//myCharts.setOption(option)

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function gecharts_2() {
        // 基于准备好的dom，初始化echarts实例
       /*
        var myChart = echarts.init(document.getElementById('gechart2'));
        var randome81 = [randomNum(100,700),randomNum(100,700),randomNum(100,700),randomNum(100,700),randomNum(100,700)];

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        */

      data1=500;
      data2=1000;     ///////////////////////////室内光强和室外光强，从数据库调取
       document.getElementById("shineiguangqiang").innerHTML = data1+"lux";
       document.getElementById("shiwaiguangqiang").innerHTML = data2+"lux";



    }


    function gecharts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('gechart3'));
        var fuhao = "%";
        var randome81 = [randomNum(1,100)];
        option = {
            grid: {
                left: '5%',
                top:'1px',
                right: '15%',
                bottom: '2%',
            containLabel: true
            },

            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },

            series: [
                {
                    name:'湿度',
                    type:'gauge',
                    min:0,
                    max:99,
                    splitNumber:5,
                    center : ['50%', '55%'],
                    radius: '90%',
                    axisLine: {            // 坐标轴线
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: [[0.3, '#ff4500'],[0.75, 'lime'],[1,'#436EEE']],
                            width: 5,
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 1
                        }
                    },
                    axisLabel: {            // 坐标轴小标记
                        textStyle: {       // 属性lineStyle控制线条样式
                            fontWeight: 'bolder',
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 1
                        }
                    },
                    axisTick: {            // 坐标轴小标记
                        length :15,        // 属性length控制线长
                        lineStyle: {       // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 1
                        }
                    },
                    splitLine: {           // 分隔线
                        length :25,         // 属性length控制线长
                        lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                            width:3,
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    pointer: {           // 分隔线
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 5
                    },
                    title : {
                        textStyle: {
                            // 表盘中央符号的设置，其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 20,
                            fontStyle: 'italic',
                            color: '#fff',
                            shadowColor : '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    detail : {
                        show:true,
                        backgroundColor: 'rgba(255,255,255,.04)',
                        borderWidth: 1,
                        offsetCenter: [0, '50%'],       // x, y，单位px
                        textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                            fontWeight: 'bolder',
                            fontSize: 15,
                            color: '#FCFCFC'
                        }
                    },
                    data: randome81,
                }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function gecharts_4() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('gechart4'));
    var randome81 = [randomNum(10,40)];
        option = {
        grid: {
            left: '5%',
            top:'1px',
            right: '5%',
            bottom: '2%',
        containLabel: true
        },

        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },

        series: [
            {
                name:'温度仪表盘',
                type:'gauge',
                min:0,
                max:60,
                splitNumber:4,
                center : ['50%', '55%'],
                radius: '90%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.4, '#436EEE'],[0.52, 'lime'],[1, '#ff4500']],
                        width: 5,
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 1
                    }
                },
                axisLabel: {            // 坐标轴小标记
                    textStyle: {       // 属性lineStyle控制线条样式
                        fontWeight: 'bolder',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 1
                    }
                },
                axisTick: {            // 坐标轴小标记
                    length :15,        // 属性length控制线长
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: 'auto',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 1
                    }
                },
                splitLine: {           // 分隔线
                    length :25,         // 属性length控制线长
                    lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
                        width:3,
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                pointer: {           // 分隔线
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 5
                },
                title : {
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail : {
                    show:true,
                    backgroundColor: 'rgba(255,255,255,.04)',
                    borderWidth: 1,
                    offsetCenter: [0, '50%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 15,
                        color: '#FCFCFC',

                    }
                },
                // data:[{value: resultdata, name: '℃'}]
                data:randome81,
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function gecharts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('gechart5'));
        var randome81 = [randomNum(0,90),randomNum(0,70),randomNum(1,70),randomNum(1,70),randomNum(10,70)];
        option = {

            grid: {
                left: '0%',
                top: '13%',
                right: '10%',
                bottom: '7%',
                containLabel: true
            },

            tooltip: {
                trigger: 'axis'
            },

            xAxis: [{
                name:"分钟前",
                nameLocation:'center',
                nameGap:23,
                nameTextStyle:{
                    color:  "rgba(255,255,255,.6)",
                    fontSize: 12,
                },
                type: 'category',
                data: ['5', '4', '3', '2', '1'],
                axisLine: {
                    show: true,
                 lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel:  {
                        interval: 0,
                       // rotate:50,
                        show: true,
                        splitNumber: 15,
                        textStyle: {
                             color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                        },
                    },
            }],

            yAxis: {
                name:"μg/m3",
                nameTextStyle:{
                    color:  "rgba(255,255,255,.6)",
                    fontSize: 12,
                },
                min:0,
                max:90,
                axisLabel: {
                    //formatter: '{value} %'
                     show:true,
                      textStyle: {
                            color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                         },
                 },
                 axisTick: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                splitNumber:0,
                splitLine: {
                    show:false,
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)',
                    },
                },
            },

            visualMap: {
                show: false,
                pieces: [{
                    gt: 0,
                    lte: 35,
                    color: '#096'
                }, {
                    gt: 35,
                    lte: 75,
                    color: '#ffde33'
                }, {
                    gt: 75,
                    lte: 115,
                    color: '#ff9933'
                }, {
                    gt: 115,
                    lte: 150,
                    color: '#cc0033'
                }, {
                    gt: 150,
                    lte: 250,
                    color: '#7e0023'
                }, {
                    gt: 250,
                    color: '#660099'
                }],
                outOfRange: {
                    color: '#999'
                }
            },

            series: [{
                name: 'PM25',
                type: 'line',
                data: randome81,

                markLine: {
                    silent: false,
                    symbol: 'none',
                    label: {
                        show:true,
                        position:'end', // 'start\middle\end'
                        formatter: '{b}'
                    },
                    data: [{
                        name: '重度污染',
                        yAxis: 250
                    }, {
                        name: '中度污染',
                        yAxis: 150

                    }, {
                        name: '轻度污染',
                        yAxis: 115
                    }, {
                        name: '良',
                        yAxis: 75
                    }, {
                        name: '优',
                        yAxis: 35
                    }],
                    lineStyle:{
                        color:'#8E8E8E',
                    },
                },
            }],
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function gecharts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('gechart6'));
        var randome81 = [randomNum(100,700),randomNum(100,700),randomNum(100,700),randomNum(100,700),randomNum(100,700)];
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },

            legend: {
            top:'0%',
                data:['VOC'],
                        textStyle: {
                color: 'rgba(255,255,255,.5)',
                    fontSize:'12',
                }
            },

            grid: {
                left: '0%',
                top: '13%',
                right: '10%',
                bottom: '7%',
                containLabel: true
            },

            xAxis: [{
                name:"分钟前",
                nameLocation:'center',
                nameGap:23,
                nameTextStyle:{
                    color:  "rgba(255,255,255,.6)",
                    fontSize: 12,
                },
                type: 'category',
                data: ['5', '4', '3', '2', '1'],
                axisLine: {
                    show: true,
                 lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 1,
                        type: "solid"
                    },
                },
                axisTick: {
                    show: false,
                },
                axisLabel:  {
                        interval: 0,
                       // rotate:50,
                        show: true,
                        textStyle: {
                             color: "rgba(255,255,255,.6)",
                            fontSize: '12',
                        },
                },
            }],

            yAxis: [{
                name:"浓度:PPB",
                nameTextStyle:{
                    color:  "rgba(255,255,255,.6)",
                    fontSize: 12,
                },
                type: 'value',
                axisTick: {show: false},
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
               axisLabel:  {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize:12,
                    },
                    formatter: '{value}',
                },
                splitArea:{
                    show:false,
                    interval:(15-25),
                },
                splitNumber: 6,
                splitLine: {
                    interval:2,
                    lineStyle: {
                         color: 'rgba(255,255,255,.1)',
                    }
                },
            }],

            series: [{
                name: '甲醛浓度',
                type: 'bar',
                data: randome81,
                barWidth:'50%', //柱子宽度
                itemStyle: {
                    normal: {
                        color:'#F3944C',
                        opacity: 1,
                        barBorderRadius: 5,
                    }
                },
                markLine:{
                    silent: false,
                    symbol: 'none',
                    label: {
                        show:true,
                        position:'end', // 'start\middle\end'
                        formatter: '{b}'
                    },
                    data: [{
                        name: '中',
                        yAxis: 300
                    }, {
                        name: '优',
                        yAxis: 80
                    }],
                    lineStyle:{
                        color:'#8E8E8E',
                    },
                },
            }]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }





    //生成从minNum到maxNum的随机数
    function randomNum(minNum,maxNum){
        switch(arguments.length){
            case 1:
                return parseInt(Math.random()*minNum+1,10);
            break;
            case 2:
                return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
            break;
                default:
                    return 0;
                break;
        }
    }


    })































