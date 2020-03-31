
$(function () {

    gecharts_1();
    gecharts_2();
    gecharts_3();
    gecharts_4();
    gecharts_6();
    gecharts_7();
    gecharts_8();

    
    setTimeout(function(){

        gecharts_1();
        gecharts_2();
        gecharts_3();
        gecharts_4();
        gecharts_6();
        gecharts_7();
        gecharts_8();
    
    
    },5000); 
        

   
    setInterval(function(){

        gecharts_1();
        gecharts_2();
        gecharts_3();
        gecharts_4();
        gecharts_6();
        gecharts_7();
        gecharts_8();
    
    },360000); 
 



    function gecharts_1() {

        var myChart = echarts.init(document.getElementById('gechart1'));

        //数据
         var XName= ["0:00","3：00","6:00","9:00","12：00","15:00","18:00","21:00","0:00"]
        var data1 = [290,330,350,360,355,335,315,300,290];
        // var Line = ["光照强度节律图"];

        var randome81 = jielvlightdata;

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
                show:false,
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
                data: XName,
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

        //数据
        // var XName= ["0:00","3：00","6:00","9:00","12：00","15:00","18:00","21:00","0:00"]
        var data1 = [290,330,350,360,355,335,315,300,290];
        // var Line = ["光照强度节律图"];

        var randome81 = inlightdata1;

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
                show:false,
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
                data: timeday,
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
            }
           ]

        };

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
   function gecharts_3() {
        var myChart = echarts.init(document.getElementById('gechart3'));

        var randome81 =inlightdata2;
    
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
                data:['办公区1'],
                        textStyle: {
                            color: "#fff",
                            fontSize:'24',
                            fontWeight: 'bold',
                }
            },
    
            grid: {
                left: '8%',
                top: '10%',
                right: '5%',
                bottom: '8%',
                containLabel: true
            },
    
            xAxis: [{
                // name:"分钟前",
                nameLocation:'center',
                nameGap:40,
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                type: 'category',
                data: timeday,
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
                            color: "#fff",
                            fontSize:'24',
                            fontWeight: 'bold',
                        },
                    },
            }],
    
            yAxis: [{
                name:"光强（LUX）",
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                type: 'value',
                axisTick: {show: false},
                min:0,
                max:600,
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
            axisLabel:  {
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
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
                    name: '光强指标',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    showAllSymbol: true,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbolSize: 20,
                    lineStyle: {
                        normal: {
                            // color: "#53fdfe", // 线条颜色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#FFEC8B'
                            }, {
                                offset: 1,
                                color: '#FFFF00'
                            }]),
                            barBorderRadius: 12,
                            width:10
                        },
    
                        borderColor: '#f0f',
                    },
                    itemStyle: {
                        normal: {
                            color: '#EEAD0E',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 30
                        }
                    },
                    data: randome81,
                    markLine:{
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

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

    }

    function gecharts_4() {
        var myChart = echarts.init(document.getElementById('gechart4'));

        var randome81 =inlightdata3;
    
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
                data:['办公区2'],
                        textStyle: {
                            color: "#fff",
                            fontSize:'24',
                            fontWeight: 'bold',
                }
            },
    
            grid: {
                left: '5%',
                top: '8%',
                right: '8%',
                bottom: '5%',
                containLabel: true
            },
    
            xAxis: [{
                // name:"分钟前",
                nameLocation:'center',
                nameGap:40,
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                type: 'category',
                data: timeday,
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
                            color: "#fff",
                            fontSize:'24',
                            fontWeight: 'bold',
                        },
                    },
            }],
    
            yAxis: [{
                name:"光强（LUX）",
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                type: 'value',
                axisTick: {show: false},
                min:0,
                max:600,
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
            axisLabel:  {
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
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
                    name: '光强指标',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    showAllSymbol: true,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbolSize: 20,
                    lineStyle: {
                        normal: {
                            // color: "#53fdfe", // 线条颜色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#FFEC8B'
                            }, {
                                offset: 1,
                                color: '#FFFF00'
                            }]),
                            barBorderRadius: 12,
                            width:10
                        },
    
                        borderColor: '#f0f',
                    },
                    itemStyle: {
                        normal: {
                            color: '#EEAD0E',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 30
                        }
                    },
                    data: randome81,
                    markLine:{
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

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

    }

    function gecharts_6() {
        var myChart = echarts.init(document.getElementById('gechart6'));

        var randome81 =weekoutlightdata;
    
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
                data:['室外光强'],
                        textStyle: {
                            color: "#fff",
                            fontSize:'24',
                            fontWeight: 'bold',
                }
            },
    
            grid: {
                left: '5%',
                top: '8%',
                right: '5%',
                bottom: '8%',
                containLabel: true
            },
    
            xAxis: [{
                // name:"分钟前",
                nameLocation:'center',
                nameGap:40,
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                type: 'category',
                data: timeweek,
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
                            color: "#fff",
                            fontSize:'24',
                            fontWeight: 'bold',
                        },
                    },
            }],
    
            yAxis: [{
                name:"光强（LUX）",
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                type: 'value',
                axisTick: {show: false},
                min:0,
                max:1500,
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
            axisLabel:  {
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
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
                    name: '光强指标',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    showAllSymbol: true,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbolSize: 20,
                    lineStyle: {
                        normal: {
                            // color: "#53fdfe", // 线条颜色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#FFEC8B'
                            }, {
                                offset: 1,
                                color: '#FFFF00'
                            }]),
                            barBorderRadius: 12,
                            width:10
                        },
    
                        borderColor: '#f0f',
                    },
                    itemStyle: {
                        normal: {
                            color: '#EEAD0E',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 30
                        }
                    },
                    data: randome81,
                    markLine:{
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

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

    }

    function gecharts_7() {
        var myChart = echarts.init(document.getElementById('gechart7'));

        var randome81 = weekinlightdata2;
    
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
                data:['办公区1'],
                        textStyle: {
                            color: "#fff",
                            fontSize:'24',
                            fontWeight: 'bold',
                }
            },
    
            grid: {
                left: '5%',
                top: '8%',
                right: '8%',
                bottom: '5%',
                containLabel: true
            },
    
            xAxis: [{
                // name:"分钟前",
                nameLocation:'center',
                nameGap:40,
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                type: 'category',
                data: timeweek,
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
                            color: "#fff",
                            fontSize:'24',
                            fontWeight: 'bold',
                        },
                    },
            }],
    
            yAxis: [{
                name:"光强（LUX）",
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                type: 'value',
                axisTick: {show: false},
                min:0,
                max:600,
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
            axisLabel:  {
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
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
                    name: '光强指标',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    showAllSymbol: true,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbolSize: 20,
                    lineStyle: {
                        normal: {
                            // color: "#53fdfe", // 线条颜色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#FFEC8B'
                            }, {
                                offset: 1,
                                color: '#FFFF00'
                            }]),
                            barBorderRadius: 12,
                            width:10
                        },
    
                        borderColor: '#f0f',
                    },
                    itemStyle: {
                        normal: {
                            color: '#EEAD0E',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 30
                        }
                    },
                    data: randome81,
                    markLine:{
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

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

    }



 



    function gecharts_8() {
        var myChart = echarts.init(document.getElementById('gechart8'));

        var randome81 = weekinlightdata3;
    
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
                data:['办公区2'],
                        textStyle: {
                            color: "#fff",
                            fontSize:'24',
                            fontWeight: 'bold',
                }
            },
    
            grid: {
                left: '5%',
                top: '8%',
                right: '5%',
                bottom: '8%',
                containLabel: true
            },
    
            xAxis: [{
                // name:"分钟前",
                nameLocation:'center',
                nameGap:40,
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                type: 'category',
                data: timeweek,
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
                            color: "#fff",
                            fontSize:'24',
                            fontWeight: 'bold',
                        },
                    },
            }],
    
            yAxis: [{
                name:"光强（LUX）",
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                type: 'value',
                axisTick: {show: false},
                min:0,
                max:600,
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
            axisLabel:  {
                    textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
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
                    name: '光强指标',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    showAllSymbol: true,
                    // symbol: 'image://./static/images/guang-circle.png',
                    symbolSize: 20,
                    lineStyle: {
                        normal: {
                            // color: "#53fdfe", // 线条颜色
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#FFEC8B'
                            }, {
                                offset: 1,
                                color: '#FFFF00'
                            }]),
                            barBorderRadius: 12,
                            width:10
                        },
    
                        borderColor: '#f0f',
                    },
                    itemStyle: {
                        normal: {
                            color: '#EEAD0E',
                            borderColor: 'rgba(221, 220, 107, .1)',
                            borderWidth: 30
                        }
                    },
                    data: randome81,
                    markLine:{
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































