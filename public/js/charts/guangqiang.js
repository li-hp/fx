
$(function () {

    gecharts_1();setInterval(function(){gecharts_1();}, 2000);
    gecharts_2();setInterval(function(){gecharts_2();}, 1500);
    gecharts_3();setInterval(function(){gecharts_3();}, 1500);


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
        var myChart = echarts.init(document.getElementById('gechart2'));

        var inlight=gdata1;
        var outlight=gdata2;
        option = {
            // backgroundColor: "#404A59",
            color: ['#ffd285', '#ff733f', '#ec4863'],
        
            title: [{
                text: '每日光强变化曲线',
                left: '3%',
                top: '6%',
                textStyle: {
                    color: '#fff',
                    fontSize:24
                }
            }, {
                text: '实时光强（LUX）',
                left: '83%',
                top: '6%',
                textAlign: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize:24
                }
            }],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                x: 300,
                top: '7%',
                textStyle: {
                    color: '#ffd285',
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                data: ['室内', '室外']
            },
            grid: {
                left: '3%',
                right: '35%',
                top: '16%',
                bottom: '6%',
                containLabel: true
            },
            toolbox: {
                "show": false,
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                "axisLine": {
                    lineStyle: {
                        color: '#FF4500'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
                    }
                },
                boundaryGap: false,
                data: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00']
            },
            yAxis: {
                "axisLine": {
                    lineStyle: {
                        color: '#fff'
                    }
                },
               
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#fff'
                    }
                },
                "axisTick": {
                    "show": false
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff',
                        fontSize:'24',
                        fontWeight: 'bold',
                    }
                    
                },
              
               min: 0,
               max: 800,
                type: 'value'
            },
               
           
            




            series: [
                {
                   
                    type: 'line',
                   
                   
                   
        
                    markLine: {
                        silent: false,
                        symbol: 'none',
                        label: {
                            show:true,
                            position:'end', // 'start\middle\end'
                            formatter: '{b}',
                            color: "#fff",
                            fontSize:'24',
                            fontWeight: 'bold',
                        },
                        data: [
                             {
                            name: '强',
                            yAxis: 500
                        },  {
                            name: '弱',
                            yAxis: 300
                        }],

                        lineStyle:{
                            color:'#FF4500',
                            width:3
                        },
                    },
                },
        
                
                
                
                {

                name: '室内',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                  symbol: 'circle',
                data: inlight,
                lineStyle: {
                    normal: {
                        barBorderRadius: 12,
                        width:5
                    },
                },

            }, 
            
            {
                name: '室外',
                smooth: true,
                type: 'line',
                symbolSize: 8,
                  symbol: 'circle',
                data: outlight,
                lineStyle: {
                    normal: {
                        barBorderRadius: 12,
                        width:5
                    },
                },
            }, 
            


            {
                type: 'pie',
                center: ['83%', '33%'],
                radius: ['25%', '30%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: gdata3,
                    name: gdata3,
                    itemStyle: {
                        normal: {
                            color: '#ffd285'
                        }
                    },
                    label: {
                        normal: {
                            formatter: gdata3+'\n\n室内光强',
                            textStyle: {
                                color: '#ffd285',
                                fontSize:'24',
                                fontWeight: 'bold',
                            }
                        }
                    }
                }

               ]
            },
            {
                type: 'pie',
                center: ['83%', '72%'],
                radius: ['25%', '30%'],
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: gdata4,
                    name: gdata4,
                    itemStyle: {
                        normal: {
                            color: '#ff733f'
                        }
                    },
                    label: {
                        normal: {
                            formatter: gdata4+"\n\n室外光强",
                            textStyle: {
                                color: '#ff733f',
                                fontSize:'24',
                                fontWeight: 'bold',
        
                            }
                        }
                    }
                
                }]
            }]
        }

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

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
            text: '各区域光强',
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
            top: 150,
            left: 80,
            orient: 'vertical',
            itemGap: 15,
            itemWidth: 12,
            itemHeight: 12,
            data: ['平均指标', '当前区域指标'],
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
            center: ['68%', '30%'],
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
            name: '光照强度',
            max: maxData
            }, {
            name: '节能效比',
            max: 10
            }, {
            name: '稳定度',
            max: 12
            }, {
            name: '炫光控制',
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
            name: 'LUX',
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































