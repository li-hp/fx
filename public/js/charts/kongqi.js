
$(function () {

    // airdata();setInterval(function(){airdata();}, 60000);
    
    // --------------- 每1.5秒随机数 -----------------//
    
    function airdata(){
        $.ajax({
            url:'js/data_json/jj111.json',
            type:'get',
            success: function (result) {
                kecharts_0(result);
                
            },
            error : function() {
                alert("数据异常！");
            }
        })
    }
    
    // kecharts_0();setInterval(function(){kecharts_0();}, randomNum(2000,7000));
    
    kecharts_0();setInterval(function(){kecharts_0();}, randomNum(2000,7000));
    kecharts_1();setInterval(function(){kecharts_1();}, randomNum(2000,7000));
    kecharts_2();setInterval(function(){kecharts_2();}, randomNum(2000,7000));
    kecharts_3();setInterval(function(){kecharts_3();}, randomNum(2000,7000));
    kecharts_4();setInterval(function(){kecharts_4();}, randomNum(2000,7000));
    kecharts_5();setInterval(function(){kecharts_5();}, randomNum(2000,7000));
    kecharts_6();setInterval(function(){kecharts_6();}, randomNum(2000,7000));
    
    // --------------- echart图表 -----------------//
    function kecharts_0() {
    
        var myChart = echarts.init(document.getElementById('kechart0'));
    
        var data=kqdata;
          var radius = '45%';
          
          
          var tem;
          if(data[0]<23)  tem='偏冷';
          if(23<=data[0]&&data[0]<24)  tem='凉爽';
          if(24<=data[0]&&data[0]<26)  tem='舒适';
          if(26<=data[0]&&data[0]<27)  tem='偏热';
           if(data[0]>27)         tem='热';
           var shi;
           if(data[1]<40)  shi='干燥';
           if(40<=data[1]&&data[1]<70)  shi='适宜';
         
            if(data[1]>70)         shi='湿润';
            var choh;
            if(data[2]<27)  choh='正常';
            if(27<=data[2]&&data[2]<40)  choh='偏高';
          
             if(data[2]>40)         choh='高';
             var voc;
  
             if(data[3]<500)  voc='正常';
             if(500<=data[3]&&data[3]<600)  voc='偏高';
           
              if(data[2]>600)         voc='高';
  
              var pm25;
              if(data[4]<15)  pm25='正常';
              if(15<=data[4]&&data[4]<35)  pm25='轻微';
            
               if(data[4]>25)         pm25='高';
  
               var co2;
               if(data[5]<1000)  co2='正常';
               if(1000<=data[5]&&data[5]<2000)  co2='轻微';
             
                if(data[4]>2000)         co2='高';
           
           
           
         option = {
         
             series: [
                 
                 
                 
                 
                 {
                 name: '温度',
                 type: 'gauge',
                 radius: radius,
                  center: ['15%', '30%'],
                   min: 20,
                    max: 30,
                 detail: {
                     fontSize:30,
                     formatter: '{value}℃\n'+tem,
                 },
                 
                 axisLabel: {
                  show: false,
              },
             
                   axisTick: {            // 坐标轴小标记
                    show:false,
                 },
                 title: { //标题
                  show: true,
                  textStyle: {
                      color:'#FFFFFF',
                      fontSize: 30, //表盘上的标题文字大小
                      fontWeight: 400,
                      fontFamily: 'PingFangSC'
                  }
              },
          axisLine: {
              show:false,
              lineStyle: {
                  width: 10,
                
                  color: [
                    
                      [0.3, '#6bdde2'],
                      [0.6, '#eddd2a'],
                      [1.0, '#ef5728']
                  ]
              }
          },
          pointer: { // 表盘上的指针
           show: true,
           length: '80%',
           width:5,
           },
         
        
          splitLine: { // 分隔线
              show: false
          },
       
     
          data: [{
               name: '温 度',
              value: data[0],
             
          }]
  
      },
             
             
             
             
             
             
             
             
             
             
             
             
             
             {
              name: '湿度',
              type: 'gauge',
              radius: radius,
               center: ['50%', '30%'],
                min: 0,
                 max: 100,
              detail: {
                  fontSize:30,
                  formatter: '{value}%\n'+shi,
              },
                axisTick: {            // 坐标轴小标记
                 show:false,
              },
                title: { //标题
                      show: true,
                      textStyle: {
                          color:'#FFFFFF',
                          fontSize: 30, //表盘上的标题文字大小
                          fontWeight: 400,
                          fontFamily: 'PingFangSC'
                      }
                  },
              axisLine: {
                  show:false,
                  lineStyle: {
                      width: 10,
  
                    
                      color: [
                        
                           
                      [0.4, '#6bdde2'],
                      [0.7, '#eddd2a'],
                      [1.0, '#ef5728']
                         
                      ]
                  }
              },
              axisTick: {
                  show:false
              },
              splitLine: { // 分隔线
                  show: false
              },
              axisLabel: {
                  show: false
              },
            
              pointer: { // 表盘上的指针
               show: true,
               length: '80%',
               width:5,
               },
           
           
              data: [{
                   name: '湿 度',
                  value: data[1],
                 
              }]
      
          },
  
  
  
  
          {
              name: '甲醛',
              type: 'gauge',
              radius: radius,
               center: ['85%', '30%'],
                min: 0,
                 max: 100,
              detail: {
                  fontSize:30,
                  formatter: '{value}ppb\n'+choh,
              },
                axisTick: {            // 坐标轴小标记
                 show:false,
              },
                title: { //标题
                      show: true,
                      textStyle: {
                          color:'#FFFFFF',
                          fontSize: 30, //表盘上的标题文字大小
                          fontWeight: 400,
                          fontFamily: 'PingFangSC'
                      }
                  },
              axisLine: {
                  show:false,
                  lineStyle: {
                      width: 10,
                    
                      color: [
                        
                        
                       
                          [0.3,'#eddd2a'],
                          [1.0, '#ef5728']
                         
                      ]
                  }
              },
              pointer: { // 表盘上的指针
               show: true,
               length: '80%',
               width:5,
               },
            
              splitLine: { // 分隔线
                  show: false
              },
              axisLabel: {
                  show: false
              },
         
              data: [{
                   name: '甲 醛',
                  value: data[2],
                 
              }]
      
          },
  
  
  
  
  
  
                
  
          {
              name: '挥发物',
              type: 'gauge',
              radius: radius,
               center: ['15%', '80%'],
                min: 0,
                 max: 1000,
              detail: {
                  fontSize:30,
                  formatter: '{value}μg/m³\n'+voc,
              },
                axisTick: {            // 坐标轴小标记
                 show:false,
              },
                title: { //标题
                      show: true,
                      textStyle: {
                          color:'#FFFFFF',
                          fontSize: 30, //表盘上的标题文字大小
                          fontWeight: 400,
                          fontFamily: 'PingFangSC'
                      }
                  },
              axisLine: {
                  show:false,
                  lineStyle: {
                      width: 10,
                    
                      color: [
                        
                        
                          [0.5, '#eddd2a'],
                       
                          [1.0, '#ef5728']
                         
                      ]
                  }
              },
              pointer: { // 表盘上的指针
               show: true,
               length: '80%',
               width:5,
               },
             
              splitLine: { // 分隔线
                  show: false
              },
              axisLabel: {
                  show: false
              },
         
              data: [{
                   name: '挥发有机物',
                  value: data[3],
                 
              }]
      
          },
  
  
  
  
                     
  
          {
              name: 'PM2.5',
              type: 'gauge',
              radius: radius,
               center: ['50%', '80%'],
                min: 0,
                 max: 100,
              detail: {
                  fontSize:30,
                  formatter: '{value}μg/m³'+pm25,
              },
                axisTick: {            // 坐标轴小标记
                 show:false,
              },
                title: { //标题
                      show: true,
                      textStyle: {
                          color:'#FFFFFF',
                          fontSize: 30, //表盘上的标题文字大小
                          fontWeight: 400,
                          fontFamily: 'PingFangSC'
                      }
                  },
              axisLine: {
                  show:false,
                  lineStyle: {
                      width: 10,
                    
                      color: [
                        
                        
                        
                          [0.15,'#eddd2a'],
                          [1.0, '#ef5728']
                         
                      ]
                  }
              },
              pointer: { // 表盘上的指针
               show: true,
               length: '80%',
               width:5,
               },
           
              splitLine: { // 分隔线
                  show: false
              },
              axisLabel: {
                  show: false
              },
              data: [{
                   name: 'PM2.5',
                  value: data[4],
                 
              }]
      
          },
  
          
          {
              name: 'CO2',
              type: 'gauge',
              radius: radius,
               center: ['85%', '80%'],
                min: 0,
                 max: 3000,
              detail: {
                  fontSize:30,
                  formatter: '{value}ppm\n'+co2,
              },
                axisTick: {            // 坐标轴小标记
                 show:false,
              },
                title: { //标题
                      show: true,
                      textStyle: {
                          color:'#FFFFFF',
                          fontSize: 30, //表盘上的标题文字大小
                          fontWeight: 400,
                          fontFamily: 'PingFangSC'
                      }
                  },
              axisLine: {
                  show:false,
                  lineStyle: {
                      width: 10,
                    
                      color: [
                        
                        
                          [0.3, '#eddd2a'],
                      
                          [1.0, '#ef5728']
                         
                      ]
                  }
              },
              pointer: { // 表盘上的指针
               show: true,
               length: '80%',
               width:5,
               },
           
              splitLine: { // 分隔线
                  show: false
              },
              axisLabel: {
                  show: false
              },
              data: [{
                   name: '二氧化碳',
                  value: data[5],
                 
              }]
      
          }
  
  
  
  
                
  
  
  
          ]
             
             
         };
         
       
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    function kecharts_1() {
    
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('kechart1'));
        var randome81 = airco2data;
    
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
                            color: "#fff",
                            fontSize:'24',
                            fontWeight: 'bold',
                }
            },
    
            grid: {
                left: '8%',
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
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
                name:"浓度:PPM",
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
                    name: 'CO2指标',
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
                                color: '#0080FF'
                            }, {
                                offset: 1,
                                color: '#00FFFF'
                            }]),
                            barBorderRadius: 12,
                            width:10
                        },
    
                        borderColor: '#f0f',
                    },
                    itemStyle: {
                        normal: {
                            color: '#00FFFF',
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
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    function kecharts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('kechart2'));
        var randome81 = airvocdata;
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
                left: '8%',
                top: '5%',
                right: '8%',
                bottom: '5%',
                containLabel: true
            },
    
            xAxis: [{
                // name:"分钟前",
                nameLocation:'center',
                nameGap:23,
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
                name:"浓度:PPB",
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
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
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
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
                barWidth:'30px', //柱子宽度
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#04B486'// 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#01DFD7' // 100% 处的颜色
                        }], false),
                        barBorderRadius: [30, 30, 0, 0],
                        shadowColor: 'rgba(0,255,225,1)',
                        shadowBlur: 4,
                    }
                },
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
        var value = kqdata[1];

        var data = [value,value];
        var dom = document.getElementById("kechart3");
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
             title: {
                 text: (value ).toFixed(0) + '{a|%}',
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
                 y: '35%'
             },
             graphic: [{
                 type: 'group',
                 left: 'center',
                 top: '60%',
                 children: [{
                     type: 'text',
                     z: 100,
                     left: '10',
                     top: 'middle',
                     style: {
                         fill: '#fff',
                         text: '实时湿度',
                         font: '24px Microsoft YaHei',
                         fontWeight: 'bold',
                     }
                 }]
             }],
             series: [{
                 type: 'liquidFill',
                 radius: '80%',
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
             }, ]
         };
         myChart.setOption(option);
         window.addEventListener("resize",function(){
             myChart.resize();
         });
    
    }
    
    function kecharts_4() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('kechart4'));
    var randome81 = airtemdata;
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        }],
        yAxis: [{
            type: 'value',
            min: 5,
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
                    name: '低',
                    yAxis: 23,
                    lineStyle:{
                        color:'#9FE6B8',
                        width:2
                    }
                }, 
                 {
                    name: '高',
                    yAxis: 26,
                    lineStyle:{
                        color:'#FF4500',
                        width:2
                    }
                }],
    
               
            },
        
    
            lineStyle: {
                normal: {
                    color: "#28ffb3", // 线条颜色
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
                    color: "#28ffb3",
    
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
                            color: 'rgba(0,154,120,1)'
                        },
                        {
                            offset: 1,
                            color: 'rgba(0,0,0, 0)'
                        }
                    ], false),
                    shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                    shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                    }
                },
                data: [randome81[0]+10,randome81[1]+10,randome81[2]+10,randome81[3]+10,randome81[4]+10,randome81[5]+10,randome81[0]+10,]
            }, {
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
                        var colorList = ['#0ec1ff', '#10cdff', '#12daff', '#15ebff', '#17f8ff', '#1cfffb', '#1dfff1'];
                        return colorList[params.dataIndex];
                    },
                    barBorderRadius: [30, 30, 0, 0],
                    shadowBlur: 4,
                }
            },
            data: randome81
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
        var randome81 = airpm25data;
        option = {
    
            grid: {
                left: '5%',
                top: '13%',
                right: '5%',
                bottom: '7%',
                containLabel: true
            },
    
            tooltip: {
                trigger: 'axis'
            },
    
            
            xAxis: [{
                // name:"分钟前",
                nameLocation:'center',
                nameGap:23,
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
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
    
            yAxis: {
                name:"μg/m3",
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                min:0,
                max:30,
                axisLabel: {
                    //formatter: '{value} %'
                     show:true,
                      textStyle: {
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
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
                    // color: '#ff9933'
                    color: '#cc0033'
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
                smooth: true,
                data: randome81,
                lineStyle: {
                    normal: {
                        barBorderRadius: 12,
                        width:10
                    },
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
                        name: '超标',
                        yAxis: 15
                    }],
                    lineStyle:{
                        color:'#FF4500',
                        width:2
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
        var data = airchohdata;
    
    
    
        var titlename = ['综合院', '无线院', '会议室', '培训室', '茶水间'];
        var valdata = ['27ppb','27ppb','27ppb','27ppb','27ppb'];
        var myColor = ['#1089E7', '#1011E7', '#56D0E3', '#12a256', '#8B78F6'];
        option = {
            // backgroundColor: '#0e2147',
            grid: {
                left: '5%',
                top: '10%',
                right: '5%',
                bottom: '7%',
                containLabel: true
            },
            xAxis: {
                show: false,
                min:0,
                max:27
            },
            yAxis: [{
                show: true,
                data: titlename,
                inverse: true,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                    formatter: function(value, index) {
                        return [
                            '{lg|' + (index + 1) + '}' + '{title|' + value + '} '
                        ].join('\n')
                    },
                    rich: {
                        lg: {
                            backgroundColor: '#339911',
                            color: '#fff',
                            borderRadius: 15,
                            // padding: 5,
                            align: 'center',
                            width: 15,
                            height: 15
                        },
                    }
                },
        
        
            }, {
                show: true,
                // inverse: true,
                data: valdata,
                axisLabel: {
                    textStyle: {
                        color: '#ffff',
                        fontSize:'25',
                        fontWeight: 'bold',
                    },
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
        
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: data,
                barWidth: 30,
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}',
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
                    }
                },
            }, {
                name: '框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [27, 27, 27, 27, 27],
                barWidth: 40,
                itemStyle: {
                    normal: {
                        color: 'none',
                        borderColor: '#00c1de',
                        borderWidth: 3,
                        barBorderRadius: 15,
                    }
                }
            }, ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    /*
    
    
    //生成从minNum到maxNum的随机数
    */
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
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    