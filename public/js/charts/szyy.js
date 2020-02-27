$(function(){

    szyy_echarts_1();setInterval(function(){szyy_echarts_1();}, 2000);
    szyy_echarts_2();setInterval(function(){szyy_echarts_2();}, 2000);
    szyy_echarts_3();setInterval(function(){szyy_echarts_3();}, 2000);

    function szyy_echarts_1() {

        var myChart = echarts.init(document.getElementById('szyy_echarts_1'));

        var data = [{
                value: 10,
                name: 'PH值'
            },
            {
                value: 5,
                name: '透明度'
            },
            {
                value: 15,
                name: '细菌总数'
            },
            {
                value: 25,
                name: '气味'
            },
            {
                value: 20,
                name: '残留氯'
            },
            {
                value: 35,
                name: '颗粒物'
            }
        ]
        option = {
            // backgroundColor:"#0B1837",
            color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9", "#FFAD05"],
            // title: {
            //     text: '网络/安全设备',
            //     left: '60',
            //     top: 0,
            //     textAlign: 'center',
            //     textStyle: {
            //         color: '#fff',
            //         fontSize: 14,
            //         fontWeight: 0
            //     }
            // },
            grid: {
                left: -100,
                top: 50,
                bottom: 10,
                right: 10,
                containLabel: true
            },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                type: "scroll",
                orient: "vartical",
                // x: "right",
                top: "center",
                right: '10%',
                // bottom: "0%",
                itemWidth: 16,
                itemHeight: 8,
                itemGap: 16,
                textStyle: {
                    color: '#fff',
                    fontSize: 24,
                    fontWeight: 'bold'
                },
                data: ['PH值', '透明度', '细菌总数', '气味', '残留氯', '颗粒物']
            },
            polar: {},
            angleAxis: {
                interval: 1,
                type: 'category',
                data: [],
                z: 10,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#0B4A6B",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    interval: 0,
                    show: false,
                    color: "#0B4A6B",
                    margin: 8,
                    fontSize: 16
                },
            },
            radiusAxis: {
                min: 40,
                max: 120,
                interval: 20,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: "#0B3E5E",
                        width: 1,
                        type: "solid"
                    },
                },
                axisLabel: {
                    formatter: '{value} %',
                    show: false,
                    padding: [0, 0, 20, 0],
                    color: "#0B3E5E",
                    fontSize: 24
                },
                splitLine: {
                    lineStyle: {
                        color: "#0B3E5E",
                        width: 2,
                        type: "solid"
                    }
                }
            },
            calculable: true,
            series: [
                {
                type: 'pie',
                radius: ["5%", "10%"],
                hoverAnimation: false,
                labelLine: {
                    normal: {
                        show: false,
                        length: 30,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: [{
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#0B4A6B"
                        }
                    }
                }]
            }, 
            {
                type: 'pie',
                radius: ["90%", "95%"],
                hoverAnimation: false,
                labelLine: {
                    normal: {
                        show: false,
                        length: 30,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                name: "",
                data: [{
                    name: '',
                    value: 0,
                    itemStyle: {
                        normal: {
                            color: "#0B4A6B"
                        }
                    }
                }]
            },
            {
                stack: 'a',
                type: 'pie',
                radius: ['20%', '80%'],
                roseType: 'area',
                zlevel:10,
                label: {
                    normal: {
                        show: true,
                        formatter: "{c}",
                        textStyle: {
                            color: '#fff',
                            fontSize: 24,
                            fontWeight: 'bold'
                        },
                        position: 'outside'
                    },
                    emphasis: {
                        show: true
                    }
                },
                labelLine: {
                    normal: {
                        show: true,
                        length: 20,
                        length2: 55
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: data,
            }, ]
        }      
     
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function szyy_echarts_2() {

        var myChart = echarts.init(document.getElementById('szyy_echarts_2'));

        var charts = { // 按顺序排列从大到小
            cityList: ['综合院区域直饮水', '无线院区域直饮水', '会议室直饮水', '茶水间直饮水', '大堂直饮水'],
            cityData: [72, 90, 57, 47, 75]
        }
        var top10CityList = charts.cityList
        var top10CityData = charts.cityData
        var color = ['rgba(248,195,248', 'rgba(100,255,249', 'rgba(135,183,255', 'rgba(248,195,248', 'rgba(100,255,249']
        
        let lineY = []
        for (var i = 0; i < charts.cityList.length; i++) {
                var x = i
                if (x > color.length - 1) {
                x = color.length - 1
                }
                var data = {
                name: charts.cityList[i],
                color: color[x] + ')',
                value: top10CityData[i],
                itemStyle: {
                    normal: {
                    show: true,
                    color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                        offset: 0,
                        color: color[x] + ', 0.3)'
                    }, {
                        offset: 1,
                        color: color[x] + ', 1)'
                    }], false),
                    barBorderRadius: 10
                    },
                    emphasis: {
                    shadowBlur: 15,
                    shadowColor: 'rgba(0, 0, 0, 0.1)'
                    }
                }
                }
                lineY.push(data)
        }
        
        console.log(lineY)
        option= {
            // backgroundColor:'#000',
            title: {
            show: false
            },
            tooltip: {
            trigger: 'item'
            },
            grid: {
            borderWidth: 0,
            top: '10%',
            left: '5%',
            right: '15%',
            bottom: '3%'
            },
            color: color,
            yAxis: [{
            type: 'category',
            inverse: true,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                show: false,
                inside: false
            },
            data: top10CityList
            }, {
            type: 'category',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                inside: false,
                textStyle: {
                color: '#fff',
                fontSize: '24',
                fontWeight:'bold',
                fontFamily: 'PingFangSC-Regular'
                },
                formatter: function (val) {
                return `${val}%`
                }
            },
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            data: top10CityData
            }],
            xAxis: {
            type: 'value',
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false
            }
            },
            series: [{
            name: '',
            type: 'bar',
            zlevel: 12,
            barWidth: '15px',
            data: lineY,
            animationDuration: 1500,
            label: {
                normal: {
                color: '#fff',
                show: true,
                position: [0, '-24px'],
                textStyle: {
                    fontSize: '24',
                    fontWeight:'bold',
                },
                formatter: function (a, b) {
                    return a.name
                }
                }
            }
            }],
            animationEasing: 'cubicOut'
        }      

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function szyy_echarts_3() {

        var myChart = echarts.init(document.getElementById('szyy_echarts_3'));

        var scaleData = [{
            'name': '谷物',
            'value': 10
        },
        {
            'name': '蔬果',
            'value': 20
        },
        {
            'name': '奶制品',
            'value': 20
        },
        {
            'name': '甜食脂肪',
            'value': 27
        },
        {
            'name': '肉类豆类',
            'value': 23
        }
        ];
        var rich = {
            white: {
                color: '#fff',
                align: 'center',
                padding: [5, 0],
                fontSize: 24,
                fontWeight: 'bold',
            }
        };
        var placeHolderStyle = {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                },
                color: 'rgba(0, 0, 0, 0)',
                borderColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 0
            }
        };
        var data = [];
        for (var i = 0; i < scaleData.length; i++) {
            data.push({
                value: scaleData[i].value,
                name: scaleData[i].name,
                itemStyle: {
                    normal: {
                        borderWidth: 9,
                        shadowBlur: 10,
                        borderColor: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
                            offset: 0,
                            color: '#7777eb'
                        }, {
                            offset: 1,
                            color: '#70ffac'
                        }]),
                        shadowColor: 'rgba(142, 152, 241, 0.1)'
                    }
                }
            }, {
                value: 4,
                name: '',
                itemStyle: placeHolderStyle
            });
        }
        var seriesObj = [{
            name: '',
            type: 'pie',
            clockWise: false,
            radius: [195, 200],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#fff',
                        fontSize: '24',
                        fontWeight: 'bold',
                        formatter: function(params) {
                            var percent = 0;
                            var total = 0;
                            for (var i = 0; i < scaleData.length; i++) {
                                total += scaleData[i].value;
                            }
                            percent = ((params.value / total) * 100).toFixed(0);
                            if(params.name !== '') {
                                return params.name + '\n{white|' + '占比' + percent + '%}';
                            }else {
                                return '';
                            }
                        },
                        rich: rich
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            data: data
        }];
        option = {
            // backgroundColor: '#04243E',
            tooltip: {
                show: false
            },
            legend: {
                show: false
            },
            toolbox: {
                show: false
            },
            series: seriesObj
        }            
     
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