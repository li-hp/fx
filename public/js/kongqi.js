




$(function () {

// airdata();setInterval(function(){airdata();}, 60000);

kecharts_1();setInterval(function(){kecharts_1();}, 15000);
kecharts_2();setInterval(function(){kecharts_2();}, 15000);
kecharts_3();setInterval(function(){kecharts_3();}, 15000);
kecharts_4();setInterval(function(){kecharts_4();}, 15000);
kecharts_5();setInterval(function(){kecharts_5();}, 15000);
kecharts_6();setInterval(function(){kecharts_6();}, 15000);




function kecharts_1() {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('kechart1'));
    var randome81 = [randomNum(600,2000),randomNum(600,2000), randomNum(600,2000), randomNum(600,2000), randomNum(600,2000), randomNum(600,2000)];

    option = {
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#00B2EE'
                }
            }
        },

        legend: {
        top:'0%',
            data:['CO2指标'],
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
                    splitNumber: 15,
                    textStyle: {
                         color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
        }],

        yAxis: [{
            name:"浓度:PPM",
            nameTextStyle:{
                color:  "rgba(255,255,255,.6)",
                fontSize: 12,
            },
            type: 'value',
            axisTick: {show: false},
            min:600,
            max:2000,
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
            },
            splitArea:{
                show:false,
                interval:(15-25),
            },
            splitNumber: 5,
            splitLine: {
                interval:2,
                lineStyle: {
                    color: 'rgba(255,255,255,.1)',
                }
            },
        }],

        series: [{
                name: 'CO2指标',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        color: '#00B2EE',
                        width: 2
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#00B2EE',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
                data: randome81,
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
                        yAxis: 2000
                    }, {
                        name: '优',
                        yAxis: 1000
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

function kecharts_2() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('kechart2'));
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
                    splitNumber: 15,
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
            max:750,
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
            name: '可挥发化合物VOC',
            type: 'bar',
            data: randome81 ,
            barWidth:'50%', //柱子宽度
            itemStyle: {
                normal: {
                    color:'#00B2EE',
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
                    yAxis: 700
                }, {
                    name: '优',
                    yAxis: 600
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

function kecharts_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('kechart3'));
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

function kecharts_4() {
    // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('kechart4'));
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

function kecharts_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('kechart5'));
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

function kecharts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('kechart6'));
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































