
$(function () {

    // airdata();setInterval(function(){airdata();}, 60000);

    gecharts_1();setInterval(function(){gecharts_1();}, 2000);
    gecharts_2();setInterval(function(){gecharts_2();}, 1500);
    gecharts_3();setInterval(function(){gecharts_3();}, 1500);
    //gecharts_4();setInterval(function(){gecharts_4();}, 15000);
    //gecharts_5();setInterval(function(){gecharts_5();}, 15000);
    //gecharts_6();setInterval(function(){gecharts_6();}, 15000);




    function gecharts_1() {

        var myChart = echarts.init(document.getElementById('gechart1'));

        //数据
        // var XName= ["0:00","3：00","6:00","9:00","12：00","15:00","18:00","21:00","0:00"]
        var data1 = [290,330,350,360,355,335,315,300,290];
        // var Line = ["光照强度节律图"];

        var randome81 = [randomNum(280,360),
            randomNum(280,360),randomNum(280,360),
            randomNum(280,360),randomNum(280,360),
            randomNum(280,360),randomNum(280,360),
            randomNum(280,360),randomNum(280,360)];

        var mapdata = data1.map( function(item){
            return item +200
        })

        var mapdata_series1 = randome81.map( function(item){
            return item +100
        })

        option = {
            // backgroundColor: "#05224d",
            tooltip: {},
            grid: {
                top: '8%',
                left: '5%',
                right: '5%',
                bottom: '8%',
                containLabel: true,
            },
            legend: {
                itemGap: 50,
                data: ['变化趋势' ,'每日数据'],
                textStyle: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                axisLine: { //坐标轴轴线相关设置。数学上的x轴
                    show: true,
                    lineStyle: {
                        color: '#f9f9f9'
                    },
                },
                axisLabel: { //坐标轴刻度标签的相关设置
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
                        margin: 15,
                    },
                },
                axisTick: {
                    show: false,
                },
                data: ["0:00","3：00","6:00","9:00","12：00","15:00","18:00","21:00","0:00"],
            }],
            yAxis: [{
                type: 'value',
                min: 0,
                // max: 140,
                splitNumber: 7,
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#0a3256'
                    }
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    margin: 20,
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
        
                    },
                },
                axisTick: {
                    show: false,
                },
            }],
            series: [
            {
                name: '变化趋势',
                type: 'line',
                // smooth: true, //是否平滑曲线显示
                // symbol:'circle',  // 默认是空心圆（中间是白色的），改成实心圆
                showAllSymbol: true,
                symbol: 'emptyCircle',
                symbolSize: 20,
                lineWidth:'15px',
                lineStyle: {
                    normal: {
                        color: "#FFEC8B", // 线条颜色
                    },
                    barBorderRadius: 12,
                    Width:10,
                        },
                label: {
                    show: false,
                    position: 'top',
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
                    }
                },
                itemStyle: {
                    normal: {
                        color: "#FFEC8B",
        
                    }
                },
                tooltip: {
                    show: false
                },
                areaStyle: { //区域填充样式
                    normal: {
                        //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(243,216,26,0.5)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,0,0, 0)'
                            }
                        ], false),
                        shadowColor: 'rgba(53,142,215, 0.5)', //阴影颜色
                        shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                        }
                    },
                    data: mapdata_series1
            }, 
            {
                name: '每日数据',
                type: 'bar',
                barWidth: '30px',
                tooltip: {
                    show: false
                },
                 label: {
                    show: true,
                    position: 'top',
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
                    }
                },
                itemStyle: {
                    normal: {
                        color: function(params) {
                            var colorList = ['#FFFF00', '#FFEC8B', '#EEEE00', '#EEDC82', '#EEC900', '#FFD700', '#FFD700'];
                            return colorList[params.dataIndex];
                        },
                        barBorderRadius: [30, 30, 0, 0],
                        shadowBlur: 4,
                    }
                },
                data: randome81
            },
            {
                name: '昼夜节律',
                type: 'line',
                smooth: true,
                // symbol: 'circle',
                // showAllSymbol: true,
                // symbolSize: 20,
                lineStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#EEAD0E'
                        }, {
                            offset: 1,
                            color: '#FFFACD'
                        }]),
                        barBorderRadius: 12,
                        width:10
                    },

                    borderColor: '#FFFACD',
                },
                // itemStyle: {
                //     normal: {
                //         color: '#FFFACD',
                //         borderColor: 'rgba(221, 220, 107, .1)',
                //         borderWidth: 30
                //     }
                // },
                data:mapdata
            }]

        };

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

        // 数据
        var dateBase = new Date();
        var year = dateBase.getFullYear();
        var dottedBase = +dateBase + 1000 * 3600 * 24;
        var weekCategory = [];

        var radarData = [];
        var radarDataAvg = [];
        var maxData = 12000;
        var weekMaxData = [];
        var weekLineData = [];


        // 周数据
        for (var i = 0; i < 7; i++) {
        // 日期
        var date = new Date(dottedBase -= 1000 * 3600 * 24);
        weekCategory.unshift([
            date.getMonth() + 1,
            date.getDate()
        ].join('/'));

        // 折线图数据
        weekMaxData.push(maxData);
        var distance = Math.round(Math.random() * 11000 + 500);
        weekLineData.push(distance);

        // 雷达图数据
        // 我的指标
        var averageSpeed = +(Math.random() * 5 + 3).toFixed(3);
        var maxSpeed = averageSpeed + (+(Math.random() * 3).toFixed(2));
        var hour = +(distance / 1000 / averageSpeed).toFixed(1);
        var radarDayData = [distance, averageSpeed, maxSpeed, hour];
        radarData.unshift(radarDayData);

        // 平均指标
        var distanceAvg = Math.round(Math.random() * 8000 + 4000);
        var averageSpeedAvg = +(Math.random() * 4 + 4).toFixed(3);
        var maxSpeedAvg = averageSpeedAvg + (+(Math.random() * 2).toFixed(2));
        var hourAvg = +(distance / 1000 / averageSpeed).toFixed(1);
        var radarDayDataAvg = [distanceAvg, averageSpeedAvg, maxSpeedAvg, hourAvg];
        radarDataAvg.unshift(radarDayDataAvg);
        }

        // 颜色设置
        var color = {
        linearYtoG: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [{
            offset: 0,
            color: '#f5b44d'
            }, {
            offset: 1,
            color: '#28f8de'
            }]
        },
        linearGtoB: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
            offset: 0,
            color: '#43dfa2'
            }, {
            offset: 1,
            color: '#28f8de'
            }]
        },
        linearBtoG: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
            offset: 0,
            color: '#1c98e8'
            }, {
            offset: 1,
            color: '#28f8de'
            }]
        },
        areaBtoG: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
            offset: 0,
            color: 'rgba(35,184,210,.2)'
            }, {
            offset: 1,
            color: 'rgba(35,184,210,0)'
            }]
        }
        };

        var option = {
        title: {
            text: '一周跑步数据',
            textStyle: {
            color: '#fff',
            fontSize: 32,
            fontWeight: 'normal'
            },
            subtext: year + '/' + weekCategory[6],
            subtextStyle: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            top: 50,
            left: 80
        },
        legend: {
            top: 220,
            left: 80,
            orient: 'vertical',
            itemGap: 15,
            itemWidth: 12,
            itemHeight: 12,
            data: ['平均指标', '我的指标'],
            textStyle: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
        },
        tooltip: {
            trigger: 'item'
        },
        radar: {
            center: ['68%', '27%'],
            radius: '40%',
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
            },
            splitNumber: 8,
            axisLine: {
                lineStyle: {
                    color: color.linearYtoG,
                    opacity: .6
                }
            },
            splitLine: {
                lineStyle: {
                    color: color.linearYtoG,
                    opacity: .6
                }
            },
            splitArea: {
                areaStyle: {
                    color: '#fff',
                    opacity: .1,
                    shadowBlur: 25,
                    shadowColor: '#000',
                    shadowOffsetX: 0,
                    shadowOffsetY: 5,
                }
            },
            indicator: [{
            name: '全程距离(m)',
            max: maxData
            }, {
            name: '平均速度(km/h)',
            max: 10
            }, {
            name: '最快速度(km/h)',
            max: 12
            }, {
            name: '总计时间(h)',
            max: 3.5
            }]
        },
        grid: {
            left: '15%',
            right: '15%',
            bottom: 40,
            top: '60%',
        },
        xAxis: {
            type: 'category',
            position: 'bottom',
            axisLine: true,
            axisLabel: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            data: weekCategory,
        },
        yAxis: {
            name: 'km/h',
            nameLocation: 'end',
            nameGap: 24,
            nameTextStyle: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            max: maxData,
            splitNumber: 4,

            axisLine: {
            lineStyle: {
                opacity: 0
            }
            },
            splitLine: {
            show: true,
            lineStyle: {
                color: '#fff',
                opacity: .1
            }
            },
            axisLabel: {
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            }
        },
        series: [{
            name: '每日跑步指标分布与比较',
            type: 'radar',
            symbolSize: 0,
            data: [{
            value: radarDataAvg[6],
            name: '平均指标',
            itemStyle: {
                normal: {
                color: '#f8d351',
                }
            },
            lineStyle: {
                normal: {
                opacity: 0,
                }
            },
            areaStyle: {
                normal: {
                color: '#f8d351',
                shadowBlur: 25,
                shadowColor: 'rgba(248,211,81,.3)',
                shadowOffsetX: 0,
                shadowOffsetY: -10,
                opacity: 1
                }
            },

            }, {
            value: radarData[6],
            name: '我的指标',
            itemStyle: {
                normal: {
                color: '#43dfa2',
                }
            },
            lineStyle: {
                normal: {
                opacity: 0,
                }
            },
            areaStyle: {
                normal: {
                color: color.linearGtoB,
                shadowBlur: 15,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 5,
                opacity: .8
                }
            },
            }]
        }, {
            name: '每日跑步里程',
            type: 'line',
            smooth: true,
            symbol: 'emptyCircle',
            symbolSize: 8,
            itemStyle: {
            normal: {
                color: '#fff'
            }
            },
            lineStyle: {
            normal: {
                color: color.linearBtoG,
                width: 3
            }
            },
            areaStyle: {
            normal: {
                color: color.areaBtoG,
            }
            },
            data: weekLineData,
            lineSmooth: true,
            markLine: {
            silent: true,
            data: [{
                type: 'average',
                name: '平均值'
            }],
            precision: 0,
            label: {
                normal: {
                formatter: '平均值: \n {c}',
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
                }
            },
            lineStyle: {
                normal: {
                color: 'rgba(248,211,81,.7)'
                }
            }
            },
            tooltip: {
            position: 'top',
            formatter: '{c} m',
            backgroundColor: 'rgba(28,152,232,.2)',
            padding: 6
            }
        }, {
            name: '占位背景',
            type: 'bar',
            itemStyle: {
            normal: {
                show: true,
                color: '#000',
                opacity: 0
            }
            },
            silent: true,
            barWidth: '50%',
            data: weekMaxData,
            animation: false
        }, {
            name: '占位背景',
            type: 'bar',
            itemStyle: {
            normal: {
                show: true,
                color: '#000',
                opacity: .1
            }
            },
            silent: true,
            barWidth: '50%',
            barGap: 0,
            data: weekMaxData,
            animation: false
        }],
        // backgroundColor: '#383546',
        };

        // 点击事件
        myChart.on('click', function(params) {
        if (params.componentType === 'series' && params.seriesType === 'line') {

            var dataIndex = params.dataIndex;
            myChart.setOption({
            series: [
            {
            name: '每日跑步指标分布与比较',
            type: 'radar',
            symbolSize: 0,
            data: [{
            name: '平均指标',
            value: radarDataAvg[dataIndex],
            itemStyle: {
                normal: {
                color: '#f8d351',
                }
            },
            lineStyle: {
                normal: {
                opacity: 0,
                }
            },
            areaStyle: {
                normal: {
                color: '#f8d351',
                shadowBlur: 25,
                shadowColor: 'rgba(248,211,81,.3)',
                shadowOffsetX: 0,
                shadowOffsetY: -10,
                opacity: 1
                }
            },
            }, {
            name: '我的指标',
            value: radarData[dataIndex],
            itemStyle: {
                normal: {
                color: '#43dfa2',
                }
            },
            lineStyle: {
                normal: {
                opacity: 0,
                }
            },
            areaStyle: {
                normal: {
                color: color.linearGtoB,
                shadowBlur: 15,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 5,
                opacity: .8
                }
            },
            }]
        }]
            })
        }
        });

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































