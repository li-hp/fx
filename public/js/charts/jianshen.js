
$(function () {
    js111();
    js222();
    js333();
    js444();




















    function js111() {
    
    
    
        var myChart = echarts.init(document.getElementById('js111'));
        var data1=jsdata1
        var data2=jsdata2
        var data3=jsdata3

        var option = {
          
               tooltip: {
                 trigger: 'axis',
                 axisPointer: { // 坐标轴指示器，坐标轴触发有效
                   type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                 }
               },
               title: 
                {
                    text: '健身人数：'+data3,
                    top:'12%',
                    left:'68%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 30,
                    }
                },
               grid: {
                 left: '2%',
                 right: '4%',
                 bottom: '5%',
                 top:'20%',
                 containLabel: true
               },
                legend: {
               data: ['健身人数', '待健身人数'],
               right: 10,
               top:5,
               textStyle: {
                   color: "#fff",
                   fontSize:30
               },
               itemWidth: 40,
               itemHeight: 30,
               // itemGap: 35
           },
               xAxis: {
                 type: 'category',
                 data: ['周一','周二','周三','周四','周五','周六','周日' ],
                 axisLine: {
                   lineStyle: {
                     color: 'white'
       
                   }
                 },
                 axisLabel: {
                   // interval: 0,
                   // rotate: 40,
                    textStyle: {
                   color: "#fff",
                   fontSize:30
               },
                 },
               },
               
               
               
               
               
               
       
               yAxis: {
                 type: 'value',
                 max:'100',
               
                 axisLine: {
                   show: false,
                   lineStyle: {
                     color: 'white'
                   }
                 },
                
                 splitLine: {
                   show: true,
                   lineStyle: {
                     color: 'rgba(255,255,255,0.3)'
                   }
                 },
                 axisLabel: {
                       textStyle: {
                   color: "#fff",
                   fontSize:30
               },
                     
                 }
               },
               
               "dataZoom": [{
                 "show": false,
                 "height": 12,
                 "xAxisIndex": [
                   0
                 ],
               
               
                 textStyle:{
                   color:"#fff"},
                 borderColor:"#90979c"
               }, {
                 "type": "inside",
                 "show": true,
                 "height": 15,
                 "start": 1,
                 "end": 35
               }],
               series: [{
                 name: '健身人数',
                 type: 'bar',
                 barWidth: '15%',
                 itemStyle: {
                   normal: {
                       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#fccb05'
                       }, {
                           offset: 1,
                           color: '#f5804d'
                       }]),
                       barBorderRadius: 12,
                   },
                 },
                 data: data1
               }
               ,
               {
                 name: '待健身人数',
                 type: 'bar',
                 barWidth: '15%',
                 itemStyle: {
                   normal: {
                       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                           offset: 0,
                           color: '#8bd46e'
                       }, {
                           offset: 1,
                           color: '#09bcb7'
                       }]),
                       barBorderRadius: 11,
                   }
                   
                 },
                 data: data2
               },]
             };
       
           
           

        
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

    
    }


    function js222() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('js222'));
   
    option = {
        // backgroundColor: "#05224d",
      
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
            data: ['张三','李四','王五','富贵','平安','建国','建军']
        }],
        yAxis: [{
            name:'健身时长（h）',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 24,
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
                show: true,
            },
        }],
        series: [
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
                    name: '超标',
                    yAxis: 2000,
                    lineStyle:{
                        color:'#FF4500',
                        width:2
                    }
                }],
    
               
            },
        
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1'];
                        return colorList[params.dataIndex];
                    },
                    barBorderRadius: [30, 30, 0, 0],
                    shadowBlur: 4,
                }
            },
            data: [20,15,12,10,7,2,2]
        }]
    };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }




    function js333() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('js333'));
   
    option = {
        // backgroundColor: "#05224d",
      
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
            data: ['周一\n\n羽毛球','周二\n\n乒乓球','周三\n\n篮球','周四\n\n足球','周五\n\n游泳']
        }],
        yAxis: [{
            name:'报名人数(人)',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 35,
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
                show: true,
            },
        }],
        series: [
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
                    name: '超标',
                    yAxis: 2000,
                    lineStyle:{
                        color:'#FF4500',
                        width:2
                    }
                }],
    
               
            },
        
            itemStyle: {
                normal: {
                    color: function(params) {
                        var colorList = ['#d3b355', '#debd59', '#e2b632', '#f3c744', '#fac72e', '#1cfffb', '#1dfff1'];
                        return colorList[params.dataIndex];
                    },
                    barBorderRadius: [30, 30, 0, 0],
                    shadowBlur: 4,
                }
            },
            data: [20,10,15,18,30]
        }]
    };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }



    function js444() {
        // 基于准备好的dom，初始化echarts实例
        var value = kqdata[0];
        var value1=kqdata[1];

        var data = [kqdata[0],kqdata[0]];
      var  data1=[kqdata[1],kqdata[1]]
        var dom = document.getElementById("js444");
        // dom.style.height=window.innerHeight+'px';
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        option = {
            //  backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
            //     offset: 0,
            //     color: '#431ab8'
            // }, {
            //     offset: 1,
            //     color: '#471bba'
            // }]),
             title:[ {
                 text: (value ).toFixed(0) + '{a|℃}',
                 textStyle: {
                     fontSize: 50,
                     fontFamily: 'Microsoft Yahei',
                     fontWeight: 'normal',
                     color: '#fff',
                     rich: {
                         a: {
                             fontSize: 28,
                             fontWeight: 'bold',
                         }
                     }
                 },
                 x: 'center',
                 y: '40%'
             },
             {
                text: (value1 ).toFixed(0) + '{a|%}',
                textStyle: {
                    fontSize: 50,
                    fontFamily: 'Microsoft Yahei',
                    fontWeight: 'normal',
                    color: '#fff',
                    rich: {
                        a: {
                            fontSize: 28,
                            fontWeight: 'bold',
                        }
                    }
                },
                x: '81%',
                y: '40%'
            },

            ],

             graphic: [
                 {
                 type: 'group',
                 left: '45%',
                 top: '58%',
                 children: [{
                     type: 'text',
                     z: 100,
                     left: '10',
                     top: 'middle',
                     style: {
                         fill: '#fff',
                         text: '实时温度',
                         font: '30px Microsoft YaHei',
                         fontWeight: 'bold',
                     }
                 }]
             },
            
             {
                type: 'group',
                left: '80%',
                top: '58%',
                children: [{
                    type: 'text',
                    z: 100,
                    left: '10',
                    top: 'middle',
                    style: {
                        fill: '#fff',
                        text: '实时湿度',
                        font: '30px Microsoft YaHei',
                        fontWeight: 'bold',
                    }
                }]
            }
            
            ],
             series: [
                 {
                 type: 'liquidFill',
                 radius: '50%',
                 center: ['50%', '50%'],
                 //  shape: 'roundRect',
                 data: data,
                 backgroundStyle: {
                     color: {
                         type: 'linear',
                         x: 1,
                         y: 0,
                         x2: 0.5,
                         y2: 1,
                         colorStops: [{
                             offset: 1,
                             color: 'rgba(68, 145, 253, 0)'
                         }, {
                             offset: 0.5,
                             color: 'rgba(68, 145, 253, .25)'
                         }, {
                             offset: 0,
                             color: 'rgba(68, 145, 253, 1)'
                         }],
                         globalCoord: false
                     },
                 },
                 outline: {
                     borderDistance: 0,
                     itemStyle: {
                         borderWidth: 20,
                         borderColor: {
                             type: 'linear',
                             x: 0,
                             y: 0,
                             x2: 0,
                             y2: 1,
                             colorStops: [{
                                 offset: 0,
                                 color: 'rgba(69, 73, 240, 0)'
                             }, {
                                 offset: 0.5,
                                 color: 'rgba(69, 73, 240, .25)'
                             }, {
                                 offset: 1,
                                 color: 'rgba(69, 73, 240, 1)'
                             }],
                             globalCoord: false
                         },
                         shadowBlur: 10,
                         shadowColor: '#000',
                     }
                 },
                 color: {
                     type: 'linear',
                     x: 0,
                     y: 0,
                     x2: 0,
                     y2: 1,
                     colorStops: [{
                         offset: 1,
                         color: 'rgba(58, 71, 212, 0)'
                     }, {
                         offset: 0.5,
                         color: 'rgba(31, 222, 225, .2)'
                     }, {
                         offset: 0,
                         color: 'rgba(31, 222, 225, 1)'
                     }],
                     globalCoord: false
                 },
                 label: {
                     normal: {
                         formatter: '',
                     }
                 }
             },

             {
                type: 'liquidFill',
                radius: '50%',
                center: ['85%', '50%'],
                //  shape: 'roundRect',
                data: data1,
                backgroundStyle: {
                    color: {
                        type: 'linear',
                        x: 1,
                        y: 0,
                        x2: 0.5,
                        y2: 1,
                        colorStops: [{
                            offset: 1,
                            color: 'rgba(68, 145, 253, 0)'
                        }, {
                            offset: 0.5,
                            color: 'rgba(68, 145, 253, .25)'
                        }, {
                            offset: 0,
                            color: 'rgba(68, 145, 253, 1)'
                        }],
                        globalCoord: false
                    },
                },
                outline: {
                    borderDistance: 0,
                    itemStyle: {
                        borderWidth: 20,
                        borderColor: {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(69, 73, 240, 0)'
                            }, {
                                offset: 0.5,
                                color: 'rgba(69, 73, 240, .25)'
                            }, {
                                offset: 1,
                                color: 'rgba(69, 73, 240, 1)'
                            }],
                            globalCoord: false
                        },
                        shadowBlur: 10,
                        shadowColor: '#000',
                    }
                },
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 1,
                        color: 'rgba(58, 71, 212, 0)'
                    }, {
                        offset: 0.5,
                        color: 'rgba(31, 222, 225, .2)'
                    }, {
                        offset: 0,
                        color: 'rgba(31, 222, 225, 1)'
                    }],
                    globalCoord: false
                },
                label: {
                    normal: {
                        formatter: '',
                    }
                }
            },
            
            
            
            ]
         };
         myChart.setOption(option);
         window.addEventListener("resize",function(){
             myChart.resize();
         });
    
    }



















































})
    