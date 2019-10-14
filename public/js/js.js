
$(function () {

// airdata();setInterval(function(){airdata();}, 60000);
e666();
e777();
e888();setInterval(function(){e888();}, 1500);
e999();setInterval(function(){e999();}, 2000);

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
                fontSize: 14,
                color: '#00E4FF',
            },
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    fontSize: 16
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

    var myChart = echarts.init(document.getElementById('e777'));
    
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
                        fontSize:'12',
                    },
                data:['健身步数达标人数','站立时长达标人数','健身房使用次数','本月最佳步数']
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    axisLabel:{
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
                    max:1000,
                    axisLabel : {
                        formatter: '{value}',
                        textStyle:{
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
                    stack: '总量',
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
                    data:[120, 132, 101, 134, 90, 230, 210, 182, 191, 234, 260, 280]
                },
                {
                    name:'站立时长达标人数',
                    type:'line',
                    stack: '总量',
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
                    data:[220, 182, 191, 210, 230, 270, 270,201, 154, 140, 240, 250]
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
                    data:[150, 232, 201, 154, 190, 180, 210,150, 182, 201, 154, 190]
                },
                {
                    name:'本月最佳步数',
                    type:'line',
                    stack: '总量',
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
                            }
                        }
                    },
                    data:[150, 232, 201, 154, 190, 180, 210,150, 182, 201, 154, 190]
                }
            ]
        };
    

    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
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
                fontSize: 16,
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
                fontFamily: 'Microsoft YaHei'
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
            axisLabel: {}
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



		
		
		


		









