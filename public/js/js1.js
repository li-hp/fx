
$(function () {

airdata();setInterval(function(){airdata();}, 1000);

function airdata(){
    $.ajax({
        url:'/airdatashow',
        type:'get',
        success: function (result) {
            echarts_1(result[0]);
            echarts_2(result[1]);
            echarts_3(result[4]);
            echarts_4(result[5]);
            echarts_5(result[2]);
            // echarts_6(result[3]);
        },
        error : function() {
        }
    })
}

function echarts_1(resultdata) {

    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));   

    option = {
        tooltip: {
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#00B2EE'
                }
            },
        formatter: '{a0}: {c0}',
        },

        legend: {
        top:'0%',
            data:['CO2指标'],
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
                    splitNumber: 15,
                    textStyle: {
                         color: "rgba(255,255,255,.6)",
                        fontSize: '12',
                    },
                },
        }],

        yAxis: [{
            name:"浓度:PPM",
            nameTextStyle:{
                color:  "rgba(255,255,255,.6)",
                fontSize: 12,
            },
            type: 'value',
            axisTick: {show: false},
            min:600,
            max:2000,
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

        series: [
            {
            name: 'CO2指标',
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    color: '#00B2EE',
                    width: 2
                }
            },
            itemStyle: {
                    normal: {
                        color: '#00B2EE',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 12
                    }
                },
            data: resultdata,
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
                        yAxis: 2000
                    }, {
                        name: '优',
                        yAxis: 1000
                    }],
                    lineStyle:{
                        color:'#8E8E8E',
                    },
            },
        },
            {
                type: 'effectScatter',
                data:resultdata,
                symbolSize:20,
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: true,
                itemStyle: {
                normal: {
                color: '#00B2EE',
                shadowBlur: 20,
                shadowColor: '#333'
                }
            },
                zlevel: 1
            },
        ],
    };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function echarts_2(resultdata) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart2'));

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
                    splitNumber: 15,
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
            max:750,
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
            data: resultdata,
            barWidth:'50%', //柱子宽度
            itemStyle: {
                normal: {
                    color:'#00B2EE',
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

function echarts_3(resultdata) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart3'));
    var fuhao = "%";
    option = {
        grid: {
            left: '5%',
            top:'1px',
            right: '15%',
            bottom: '2%',
        containLabel: true
        },

        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },

        series: [
            {
                name:'湿度',
                type:'gauge',
                min:0,
                max:99,
                splitNumber:5,
                center : ['50%', '55%'],
                radius: '90%',
                axisLine: {            // 坐标轴线
                    lineStyle: {       // 属性lineStyle控制线条样式
                        color: [[0.3, '#ff4500'],[0.75, 'lime'],[1,'#436EEE']],
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
                    textStyle: {       
                        // 表盘中央符号的设置，其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 20,
                        fontStyle: 'italic',
                        color: '#fff',
                        shadowColor : '#fff', //默认透明
                        shadowBlur: 10
                    }
                },
                detail : {
                    show:false,
                    backgroundColor: 'rgba(255,255,255,.04)',
                    borderWidth: 1,
                    offsetCenter: [0, '50%'],       // x, y，单位px
                    textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                        fontWeight: 'bolder',
                        fontSize: 15,
                        color: '#FCFCFC'
                    }
                },
                data:[{value: resultdata}]
            }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function echarts_4(resultdata) {
    // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('echart4'));
option = {

    calculable: true,
    
    series: [
        {
            name:'漏斗图表',
            type:'funnel',
            left: '15%',
            top:' 10%',
            //x2: 80,
            bottom: '5%',
            width: '70%',
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: '0%',
            maxSize: '100%',
            sort: 'descending',
            gap: 2,
          
            label: {
                show: true,
                position: 'inside',
                fontSize: 15
                
            },
            color:['#00B2E1','#083A03','#DF3A01','#CCCC33','#660099'],
            labelLine: {
                length: 1,
                lineStyle: {
                    width: 1,
                    type: 'solid'
                }
            },
            itemStyle: {
               
                borderWidth: 1
            },
            emphasis: {
                label: {
                    fontSize: 50
                },
            
            },
          
            data: [
               
                {value: 20, name: '油：:20-30g\n盐：:6g'},
                {value: 40, name: '奶类和奶制品：300g\n大豆及坚果：:30-50g'},
                {value: 60, name: '畜禽肉类：50-75g\n鱼虾类：50-100g\n蛋类：25-50g'},
                {value: 80, name: '蔬果：300-500g\n水果：200-400g'},
                {value: 100, name: '水：1200ml\n谷类，豆类，薯类：250-400g'}
            ]
             
        },
        
    ]
};

    
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function echarts_5(resultdata) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart5'));

           

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}    

function echarts_6(resultdata) {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart6'));

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
        
        series: [
        {
            name: '甲醛浓度',
            type: 'bar',
            data: resultdata,
            barWidth:'50%', //柱子宽度
            barGap:"-100%",
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
            zlevel: 1
        },

        {
            name: '甲醛浓度',
            type: 'bar',
            data: [60, 60, 60, 60, 60],
            barWidth:'50%', //柱子宽度
            barGap:"-100%",
            itemStyle: {
                normal: {
                    color:'#F5D0A9',
                    opacity: 1,
                    barBorderRadius: 5,
                }
            },
        }],

        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function echarts_7() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart7')); 
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)",
        position:function(p){   //其中p为当前鼠标的位置
                return [p[0] + 10, p[1] - 10];
            }
        },
        legend: {    
        itemWidth: 20,
        itemHeight: 10,
        itemGap: 12,
        bottom: '3%',
        data:['10岁以下','20-29岁','30-39岁','40-49岁'],
        textStyle: {
            color: 'rgba(255,255,255,.5)',
            fontSize:'12',
            }
        },
        series: [
            {
                name:'年龄分布',
                type:'pie',
                center: ['50%', '42%'],
                radius: ['40%', '60%'],
                    color: ['#FFFF11','#CCCC33', '#FFCC00', '#EE9611'],	
                label: {show:false},
                labelLine: {show:false},
                data:[
                    {value:1, name:'10岁以下'},
                    {value:4, name:'20-29岁'},
                    {value:2, name:'30-39岁'},
                    {value:2, name:'40-49岁'},
                ]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

})



		
		
		


		









