
$(function () {

// airdata();setInterval(function(){airdata();}, 60000);

e111();
e222();

e666();
e777();
e888();setInterval(function(){e888();}, 1500);
e999();setInterval(function(){e999();}, 2000);

function e111() {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('e111'));   

    option = {
    //    backgroundColor: '#0f375f',
       grid: {
           top: "15%",
           bottom: "10%"
       },
       tooltip: {
           trigger: "axis",
           axisPointer: {
               type: "shadow",
               label: {
                   show: true
               }
           }
       },
       legend: {
           data: ["甲醛浓度", "VOC"],
           top: "15%",
           textStyle: {
               fontSize: 24,
               color: "#ffffff"
           }
       },
       xAxis: {
           data: [
               "一月",
               "二月",
               "三月",
               "四月",
               "五月",
               "六月",
               "七月",
               "八月",
               
           ],
           axisLine: {
               show: true //隐藏X轴轴线
           },
           axisTick: {
               show: true //隐藏X轴刻度
           },
           axisLabel: {
               show: true,
               textStyle: {
                    fontSize:24,
                   color: "#ebf8ac" //X轴文字颜色
               }
           },
            axisLine: {
                       lineStyle: {
                           color: '#01FCE3'
                           }
                   },
       },
       yAxis: [
           {
               type: "value",
               name: "PPM",
               nameTextStyle: {
                   color: "#ebf8ac"
               },
               splitLine: {
                   show: false
               },
               splitLine: {
                   show: false
               },
               axisTick: {
                   show: true
               },
               axisLine: {
                   show: true
               },
               axisLabel: {
                   show: true,
                   textStyle: {
                       fontSize:24,
                       color: "#ebf8ac"
                   }
               },
                axisLine: {
                           lineStyle: {
                               color: '#FFFFFF'
                               }
                       },
           },
           {
               type: "value",
               name: "浓度",
               nameTextStyle: {
                   color: "#ebf8ac"
               },
               position: "right",
               splitLine: {
                   show: false
               },
               splitLine: {
                   show: false
               },
               axisTick: {
                   show: false
               },
               axisLine: {
                   show: false
               },
               axisLabel: {
                   show: true,
                   formatter: "{value} %", //右侧Y轴文字显示
                   textStyle: {
                       color: "#ebf8ac",
                       fontSize:24
                   }
               }
           },
           {
               type: "value",
               gridIndex: 0,
               min: 50,
               max: 100,
               splitNumber: 8,
               splitLine: {
                   show: false
               },
               axisLine: {
                   show: false
               },
               axisTick: {
                   show: false
               },
               axisLabel: {
                   show: false
               },
               splitArea: {
                   show: true,
                   areaStyle: {
                       color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
                   }
               }
           }
       ],
       series: [{
               name: "甲醛浓度",
               type: "line",
               yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
               smooth: true, //平滑曲线显示
               showAllSymbol: true, //显示所有图形。
               symbol: "circle", //标记的图形为实心圆
               symbolSize: 10, //标记的大小
               itemStyle: {
                   //折线拐点标志的样式
                   color: "#058cff"
               },
               lineStyle: {
                   color: "#058cff"
               },
               areaStyle:{
                   color: "rgba(5,140,255, 0.2)"
               },
               data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
           },
           {
               name: "VOC",
               type: "bar",
               barWidth: 15,
               itemStyle: {
                   normal: {
                       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                               offset: 0,
                               color: "#00FFE3"
                           },
                           {
                               offset: 1,
                               color: "#4693EC"
                           }
                       ])
                   }
               },
               data: [4.2, 3.8, 4.8, 3.5, 2.9, 2.8, 3, 5]
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

    let scaleData = [
   
        {
            'name': '浑浊度',
            'value': 25
        },
        {
            'name': '透明度',
            'value': 10
        },{
            'name': '气味',
            'value': 35
        },
        {
            'name': '细菌总数',
            'value': 10
        },{
            'name': 'PH值',
            'value': 45
        },
        {
            'name': '微量有害化学元素含量',
            'value': 15
        }
    
    ];
    let colorgraphic = new echarts.graphic.LinearGradient(0, 0, 1, 0, [
        {
            offset: 0,
            color: '#5CF9FE' // 0% 处的颜色
        },
        {
            offset: 0.4,
            color: '#468EFD' // 100% 处的颜色
        },
        {
            offset: 0.6,
            color: '#468EFD' // 100% 处的颜色
        },
        {
            offset: 1,
            color: '#5CF9FE' // 100% 处的颜色
        }
    ]);
    let grid = {
        left: '5px', // 与容器左侧的距离
        right: '5px', // 与容器右侧的距离
        top: '5px', // 与容器顶部的距离
        bottom: '5px', // 与容器底部的距离
    };
    let placeHolderStyle = {
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
    let data = [];
    let color = ['#5CF9FE'];
    let colorSet = [
        [0.91, color],
        [1, '#15337C']
    ];
    let rich = {
        white: {
            fontSize: 50,
            color: '#fff',
            fontWeight: '500',
            padding: [-150, 0, 0, 0]
        },
        bule: {
            fontSize: 120,
            fontFamily: 'DINBold',
            color: '#fff',
            fontWeight: '700',
            padding: [-120, 0, 0, 0],
        },
        radius: {
            width: 350,
            height: 80,
            // lineHeight:80,
            borderWidth: 1,
            borderColor: '#0092F2',
            fontSize: 50,
            color: '#fff',
            backgroundColor: '#1B215B',
            borderRadius: 20,
            textAlign: 'center',
        },
        size: {
            height: 400,
            padding: [100, 0, 0, 0]
        }
    };
    for (var i = 0; i < scaleData.length; i++) {
        data.push({
            value: scaleData[i].value,
            name: scaleData[i].name,
            label: {
                color: '#dfe9e3'
            },
            labelLine: {
                show: true,
                length: 20,
                length2: 40,
                lineStyle: {
                    color: '#053256',
                    width: 2
                }
            },
            itemStyle: {
                normal: {
                    borderWidth:0,
                    shadowBlur: 20,
                    borderColor:'#00f948',
                    shadowColor: '#12b4ff',
    
                }
            }
    
        }, {
            value: 0.5,
            name: '',
            itemStyle: placeHolderStyle
        });
    }
    let seriesObj = [
        { //内圆
                type: 'pie',
                radius: '66%',
                center: ['50%', '50%'],
                z: 0,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.RadialGradient(.5, .5, 1, [{
                                offset: 0,
                                color: 'rgba(17,24,43,0)'
                            },
                            {
                                offset: .5,
                                // color: '#1E2B57'
                                color:'rgba(28,42,91,.6)'
                            },
                            {
                                offset: 1,
                                color: '#141C33',
                                // color:'rgba(17,24,43,0)'
                            }
                        ], false),
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                },
                hoverAnimation: false,
                label: {
                    show: false,
                },
                tooltip: {
                    show: false
                },
                data: [100],
            },
            { //内圆
                type: 'pie',
                radius: '56%',
                center: ['50%', '50%'],
                z: 1,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.RadialGradient(.5, .5, .8, [{
                                offset: 0,
                                color: '#4978EC'
                            },
                            {
                                offset: .5,
                                color: '#1E2B57'
                            },
                            {
                                offset: 1,
                                color: '#141F3D'
                            }
                        ], false),
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    },
                },
                hoverAnimation: false,
                label: {
                    show: false,
                },
                tooltip: {
                    show: false
                },
                data: [100],
            },
            {
                type: 'gauge',
                name: '外层辅助',
                radius: '60%',
                startAngle: '225',
                endAngle: '-134.999',
                splitNumber: '100',
                pointer: {
                    show: false
                },
                detail: {
                    show: false,
                },
                data: [{
                    value: 1
                }],
                // data: [{value: 1, name: 90}],
                title: {
                    show: true,
                    offsetCenter: [0, 30],
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 20,
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [1, '#00FFFF']
                        ],
                        width: 2,
                        opacity: 1
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        color: '#051932',
                        width: 0,
                        type: 'solid',
                    },
                },
                axisLabel: {
                    show: false
                }
            }, 
            {
                type: 'gauge',
                name: '外层辅助',
                radius: '45%',
                startAngle: '225',
                endAngle: '-134.999',
                splitNumber: '100',
                pointer: {
                    show: false
                },
                detail: {
                    show: false,
                },
                data: [{
                    value: 1
                }],
                // data: [{value: 1, name: 90}],
                title: {
                    show: true,
                    offsetCenter: [0, 30],
                    textStyle: {
                        color: '#fff',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontFamily: '微软雅黑',
                        fontSize: 20,
                    }
                },
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: [
                            [1, '#00FFFF']
                        ],
                        width: 2,
                        opacity: 1
                    }
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: true,
                    length: 20,
                    lineStyle: {
                        color: '#051932',
                        width: 0,
                        type: 'solid',
                    },
                },
                axisLabel: {
                    show: false
                }
            },  
            
            {
        name: '',
        type: 'pie',
        clockWise: false,
        radius: ['50%', '56%'],
        hoverAnimation: false,
        itemStyle: {
            normal: {
                label: {
                    show: true,
                    position: 'outside',
                    color: '#f4fff7',
                    formatter: function(params) {
                        var percent = 0;
                        var total = 0;
                        for (var i = 0; i < scaleData.length; i++) {
                            total += scaleData[i].value;
                        }
                        percent = ((params.value / total) * 100).toFixed(0);
                        if (params.name !== '') {
                            return params.name + '\n' + '' + percent + '%';
                        } else {
                            return '';
                        }
                    },
                    textStyle: {
                        fontSize: 24
                    },
        
                },
    
    
            }
        },
        data: data
    }];
    option = {
        // backgroundColor: '#04243E',
        color: color,
        grid: grid,
        tooltip: {
            show: false
        },
        legend: {
            show: false
        },
        series: seriesObj
    };
    

    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function e666() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('e666'));

    var legendData = ['办公区', '会议区']; //图例

    var indicator = [
        {
            text: '色温',
            max: 6000
        },{
            text: '稳定度',
            max: 5000
        },{
            text: '台面光强',
            max: 5000
        },{
            text: '炫光控制',
            max: 5000,
            //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
        },{
            text: '透光率',
            max: 5000
        },{
            text: '节能效比',
            max: 5000
        }
    ];

    var dataArr = [{
            value: [4300, 4700, 3600, 3900, 3800, 4200],
            name: legendData[0],
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#4A99FF',
                        // shadowColor: '#4A99FF',
                        // shadowBlur: 10,
                    },
                    shadowColor: '#4A99FF',
                    shadowBlur: 10,
                },
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#4A99FF'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#4A99FF'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
        },
        {
            value: [3200, 3000, 3400, 2000, 3900, 2000],
            name: legendData[1],
            itemStyle: {
                normal: {
                    lineStyle: {
                        color: '#4BFFFC',
                        // shadowColor: '#4BFFFC',
                        // shadowBlur: 10,
                    },
                    shadowColor: '#4BFFFC',
                    shadowBlur: 10,
                },
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#4BFFFC'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#4BFFFC'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
        }
    ];

    var colorArr = ['#4A99FF', '#4BFFFC']; //颜色
    
    option = {
        // backgroundColor: '#101736',
        color: colorArr,
        legend: {
            orient: 'vertical',
            icon: 'circle', //图例形状
            data: legendData,
            bottom: 35,
            right: 40,
            itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
            itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
            itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
            textStyle: {
                fontSize: 24,
                color: '#00E4FF',
            },
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize: 24
                },
            },
            indicator: indicator,
            splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
                show: true,
                areaStyle: { // 分隔区域的样式设置。
                    color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
                }
            },
            axisLine: { //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#153269'
                }
            },
            splitLine: {
                lineStyle: {
                    color: '#113865', // 分隔线颜色
                    width: 1, // 分隔线线宽
                }
            },
        },
        series: [{
            type: 'radar',
            symbolSize: 8,
            // symbol: 'angle',
            data: dataArr
        }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function e777() {

    var d = (function (){
        var res1 = [];
        var res2 = [];
        var res3 = [];
        var res4 = [];
        var len = 13;
        while (len--) {
            res1.push(randomNum(2, 4)*10);
            res2.push(randomNum(5, 7)*10);
            res3.push(randomNum(1, 2)*10);
            res4.push(randomNum(7, 10)*10);
        }
        return [res1,res2,res3,res4];
    })()


    function echart7(data) {

        var myChart7 = echarts.init(document.getElementById('e777'));
        
        var fontColor = '#FAFAFA';
        
        option ={
            grid: {
                left: '5%',
                right: '5%',
                top:'15%',
                bottom: '5',
                containLabel: true
            },
            tooltip : {
                show: true,
                trigger: 'item'
            },
            legend: {
                show:true,
                x:'center',
                top:'5%',
                // y:'35',
                icon: 'stack',
                itemWidth:10,
                itemHeight:10,
                textStyle: {
                    color: '#FFFFFF',
                        fontSize:'24',
                    },
                data:['健身步数达标人数','站立时长达标人数','健身房使用次数','本月最佳步数/100']
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    axisLabel:{
                        fontSize: 24,
                        color: fontColor
                    },
                    axisLine:{
                        show:true,
                        lineStyle:{
                            
                            color:'#397cbc'
                        }
                    },
                    axisTick:{
                        show:false,
                    },  
                    splitLine:{
                        show:false,
                        lineStyle:{
                            color:'#195384'
                        }
                    },
                    data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    name : '',
                    min:0,
                    max:110,
                    axisLabel : {
                        formatter: '{value}',
                        textStyle:{
                            fontSize: 24,
                            color:'#FAFAFA'
                        }
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#27b4c2'
                        }
                    },
                    axisTick:{
                        show:false,
                    },
                    splitLine:{
                        show:true,
                        lineStyle:{
                            color:'#11366e'
                        }
                    }
                }
            ],
            series : [
                {
                    name:'健身步数达标人数',
                    type:'line',
                    // stack: '总量',
                    symbol:'circle',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color:'#0092f6',
                            lineStyle: {
                                color: "#0092f6",
                                width:1
                            },
                            areaStyle: { 
                                //color: '#94C9EC'
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(7,44,90,0.3)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(0,146,246,0.9)'
                                }]),
                            }
                        }
                    },
                    markPoint:{
                        itemStyle:{
                            normal:{
                                color:'red'
                            }
                        }
                    },
                    data:data[0]
                },
                {
                    name:'站立时长达标人数',
                    type:'line',
                    // stack: '总量',
                    symbol:'circle',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color:'#00d4c7',
                            lineStyle: {
                                color: "#00d4c7",
                                width:1
                            },
                            areaStyle: { 
                                //color: '#94C9EC'
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(7,44,90,0.3)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(0,212,199,0.9)'
                                }]),
                            }
                        }
                    },
                    data:data[1]
                },
                {
                    name:'健身房使用次数',
                    type:'line',
                    stack: '总量',
                    symbol:'circle',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: '#aecb56',
                            lineStyle: {
                                color: "#aecb56",
                                width:1
                            },
                            areaStyle: { 
                                //color: '#94C9EC'
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(7,44,90,0.3)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(114,144,89,0.9)'
                                }]),
                            }
                        }
                    },
                    data:data[2]
                },
                {
                    name:'本月最佳步数/100',
                    type:'line',
                    // stack: '总量',
                    symbol:'circle',
                    symbolSize: 8,
                    itemStyle: {
                        normal: {
                            color: '#3A44FB',
                            lineStyle: {
                                color: "#3A44FB",
                                width:1
                            },
                            areaStyle: { 
                                //color: '#94C9EC'
                                color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                    offset: 0,
                                    color: 'rgba(7,46,101,0.3)'
                                }, {
                                    offset: 1,
                                    color: 'rgba(0,166,246,0.9)'
                                }]),
                            },
                        }
                    },
                    data:data[3]
                }
            ]
        };
        
        myChart7.setOption(option);
        window.addEventListener("resize",function(){
            myChart7.resize();
        });
    }

    function  qidong() {
        var data = d ;

        for(var i=0; i<4; i++) {
            data[i].shift();
            if (i == 0) {
                data[i].push(randomNum(2, 4)*10);
            } 
            else if (i == 1) {
                data[i].push(randomNum(5, 7)*10);
            } else if (i == 2) {
                data[i].push(randomNum(1, 2)*10);
            } else {
                data[i].push(randomNum(7, 10)*10);
            }
        }
        d = data;
        echart7(d);
    }

    qidong();setInterval(function(){qidong();}, 2500);
}
    
function e888() {

    var myChart = echarts.init(document.getElementById('e888'));

    var randome81 = [randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10)];
    var randome82 = [randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10)];
    var randome83 = [randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10), randomNum(1,10)];

    var option = {
    // backgroundColor:'#0d235e',

        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },

        grid: {
            left: '5%',
            right: '5%',
            bottom: '5',
            top:'15%',
            containLabel: true
        },

        legend: {
            data: ['听觉舒适度', '热舒适度', '嗅觉舒适度'],
            //    right: 10,
            //    top:12,
            textStyle: {
                color: "#FAFAFA",
                fontSize: 24,
            },
            itemWidth: 12,
            itemHeight: 10,
            // itemGap: 35
        },

        xAxis: {
            type: 'category',
            data: ['周一','周二','周三','周四','周五','周六','周日'],
            axisLine: {
            lineStyle: {
                color: 'white'

            }
            },
            axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
                fontFamily: 'Microsoft YaHei',
                fontSize: 24,
            }
            },
        },

        yAxis: {
            type: 'value',
            max:'10',
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
                textStyle:{
                    fontSize:24
                }
            }
        },

        series: [{
            name: '听觉舒适度',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#7beef7'
                }, {
                    offset: 1,
                    color: '#46b2d5'
                }]),
                barBorderRadius: 12,
            },
            },
            data: randome81,
        },
        {
            name: '热舒适度',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#248ff7'
                }, {
                    offset: 1,
                    color: '#6851f1'
                }]),
                barBorderRadius: 11,
            }
            
            },
            data: randome82
        },
        {
            name: '嗅觉舒适度',
            type: 'bar',
            barWidth: '15%',
            itemStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#c165e3'
                }, {
                    offset: 1,
                    color: '#602dae'
                }]),
            barBorderRadius: 11,
            }
            },
            data: randome83
        }]
    };
   
    // var app = {
    //     currentIndex: -1,
    //   };
    //   setInterval(function () {
    //     var dataLen = option.series[0].data.length;

    //     // 取消之前高亮的图形
    //     myChart.dispatchAction({
    //       type: 'downplay',
    //       seriesIndex: 0,
    //       dataIndex: app.currentIndex
    //     });
    //     app.currentIndex = (app.currentIndex + 1) % dataLen;
    //     //console.log(app.currentIndex);
    //     // 高亮当前图形
    //     myChart.dispatchAction({
    //       type: 'highlight',
    //       seriesIndex: 0,
    //       dataIndex: app.currentIndex,
    //     });
    //     // 显示 tooltip
    //     myChart.dispatchAction({
    //       type: 'showTip',
    //       seriesIndex: 0,
    //       dataIndex: app.currentIndex
    //     });


    //   }, 1000);


    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function e999() {

    var myChart = echarts.init(document.getElementById('e999'));

    var randomdata = [randomNum(10,100), randomNum(0,20), randomNum(0,10), randomNum(0,5), randomNum(0,15)];

    var radius = ['45%', '40%'];

    option = {
        
        series: [
            {
                name: '办公区人数',
                type: 'pie',
                radius: radius,
                center: ['15%', '25%'],
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
                     name: '办公区人数',
                        label: {
                            normal: {
                                formatter: '办公区人数',
                                textStyle: {
                                    color: '#EFFBFB',
                                    fontSize: 24,
                                }
                            }
                        }
                }, 
                {
                    value: randomdata[0],
                    name: '%',
                        label: {
                            normal: {
                                formatter: '\n\n{c0}',
                                textStyle: {
                                    color: '#FDFF5C',
                                    fontSize: 24,
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
                                    fontSize: 24,
    
                                }
                            }
                        }
                }],
            },

            {
                name: '会议区人数',
                type: 'pie',
                radius: radius,
                center: ['50%', '25%'],
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
                    value: 75,
                     name: '会议区人数',
                        label: {
                            normal: {
                                formatter: '会议区人数',
                                textStyle: {
                                    color: '#FFFFFF',
                                    fontSize: 24,
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
                                    fontSize: 24,
    
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
                center: ['85%', '25%'],
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
                                    fontSize: 24
    
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
                                    fontSize: 24,
    
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
            // 下一行3个
            {
                name: '已开窗户数',
                type: 'pie',
                radius: radius,
                center: ['15%', '75%'],
                startAngle: 225,
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                label: {
                        normal: {
                            position: 'center',
                            formatter: '已开窗户数',
                            textStyle: {
                                color: '#ffff',
                                fontSize: 24
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
                    name: '已开窗户数'
                },
                {
                    value: randomdata[3],
                    name: '%',
                    label: { 
                        formatter: '\n\n{c0}',
                        textStyle: {
                            color: '#58FA58',
                            fontSize: 24,
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
                center: ['50%', '75%'],
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
                                    fontSize: 24
    
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
                                    fontSize: 24
    
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
                name: '门窗状态',
                type: 'pie',
                radius: radius,
                center: ['85%', '75%'],
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
                    value: 75,
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
                                formatter: '门窗状态',
                                textStyle: {
                                    color: '#f8f9fc',
                                    fontSize: 24,
                                    }
                            }
                        }
                }, {
                    value: 0,
                    name: '%',
                        label: {
                            normal: {
                                formatter: '\n\n正常',
                                textStyle: {
                                    color: '#BDBDBD',
                                    fontSize: 24,
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



		
		
		


		









