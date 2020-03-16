$(function(){

  sz111();
  sz222();
  sz333();
  sz444();
  sz666();
 

    function sz111() {

        var myChart = echarts.init(document.getElementById('sz111'));

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
                            font: '30px Microsoft YaHei'
    
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

    function sz222() {

        var myChart = echarts.init(document.getElementById('sz222'));

     
    var randome81 = [randomNum(5,9),randomNum(5,9),randomNum(5,9),randomNum(5,9),randomNum(5,9),randomNum(5,9),randomNum(5,9)];
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
            name:"ph",
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            min:3,
            max:10,
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
                    name: '最佳',
                    yAxis: 7.5
                }, {
                    name: '良',
                    yAxis: 8.5
                }, {
                    name: '良',
                    yAxis: 6.5
                }],
                lineStyle:{
                    color:'#8E8E8E',
                },
            },
        }],
    };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function sz333() {

        var myChart = echarts.init(document.getElementById('sz333'));

        var randome81 = [randomNum(22,25),randomNum(22,25),randomNum(22,25),randomNum(22,25),randomNum(22,25),randomNum(22,29),randomNum(22,29),randomNum(22,29)];
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        }],
        yAxis: [{
            name:'浑浊度（NTU)',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 2,
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
                    name: '超标',
                    yAxis: 1,
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
                data: hunzhuodu
            }]
    };
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }




    function sz444() {
      
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('sz444'));
        var inlight=gdata1;
        var outlight=gdata2;
        option = {
            // backgroundColor: "#404A59",
            color: ['#ffd285', '#ff733f', '#ec4863'],
        
            title: [{
                text: '余氯变化曲线',
                left: '25%',
                top: '6%',
                textStyle: {
                    color: '#fff',
                    fontSize:24
                }
            }, {
                text: '余氯（mg/L）',
                left: '10%',
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
                show:false,
                top: '7%',
                textStyle: {
                    color: '#ffd285',
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                data: ['室内', '室外']
            },
            grid: {
                left: '30%',
                right: '8%',
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
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
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
               max: 0.8,
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
                            name: '高',
                            yAxis: 0.5
                        },  {
                            name: '低',
                            yAxis: 0.3
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
                data: yulv,
                lineStyle: {
                    normal: {
                        barBorderRadius: 12,
                        width:5
                    },
                },

            }, 
            
          
            


            {
                type: 'pie',
                center: ['15%', '50%'],
                radius: ['35%', '40%'],
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
                            formatter: waterdata[3]+'mg/L\n\n余氯',
                            textStyle: {
                                color: '#ffd285',
                                fontSize:'24',
                                fontWeight: 'bold',
                            }
                        }
                    }
                }

               ]
            }
           ]
        }
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function sz666() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('sz666'));
   
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
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
        }],
        yAxis: [{
            name:'电导率（ps/cm³)',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 2500,
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
            data: diandaolv
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