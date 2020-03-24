
$(function () {


    // ------------------------------------------------------------------------echart图表区------------------------------------------------------------//
    
    
    
    // airdata();setInterval(function(){airdata();}, 60000);
    
    e111();setInterval(function(){e111();}, 1500);
    e222();setInterval(function(){e222();},  5000);
    e333();
     e444();
    e555();
  e666();
    e777();
    e888();setInterval(function(){e888();}, 3500);
    e999();
    // e999();setInterval(function(){e999();},  2500);
    
  
    
    
    
    
    
    
    
    function e111() {
    
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('e111'));
      
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
                 max: 40,
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
                        
                        
                        
                          [0.375,'#eddd2a'],
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
         
       
     
     
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    function e222() {
    
        var myChart = echarts.init(document.getElementById('e222'));
    
       var wdata=waterdata;
          var ph;
        var hzd;
        var ddl;
         var yl;

            if (wdata[0]<=1.0) 
            { hzd='达标';}

            else
            {    hzd='不达标';}

        


            if (6.5<=wdata[1]&&wdata[1]<=8.5) 

            { ph='达标';
            }

            else
            {
            ph='不达标';
            }
            


            if(wdata[2]<2000)  
            {
            ddl='达标';
            }

            else
            {
            ddl='不达标';
            }

        


            if(0.3<=wdata[3]&&wdata[3]<=0.5) 
            {
            yl='达标';
            }

            else {
            yl='不达标';
            }















       
        option = {
            tooltip: {
                show: false
            },
            legend: {
                x: "center",
                data: ["", ""]
            },
            //////自定义文字
            graphic: [
                {
                   type: 'group',
                   left: 50,
                   bottom: 0,
                   children: [
              


                       {
                         
                        type: 'text',
                        z: 100,
                        left: 'center',
                        top: 'middle',
                        style: {
                            fill: '#fff',
                            text: [
                                '浑浊度: '+wdata[0],
                                'PH值: '+wdata[1],
                                '电导率: '+wdata[2],
                                '余氯: '+wdata[3],
                                
                            ].join('\n'),
                            font: '30px Microsoft YaHei',
                            lineHeight: 24,
    
                           }
                       }
                   ]
               }
           ],
       



























            animation: false,
            series: [{
                categories: [{
                    name: '',
                    itemStyle: {
                        normal: {
                            color: "#009800",
                        }
                    }
                }, {
                    name: '',
                    itemStyle: {
                        normal: {
                            color: "#4592FF",
                        }
                    }
                }],
                type: 'graph',
                layout: 'force',
                symbol: "circle",
                symbolSize: 120,
               
                roam: false, //禁止用鼠标滚轮缩小放大效果
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [0, 10],
                // 连接线上的文字
                focusNodeAdjacency: true, //划过只显示对应关系
                edgeLabel: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 20
                        },
                        formatter: "{c}"
                    }
                },
                categories: [{
                    name: '',
                    itemStyle: {
                        normal: {
                            color: "#009800",
                        }
                    }
                }, {
                    name: '',
                    itemStyle: {
                        normal: {
                            color: "#4592FF",
                        }
                    }
                }],
                lineStyle: {
                    normal: {
                        opacity: 1,
                        width: 2,
                        curveness: 0
                    }
                },
                // 圆圈内的文字
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 35
                        },
                    }
                },
                force: {
                    repulsion: 4000
                },
                
                data: [
                    {
                    name: '',
                   symbol: 'image:// /img/water.png',
                   "symbolSize": 200,
                    itemStyle: {
                        normal: {
                           
                            
                         
                        }
                    },
        
                }, 
                
                {
                    name: '浑浊度\n'+wdata[0]+'\n'+hzd,
                    category: 1,
                    itemStyle: {
                        normal: {
                            color: '#235',
                             label: {
                              
                                textStyle: {
                                    
                                    color: '#f90'
                                   
                                },

                             }
                        },
                        emphasis: {
                            color: "rgba(255,25,255,0.2)"
                            
                        }
                    }
                }, 
                {
                    name: 'PH\n'+wdata[1]+'\n'+ddl,
                    category: 1,
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,0.2)',
                             label: {
                              
                                textStyle: {
                                    fontSize:35,
                                    color: '#f90'
                                   
                                }
                             }
                        },
                        emphasis: {
                            color: "#000"
                        }
                    }
                }, 
                {
                    name: '余氯\n'+wdata[3]+'\n'+yl,
                    category: 1,
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,0.2)',
                             label: {
                              
                                textStyle: {
                                    fontSize:35,
                                    color: '#f90'
                                   
                                }
                             }
                        },
                        emphasis: {
                            color: "#000"
                        }
                    }
                }, 
                {
                    name: '电导率\n'+wdata[2]+'\n'+ddl,
                    category: 1,
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,0.2)',
                             label: {
                              
                                textStyle: {
                                    fontSize:600
                                   
                                   
                                }
                             }
                        },
                        emphasis: {
                            color: "#000"
                        }
                    }
                }
                
                
                
                
                
                
                
                ],
                
                
                links: [{
                    source: 0,
                    target: 5,
                    value: "",
                    lineStyle: {
                        normal: {
                            color: '#38f',
                            curveness: 1// 线的弯曲度 0-1之间 越大则歪曲度更大
                           
                        }
                    },
                    label: {
                        normal: {
                            textStyle: {
                                color: '#07ac72'
                            }
                        }
                    }
                }, {
                    source: 0,
                    target: 1,
                    value: ""
                }, {
                    source: 0,
                    target: 2,
                    value: ""
                }, {
                    source: 0,
                    target: 3,
                    value: ""
                }, {
                    source: 0,
                    target: 4,
                    value: ""
                }, ]
            }]
        };
    
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    function e333() {
      
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('e333'));
        var inlight=inlightdata1;
        var outlight=outlightdata;
        option = {
            // backgroundColor: "#404A59",
            color: ['#ffd285', '#ffd285', '#ef5728'],
        
            title: [{
                text: '光强变化曲线',
                left: '5%',
                top: '6%',
                textStyle: {
                    color: '#fff',
                    fontSize:25,
                    fontWeight:'bold'
                }
            }, {
                text: '实时光强（LUX）',
                left: '85%',
                top: '7%',
                textAlign: 'center',
                textStyle: {
                    color: '#fff',
                    fontSize:25,
                    fontWeight:'bold'
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
                    fontSize:'25',
                    fontWeight: 'bold',
                },
                data: ['室内', '室外']
            },
            grid: {
                left: '6%',
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
                        color: '#ef5728'
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
                data:timeday,
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
                            color:'#ef5728',
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
                center: ['85%', '33%'],
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
                center: ['85%', '72%'],
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
                            color: '#ef5728'
                        }
                    },
                    label: {
                        normal: {
                            formatter: gdata4+"\n\n室外光强",
                            textStyle: {
                                color: '#ef5728',
                                fontSize:'24',
                                fontWeight: 'bold',
        
                            }
                        }
                    }
                
                }]
            }]
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


 

    function e444() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('e444'));
   
            var data=shushidata;

            var voicedata=data[0].value;
            if (voicedata<60) data[0].name="舒适";
            else  data[0].name="不适";

            
            var airdata=data[1].value;
            if (airdata<60) data[1].name="舒适";
            else  data[1].name="不适";

                
            var humdata=data[2].value;
            if (humdata>40&&humdata<60) data[2].name="舒适";
            else  data[2].name="一般";

            var temdata=data[3].value;
            if (temdata>23&&temdata<26) data[3].name="舒适";
            else  data[3].name="一般";





















        var titleArr= [], seriesArr=[];
        colors=[['#af4', '#dfeaff'],['#ff8c37', '#ffdcc3'],['#fd6f97', '#fed4e0'],['#ffc257', '#ffedcc'], ['#a181fc', '#e3d9fe']]
        data.forEach(function(item, index){
                titleArr.push(
                    {
                        text:item.name,
                        left: index%2*30 + 62 +'%',
                        top:parseInt(index/2)*50+15+'%',
                       
                      
                        textStyle: {
                            fontWeight: 'normal',
                            fontSize: '35',
                            fontWeight: 'bold',
                            color: colors[index][0],
                            textAlign: 'center',
                        },
                    }        
                );
                seriesArr.push(
                    {
                        name: item.name,
                        type: 'pie',
                        clockWise: false,
                        radius: [80, 90],
                        itemStyle:  {
                            normal: {
                                color: colors[index][0],
                                shadowColor: colors[index][0],
                                shadowBlur: 0,
                                label: {
                                    show: false
                                },
                                labelLine: {
                                    show: false
                                },
                            }
                        },
                        hoverAnimation: false,
                        center: [index%2*30 + 50 +'%', parseInt(index/2)*50+20+'%'],
                        data: [{
                            value: item.value,
                            name:item.name,
                            label: {
                                normal: {
                                    formatter: function(params){
                                        params.fuhao=['db','','%','℃']
                                        params.leibie=['噪声','空气质量','湿度','温度']
                                        return params.value+params.fuhao[index]+'\n'+params.leibie[index];
                                    },
                                    position: 'center',
                                    show: true, 
                                    textStyle: {
                                        fontSize: '35',
                                        fontWeight: 'normal',
                                        lineHeight: '50',
                                        color: colors[index][0]
                                    }
                                }
                            },
                        }, {
                         
                            name: 'invisible',
                            itemStyle: {
                                normal: {
                                    color: colors[index][1]
                                },
                                emphasis: {
                                    color: colors[index][1]
                                }
                            }
                        }]
                    }    
                )
            });
                    
        option = {
            // backgroundColor: "#fff",
            grid: {
                top: '8%',
                left: '5%',
                right: '5%',
                bottom: '8%',
                containLabel: true,
            },
            title:titleArr,
            series: seriesArr,
            tooltip:{
                show:false
            }

  
           
    
    
    
    
    
    
    
    
    
    
    
    







            
        }
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }


    
  

























    
    
    function e555() {
        var myChart = echarts.init(document.getElementById('e555'));
    
        var dataBJ = [
            [20,55,56,0.46,18,6,8,1," 会议区"],
            [10,30,56,0.46,18,6,8,1," 休闲区"],
        
        ];
        
        var dataGZ = [
            [1,90,56,0.46,18,6,8,1," 办公区"],
            [15,70,56,0.46,18,6,8,1," 办公区2"],
    
        ];
        
        var dataSH = [
            [15,45,56,0.46,18,6,8,1," 阳台"],
            [25,45,56,0.46,18,6,8,1," 茶水间"],
    
        ];
        
        var schema = [
            {name: '区域x', index: 0, text: ''},
            {name: '区域t', index: 1, text: ''},
            {name: '温度', index: 2, text: '温度'},
            {name: '湿度', index: 3, text: '湿度'},
            {name: 'PM2.5', index: 4, text: 'PM2.5'},
            {name: 'CO2', index: 5, text: '二氧化碳（CO2）'},
            {name: 'VOC', index: 6, text: '可挥发化合物（VOC）'},
            {name: '甲醛', index: 7, text: '甲醛（CHOH）'},
            {name: '区域t', index: 8, text: ''},
        ];
        
        
        var itemStyle = {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        };
        
        option = {
            // backgroundColor: '#404a59',
            color: [
                '#dd4444', '#fec42c', '#80F1BE'
            ],
            // legend: {
            //     top: 10,
            //     data: ['北京', '上海', '广州'],
            //     textStyle: {
            //         color: '#fff',
            //         fontSize: 16
            //     }
            // },
            grid: {
                left: '5%',
                right: 150,
                top: '10%',
                bottom: '5%'
            },
            tooltip: {
                padding: 60,
                fontSize:300,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,
                formatter: function (obj) {
                    var value = obj.value;
                    return '<div style=" font-size: 50px;padding-bottom: 30px;margin-bottom: 0px;line-height:60px">'
                        +  ' ' + value[8] + ' ：'+ '<br>'
                                         
                        + schema[2].text + '：' + value[2] + '<br>'
                        + schema[3].text + '：' + value[3] + '<br>'
                        + schema[4].text + '：' + value[4] + '<br>'
                        + schema[5].text + '：' + value[5] + '<br>'
                        + schema[6].text + '：' + value[6] + '<br>'
                        + schema[7].text + '：' + value[7] + '<br>'
                        + '</div>';
                       
                }
            },
            xAxis: {
                type: 'value',
                name: '日期',
                nameGap: 16,
                nameTextStyle: {
                    color: '#fff',
                    fontSize: 14
                },
                max: 31,
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#eee'
                    }
                }
            },
            yAxis: {
                type: 'value',
                name: 'AQI指数',
                nameLocation: 'end',
                nameGap: 20,
                nameTextStyle: {
                    color: '#fff',
                    fontSize: 16
                },
                axisLine: {
                    lineStyle: {
                        color: '#eee'
                    }
                },
                splitLine: {
                    show: false
                }
            },
            visualMap: [
                {
                   
                    min: 800,
                    max: 800,
                   
                    inRange: {
                        symbolSize: [100, 100]
                    },
                    outOfRange: {
                        symbolSize: [100, 100],
                        color: ['rgba(255,255,255,.2)']
                    },
                    
                },
                
            ],
            series: [
                {
                    name: '北京',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: dataBJ
                },
                {
                    name: '上海',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: dataSH
                },
                {
                    name: '广州',
                    type: 'scatter',
                    itemStyle: itemStyle,
                    data: dataGZ
                }
            ]
        };
    
    
    
    
    
    
    
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    


    }




    function e666() {
    
    
    
        var myChart = echarts.init(document.getElementById('e666'));

        const colorBlueDark = 'rgb(26, 214,214)';
        const colorBlueDark_50 = 'rgba(26, 214,214, 0.5)';
        const colorBlueLight = 'rgb(0, 72, 195)';
        const colorBlueLight_50 = 'rgb(0, 72, 195, 0.5)';
        const colorGreenDark = 'rgba(34,139,34,1)';
        const colorGreenLight = 'rgba(127,250,0,1)';
        const colorYellow = 'rgba(255,255,0,1)';
        const colorOrange = 'rgba(255,128,0,1)';
        const colorRed = 'rgba(255,0,0,1)';
        const colorGrayDark = '#999';
        const colorWhite = '#fff';
        const colorBlack = '#fff';
        const colorBlack_40 = 'rgba(0,0,0,0.4)';
        
        colors=[['#7bbfd4', '#c8447e','#598c90','#dfba2b','#ef5728'],['#dfba2b', '#598c90','#7bbfd4','#dfba2b','#ef5728'],['#7bbfd4', '#598c90','#e8b5de','#dfba2b','#ef5728'],['#ff8c37', '#ffdcc3'],['#fd6f97', '#fed4e0'],['#ffc257', '#ffedcc'], ['#a181fc', '#e3d9fe']]
        function get_multi_pie_option(settings) {
            let defaultSetting = {
                title: '',//'Default Title',
                title_fontsize: 30,
                subtitle_fontsize: 25,
                legend_fontSize: 25,
        
                grid: {
                    left: 0,
                    right: 0,
                    
                },
        
                // Data in as an Array
                pie_data: {
                    '综合评分': {
                        '60-':10,
                        '60-70':10,
                        '70-80':50,
                        '80-90':25,
                        '90+':5
                        
                    },
                    '用餐情况':{
                        '早餐': 89,
                        '午餐': 238,
                        '晚餐':200
                    }
                
                },
                // pie_name: ['维度1', '维度2', '维度3'],
                // pie_data_label: ['上周', '本周'],
            };
            $.extend(defaultSetting, settings);
        
            defaultSetting.pie_name = Object.keys(defaultSetting.pie_data)
            // defaultSetting.pie_data_label = Array.from({})
            const one_pie_width = 100 / defaultSetting.pie_name.length;
            //defaultSetting.pie_data.length = Object.keys(defaultSetting.pie_data).length;
            console.log(defaultSetting);
            
            let option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                title: [
                    {
                        text: '用餐人数：52',
                        top:'10%',
                        left:'80%',
                        textStyle: {
                            color: colorBlack,
                            fontSize: defaultSetting.title_fontsize,
                            fontWeight:400,
                        },
                    },
                ].concat(Array.from({length: defaultSetting.pie_name.length}, (v, i) => {
                    // console.log(one_pie_width);
                    let _title = {
                        text: defaultSetting.pie_name[i],
                        top: '85%',
                        left: one_pie_width * i+20 + '%',
                        textStyle: {
                            color: colorBlack,
                            fontSize: 32,
                            fontWeight:"400"
                        },
                    }
                    return _title;
                })),
              
                grid: {
                    left: '0%',
                    top: 'center',
                    right: '0%',
                    containLabel: true
                },
                series: [
                    // {
                    //     tooltip: {
                    //         trigger: 'item',
                    //         formatter: "{b} : {c} ({d}%)"
                    //     },
                    //     type: 'pie',
                    //     center: ['15%', '50%'],
                    //     radius: ['20%', '39%'],
                    //     avoidLabelOverlap: false,
                    //     label: {
                    //         normal: {
                    //             show: true,
                    //             position: 'inside',
                    //             formatter: '{b},{d}%'
                    //         },
                    //         emphasis: {
                    //             show: true,
                    //             textStyle: {
                    //                 fontSize: '20',
                    //                 fontWeight: 'bold'
                    //             }
                    //         }
                    //     },
                    //     labelLine: {
                    //         normal: {
                    //             show: false
                    //         }
                    //     },
                    //     data: Array.from(defaultSetting.pie_data['维度1'].length = Object.keys(defaultSetting.pie_data['维度1']).length, (v,i)=>{
                    //         return {
                    //             value: defaultSetting.pie_data['维度1'].v,
                    //             name: i,
                    //         };
                    //     }),
                    // },
                ].concat(Array.from({length:defaultSetting.pie_name.length}, (v,i)=>{
                            console.log("pie_data",defaultSetting.pie_data);
                            console.log("v,i",v,i);
                            let cur_pie_name = defaultSetting.pie_name[i];
                            let cur_data = defaultSetting.pie_data[cur_pie_name];
                            let cur_data_keys = Object.keys(cur_data);
                            
                            console.log("cur_data",cur_data);
                            return {
                                tooltip: {
                                    trigger: 'item',
                                    formatter: "{b} : {c} ({d}%)"
                                },
                                type: 'pie',
                                color:colors[i],
                                center: [one_pie_width*(i+0.5)+'%', '50%'],
                                radius: 55+'%',//'33%',//['33%', '0%'],//33%=100%/3
                                avoidLabelOverlap: false,
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'outside',//'outside',//'inside',
                                        formatter: "{b} : {c} \n({d}%)",
                                           textStyle: {
                                            fontSize: '25',
                                            fontWeight: 'bold',
                                          
                                        }
                                    },
                                    emphasis: {
                                        show: true,
                                        textStyle: {
                                            fontSize: '35',
                                            fontWeight: 'bold'
                                        }
                                    }
                                },
                                labelLine: {
                                    normal: {
                                        show: false,//true,//set true if use "position: 'outside',"
                                    }
                                },
                                data: Array.from({length:cur_data_keys.length}, (v,idx)=>{
                                    let cur_data_key = cur_data_keys[idx];
                                    console.log("-------");
                                    console.log("idx:",idx, "cur_data_key:",cur_data_key,'cur_data',cur_data);
                                    return {
                                        value: cur_data[cur_data_key],
                                        name: cur_data_key,
                                    };
                                }),
                            };
                        })),
            };
        
            console.log(option);
            return option;
        }
        
        option = get_multi_pie_option(null);
        


        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    


    }






    function e777() {
    
    
    
        var myChart = echarts.init(document.getElementById('e777'));
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
                    text: '实时健身人数：'+data3,
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

    
    function e888() {
    
    
    
            var myChart7 = echarts.init(document.getElementById('e888'));
    
           
    
    option = {
        title: {
            text: '消毒记录',
            left:"4%",
            textStyle: {
                color: "#fff",
                fontSize:30
            },
            
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params){
                let result = params[0].name + '<br />' + 
                            + '<br />' +
                             params[1].seriesName + ': ' + params[1].data.name;
                return result;
            }
        },
        grid: [{
            left: '3%',
            right: '3%',
            bottom: '3%',
            containLabel: true,
        }],
        xAxis: [{
            type: 'value',
            min: 0.1,
            max: 1.0,
            axisLabel: {show: false},
            axisLine: {show: false},
            axisTick: {show: false},
            splitLine: {show: false},
        }],
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLine: {show: false},
            axisTick: {show: false},
            data: [1, 2, 3, 4, 5, 6, 7]
        }],
        series: [
            {
                name: '告警',
                stack: '1',
                type: 'bar',
                color:'block',
                label: {
                    show: true,
                    position: 'insideLeft',
                    fontSize:30,
                    
                    formatter: function(params){
                        return params.data.name
                    }
                },
                
                data: [
                    {value: 0.6, name: quyu[0]},
                    {value: 0.6, name: quyu[1]},
                    {value: 0.6, name: quyu[2]},
                    {value: 0.6, name: quyu[3]},
                    {value: 0.6, name: quyu[4]},
                    {value: 0.6, name: quyu[5]},
                    {value: 0.6, name: quyu[6]},
                 
                ]
            },  {
                name: '告警',
                stack: '1',
                type: 'bar',
                color:'block',
                label: {
                    show: true,
                    position: 'insideLeft',
                    fontSize:30,
                    
                    formatter: function(params){
                        return params.data.name
                    }
                },
                
                data: [
                    {value: 0.2, name: xiaodudata[0]},
                    {value: 0.2, name: xiaodudata[1]},
                    {value: 0.2, name: xiaodudata[2]},
                    {value: 0.2, name: xiaodudata[3]},
                    {value: 0.2, name: xiaodudata[4]},
                    {value: 0.2, name: xiaodudata[5]},
                    {value: 0.2, name: xiaodudata[6]},
                 
                ]
            },{
                name: '已拖延时间',
                stack: '1',
                type: 'bar',
                color:"#333",
                label: {
                    show: true,
                    position: 'inside',
                    fontSize:30,
            
                    formatter: function(params){
                        return params.data.name
                    }
                },
                data: [
                    {value: .4, name: xiaodutime[0]},
                    {value: .4, name: xiaodutime[1]},
                    {value: .4, name: xiaodutime[2]},
                    {value: .4, name: xiaodutime[3]},
                    {value: .4, name: xiaodutime[4]},
                    {value: .4, name: xiaodutime[5]},
                    {value: .4, name: xiaodutime[6]},
                  
                ]
            }
        ]
    };
    myChart7.setOption(option);
    window.addEventListener("resize",function(){
        myChart7.resize();
    });
    }
    
         
    
    function e999() {

        var myChart = echarts.init(document.getElementById('e999'));
    
        var randomdata = renyuandata;
    
        var radius = ['40%', '45%'];
    
        option = {
    
            series: [
                {
                    name: '办公人数',
                    type: 'pie',
                    radius: radius,
                    center: ['15%', '28%'],
                    startAngle: 225,
                    color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#FDFF5C'
                    }, {
                        offset: 1,
                        color: '#FFDB5C'
                    }]), "transparent"],
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                            normal: {
                                position: 'center'
                            }
                        },

              
            
                    data: [{
                        value: 75,
                         name: '办公人数',
                            label: {
                                
                                normal: {
                                    formatter: '办公人数',
                                    textStyle: {
                                        color: '#EFFBFB',
                                        fontSize: 28,
                                    }
                                }
                            }
                    },
                    {
                        value: randomdata[0],
                        name: '%',
                            label: {
                                normal: {
                                    formatter: '\n{c0}',
                                    textStyle: {
                                        color: '#FDFF5C',
                                        fontSize: 28,
                                    }
                                }
                            }
                    },
                    {
                        value: 0,
                        name: '%',
                            label: {
                                normal: {
                                    formatter: '',
                                    textStyle: {
                                        color: '#EFFBFB',
                                        fontSize: 28,
    
                                    }
                                }
                            }
                    }],
                },
    
                {
                    name: '会议人数',
                    type: 'pie',
                    radius: radius,
                    center: ['50%', '28%'],
                    startAngle: 225,
                    color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#9FE6B8'
                    }, {
                        offset: 1,
                        color: '#32C5E9'
                    }]), "transparent"],
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                            normal: {
                                position: 'center'
                            }
                        },
                    data: [{
                        value: 90,
                         name: '会议人数',
                            label: {
                                normal: {
                                    formatter: '会议人数',
                                    textStyle: {
                                        color: '#FFFFFF',
                                        fontSize: 28,
                                    }
                                }
                            }
                    },
                    {
                        value: randomdata[1],
                        name: '%',
                            label: {
                                normal: {
                                    formatter: '\n\n{c0}',
                                    textStyle: {
                                        color: '#9FE6B8',
                                        fontSize: 28,
    
                                    }
                                }
                            }
                    },
                    {
                        value: 10,
                        name: '%',
                            label: {
                                normal: {
                                    formatter: '',
                                    textStyle: {
                                        color: '#FFFFFF',
                                        fontSize: 24,
    
                                    }
                                }
                            }
                    }]
                },
    
                {
                    name: '来访人数',
                    type: 'pie',
                    radius: radius,
                    center: ['85%', '28%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                            normal: {
                                position: 'center'
                            }
                        },
                    data: [{
                        value: 75,
                        "itemStyle": {
                            "normal": {
                                "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    "offset": 0,
                                    "color": '#FF9F7F'
                                }, {
                                    "offset": 1,
                                    "color": '#FB7293'
                                }]),
                            }
                        },
                         name: '来访人数',
                            label: {
                                normal: {
                                    formatter: '来访人数',
                                    textStyle: {
                                        color: '#ffff',
                                        fontSize: 28
    
                                    }
                                }
                            }
                    }, {
                        value: randomdata[2],
                        name: '%',
                            label: {
                                normal: {
                                    formatter: '\n\n{c0}',
                                    textStyle: {
                                        color: '#FF9F7F',
                                        fontSize: 28,
    
                                    }
                                }
                            }
                    },
                    {
                        value: 2,
                        name: '%',
                            label: {
                                normal: {
                                    formatter: '',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 24,
    
                                    }
                                }
                            }
                    }]
                },
                // 下一行3个
                {
                    name: '已开窗数',
                    type: 'pie',
                    radius: radius,
                    center: ['15%', '85%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                            normal: {
                                position: 'center',
                                formatter: '已开窗数',
                                textStyle: {
                                    color: '#ffff',
                                    fontSize: 28
                                }
                            }
                        },
                    data: [
                        {
                        value: 75,
                        "itemStyle": {
                            "normal": {
                                "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    "offset": 0,
                                    "color": '#088A08'
                                }, {
                                    "offset": 1,
                                    "color": '#58FA58'
                                }]),
                            }
                        },
                        name: '已开窗数'
                    },
                    {
                        value: randomdata[3],
                        name: '%',
                        label: {
                            formatter: '\n\n{c0}',
                            textStyle: {
                                color: '#58FA58',
                                fontSize: 28,
                                },
                        }
                    },
                    {
                        value: 0,
                        name: '%',
                            label: {
                                normal: {
                                    formatter: '',
                                    textStyle: {
                                        color: '#FAFAFA',
                                        fontSize: 24,
    
                                    }
                                }
                            }
                    }
                ]
                },
    
                {
                    name: '已开门数',
                    type: 'pie',
                    radius: radius,
                    center: ['50%', '85%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                            normal: {
                                position: 'center'
                            }
                        },
                    data: [{
                        value: 75,
                        "itemStyle": {
                            "normal": {
                                "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    "offset": 0,
                                    "color": '#e74a3b'
                                }, {
                                    "offset": 1,
                                    "color": '#FF00FF'
                                }]),
                            }
                        },
                         name: '已开门数',
                            label: {
                                normal: {
                                    formatter: '已开门数',
                                    textStyle: {
                                        color: '#ffff',
                                        fontSize: 28
    
                                    }
                                }
                            }
                    }, {
                        value: randomdata[4],
                        name: '%',
                            label: {
                                normal: {
                                    formatter: '\n\n{c0}',
                                    textStyle: {
                                        color: '#e74a3b',
                                        fontSize: 28
    
                                    }
                                }
                            }
                    },
                    {
                        value: 0,
                        name: '%',
                            label: {
                                normal: {
                                    formatter: '',
                                    textStyle: {
                                        color: '#ffff',
                                        fontSize: 24
    
                                    }
                                }
                            }
                    }]
                },
    
                {
                    name: '请假人数',
                    type: 'pie',
                    radius: radius,
                    center: ['85%', '85%'],
                    startAngle: 225,
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    label: {
                            normal: {
                                position: 'center'
                            }
                        },
                    data: [
                        {
                        value: 15,
                        "itemStyle": {
                            "normal": {
                                "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    "offset": 0,
                                    "color": '#BDBDBD'
                                }, {
                                    "offset": 1,
                                    "color": '#6E6E6E'
                                }]),
                            }
                        },
    
                            label: {
                                normal: {
                                    formatter: '请假人数',
                                    textStyle: {
                                        color: '#f8f9fc',
                                        fontSize: 28,
                                        }
                                }
                            }
                    }, {
                        value: randomdata[5],
                        name: '%',
                            label: {
                                normal: {
                                    formatter: '\n\n{c0}',
                                    textStyle: {
                                        color: '#BDBDBD',
                                        fontSize: 28,
                                        }
                                }
                            }
                    },
                    {
                        value: 0,
                        name: '%',
                            label: {
                                normal: {
                                    formatter: '',
                                    textStyle: {
                                        color: '#fff',
                                        fontSize: 24,
                                    }
                                }
                            }
                    }]
                },
            ]
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
    