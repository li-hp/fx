
$(function () {
ky111();
ky222();
ky333();
ky444();
ky666();
ky777();
ky888();
  
setTimeout(function(){
    ky111();
    ky222();
    ky333();
    ky444();
    ky666();
    ky777();
    ky888();

},5000); 
    


    
setInterval(function(){
    ky111();
    ky222();
    ky333();
    ky444();
    ky666();
    ky777();
    ky888();
      
    

},360000); 
    


    function ky111() {
    
    
    
        var myChart = echarts.init(document.getElementById('ky111'));

      

option = {
   
    legend: {
        orient: 'vertical',
        x: '75%',
        y:'32%',
        data:['健康','不适','发烧','咳嗽','生病'],
        icon: 'circle',
        textStyle: {
            color: '#fff',
            fontSize: 30,
            fontFamily: 'PingFangSC',
            fontWeight: 400
        }
    },
    series: [
        {
            type:'pie',
            radius: ['0', '60%'],
             selectedMode: 'single',
            selectedOffset: 30,
            clockwise: true,
            itemStyle: {
                borderColor: '#04192b',
                borderWidth: 1
            },
            label: {
                normal: {
                    show: true,
                    formatter: (params)=>{
                        console.log(params);
                        return '{color'+params.dataIndex+'| '+params.percent+'%}'
                    },
                    rich: {
                        color0: {
                            fontSize: 30,
                            color: '#EBE806',
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        },
                        color1: {
                            fontSize: 30,
                            color: '#FF5624',
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        },
                        color2: {
                            fontSize: 30,
                            color: '#5EA6FE',
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        },
                        color3: {
                            fontSize: 30,
                            color: '#37FFF9',
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        },
                        color4: {
                            fontSize: 30,
                            color: '#db8cf3',
                            fontWeight: 400,
                            fontFamily: 'PingFangSC'
                        }
                    }
                }
            },
            labelLine: {
                length: 24  
            },
            emphasis: {
                label: {
                    show: true
                }    
            },
            data:[
                {
                    value:100, name:'健康',
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 550,
                            y: 440,
                            r: 120,
                            colorStops: [{
                                offset: 0, color: 'rgba(235,232,6, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#EBE806' // 100% 处的颜色
                            }],
                            global: true // 缺省为 false
                        }
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#EBE806'
                        }
                    }
                },
                {
                    value:30, name:'不适',
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 550,
                            y: 440,
                            r: 120,
                            colorStops: [{
                                offset: 0, color: '#e16656' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#FF5624' // 100% 处的颜色
                            }],
                            global: true // 缺省为 false
                        }
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#FF5624'
                        }
                    }
                },
                {
                    value:30, name:'咳嗽',
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 550,
                            y: 440,
                            r: 120,
                            colorStops: [{
                                offset: 0, color: 'rgba(94,166,254, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#5EA6FE' // 100% 处的颜色
                            }],
                            global: true // 缺省为 false
                        }
                    },
                    labelLine: {
                        lineStyle: {
                            color: '#5EA6FE'
                        }
                    }
                },
                {
                    value:30, name:'发烧',
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 550,
                            y: 440,
                            r: 120,
                            colorStops: [{
                                offset: 0, color: 'rgba(0,222,215, 0.2)' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#37FFF9' // 100% 处的颜色
                            }],
                            global: true // 缺省为 false
                        }
                    },
                    
                    labelLine: {
                        lineStyle: {
                            color: '#37FFF9'
                        }
                    }
                },
                     {
                    value:30, name:'生病',
                    itemStyle: {
                        color: {
                            type: 'radial',
                            x: 550,
                            y: 440,
                            r: 120,
                            colorStops: [{
                                offset: 0, color: '#db8cf336' // 0% 处的颜色
                            }, {
                                offset: 1, color: '#db8cf3' // 100% 处的颜色
                            }],
                            global: true // 缺省为 false
                        }
                    },
                    
                    labelLine: {
                        lineStyle: {
                            color: '#db8cf3f5'
                        }
                    }
                },
                
            ]
        }
    ]
};

        
myChart.setOption(option);
window.addEventListener("resize",function(){
    myChart.resize();
});


}




  
function ky222() {
    
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('ky222'));
    var data1 = [20,10,15,10,12,15,17];
    var data2= [5,7,5,8,6,2,1]

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
            data:['人数'],
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

        yAxis: [
            {
            name:"人数 ",
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            axisTick: {show: false},
            min:0,
            max:30,
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
        }
    ],
    legend: {
        orient: 'vertical',
        x: '75%',
        y:'10%',
        data:['未戴口罩','体温异常'],
        icon: 'circle',
        textStyle: {
            color: '#fff',
            fontSize: 30,
            fontFamily: 'PingFangSC',
            fontWeight: 400
        }
    },

        series: [
            
            {
                name: '未戴口罩',
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
                data: data1,
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
        },
        {
            name: '体温异常',
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
                        color: '#bd9b28'
                    }, {
                        offset: 1,
                        color: '#c3b732'
                    }]),
                    barBorderRadius: 12,
                    width:10
                },

                borderColor: '#f0f',
            },
            itemStyle: {
                normal: {
                    color: '#e1d441',
                    borderColor: 'rgba(221, 220, 107, .1)',
                    borderWidth: 30
                }
            },
            data: data2,
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
    }
    
    
    
    ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}


        
        




function ky333() {
    
    
    
    var myChart7 = echarts.init(document.getElementById('ky333'));

   

option = {
title: {
    text: '消毒记录',
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
           




function ky444() {
    
    
    
    var myChart7 = echarts.init(document.getElementById('ky444'));

   

option = {
title: {
    text: '消毒记录',
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
           




  
function ky666() {
    
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('ky666'));
    var data1 = [2000,2100,2300,2350,2500,2750,2890];
    var data2= [500,700,1000,1100,1300,1500,2000];
    var data3= [1400,1400,1300,1000,300,500,400];

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
            data:['人数'],
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

        yAxis: [
            {
            name:"人数 ",
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            axisTick: {show: false},
            min:0,
            max:3000,
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
        }
    ],
    legend: {
        orient: 'vertical',
        x: '90%',
        y:'10%',
        data:['购入','消耗','剩余'],
        icon: 'circle',
        textStyle: {
            color: '#fff',
            fontSize: 30,
            fontFamily: 'PingFangSC',
            fontWeight: 400
        }
    },

        series: [
            
            {
                name: '购入',
                type: 'line',
                smooth: false,
                symbol: 'circle',
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        // color: "#53fdfe", // 线条颜色
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#fbec46c7'
                        }, {
                            offset: 1,
                            color: '#f8e93fc7'
                        }]),
                        barBorderRadius: 3,
                        width:5
                    },

                    borderColor: '#f0f',
                },
                itemStyle: {
                    normal: {
                        color: '#efdf34c7',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 0
                    }
                },
                data: data1,
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
                        yAxis: 20000
                    }, {
                        name: '优',
                        yAxis: 10000
                    }],
                    lineStyle:{
                        color:'#8E8E8E',
                    },
                },
        },
         
            {
                name: '消耗',
                type: 'line',
                smooth: false,
                symbol: 'circle',
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbolSize: 10,
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
                        barBorderRadius: 3,
                        width:5
                    },

                    borderColor: '#f0f',
                },
                itemStyle: {
                    normal: {
                        color: '#00FFFF',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 0
                    }
                },
                data: data2,
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
                        yAxis: 20000
                    }, {
                        name: '优',
                        yAxis: 10000
                    }],
                    lineStyle:{
                        color:'#8E8E8E',
                    },
                },
        },
        {
            name: '剩余',
            type: 'line',
            smooth: false,
            symbol: 'circle',
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    // color: "#53fdfe", // 线条颜色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#b95555'
                    }, {
                        offset: 1,
                        color: '#e75050c7'
                    }]),
                    barBorderRadius: 3,
                    width:5
                },

                borderColor: '#f0f',
            },
            itemStyle: {
                normal: {
                    color: '#b63e3ec7',
                    borderColor: 'rgba(221, 220, 107, .1)',
                    borderWidth: 0
                }
            },
            data: data3,
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
                    yAxis: 20000
                }, {
                    name: '优',
                    yAxis: 10000
                }],
                lineStyle:{
                    color:'#8E8E8E',
                },
            },
    }
    
    
    
    ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}





  
function ky777() {
    
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('ky777'));
    var data1 = [2000,2100,2300,2350,2500,2750,2890];
    var data2= [500,700,1000,1100,1300,1500,2000];
    var data3= [1400,1400,1300,1000,300,500,400];

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
            data:['人数'],
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

        yAxis: [
            {
            name:"人数 ",
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            axisTick: {show: false},
            min:0,
            max:3000,
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
        }
    ],
    legend: {
        orient: 'vertical',
        x: '90%',
        y:'10%',
        data:['购入','消耗','剩余'],
        icon: 'circle',
        textStyle: {
            color: '#fff',
            fontSize: 30,
            fontFamily: 'PingFangSC',
            fontWeight: 400
        }
    },

        series: [
            
            {
                name: '购入',
                type: 'line',
                smooth: false,
                symbol: 'circle',
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbolSize: 10,
                lineStyle: {
                    normal: {
                        // color: "#53fdfe", // 线条颜色
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#fbec46c7'
                        }, {
                            offset: 1,
                            color: '#f8e93fc7'
                        }]),
                        barBorderRadius: 3,
                        width:5
                    },

                    borderColor: '#f0f',
                },
                itemStyle: {
                    normal: {
                        color: '#efdf34c7',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 0
                    }
                },
                data: data1,
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
                        yAxis: 20000
                    }, {
                        name: '优',
                        yAxis: 10000
                    }],
                    lineStyle:{
                        color:'#8E8E8E',
                    },
                },
        },
         
            {
                name: '消耗',
                type: 'line',
                smooth: false,
                symbol: 'circle',
                showAllSymbol: true,
                // symbol: 'image://./static/images/guang-circle.png',
                symbolSize: 10,
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
                        barBorderRadius: 3,
                        width:5
                    },

                    borderColor: '#f0f',
                },
                itemStyle: {
                    normal: {
                        color: '#00FFFF',
                        borderColor: 'rgba(221, 220, 107, .1)',
                        borderWidth: 0
                    }
                },
                data: data2,
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
                        yAxis: 20000
                    }, {
                        name: '优',
                        yAxis: 10000
                    }],
                    lineStyle:{
                        color:'#8E8E8E',
                    },
                },
        },
        {
            name: '剩余',
            type: 'line',
            smooth: false,
            symbol: 'circle',
            showAllSymbol: true,
            // symbol: 'image://./static/images/guang-circle.png',
            symbolSize: 10,
            lineStyle: {
                normal: {
                    // color: "#53fdfe", // 线条颜色
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#b95555'
                    }, {
                        offset: 1,
                        color: '#e75050c7'
                    }]),
                    barBorderRadius: 3,
                    width:5
                },

                borderColor: '#f0f',
            },
            itemStyle: {
                normal: {
                    color: '#b63e3ec7',
                    borderColor: 'rgba(221, 220, 107, .1)',
                    borderWidth: 0
                }
            },
            data: data3,
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
                    yAxis: 20000
                }, {
                    name: '优',
                    yAxis: 10000
                }],
                lineStyle:{
                    color:'#8E8E8E',
                },
            },
    }
    
    
    
    ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}



    
function ky888() {

    var myChart = echarts.init(document.getElementById('ky888'));

    var randomdata = renyuandata;

    var radius = ['50%', '55%'];

    option = {

        series: [
            {
                name: '办公区人数',
                type: 'pie',
                radius: radius,
                center: ['15%', '50%'],
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
                                formatter: '\n{c0}',
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
                center: ['50%', '50%'],
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
                center: ['85%', '50%'],
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
    //         // 下一行3个
    //         {
    //             name: '已开窗户数',
    //             type: 'pie',
    //             radius: radius,
    //             center: ['15%', '75%'],
    //             startAngle: 225,
    //             labelLine: {
    //                 normal: {
    //                     show: false
    //                 }
    //             },
    //             label: {
    //                     normal: {
    //                         position: 'center',
    //                         formatter: '已开窗户数',
    //                         textStyle: {
    //                             color: '#ffff',
    //                             fontSize: 24
    //                         }
    //                     }
    //                 },
    //             data: [
    //                 {
    //                 value: 75,
    //                 "itemStyle": {
    //                     "normal": {
    //                         "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                             "offset": 0,
    //                             "color": '#088A08'
    //                         }, {
    //                             "offset": 1,
    //                             "color": '#58FA58'
    //                         }]),
    //                     }
    //                 },
    //                 name: '已开窗户数'
    //             },
    //             {
    //                 value: randomdata[3],
    //                 name: '%',
    //                 label: {
    //                     formatter: '\n\n{c0}',
    //                     textStyle: {
    //                         color: '#58FA58',
    //                         fontSize: 24,
    //                         },
    //                 }
    //             },
    //             {
    //                 value: 0,
    //                 name: '%',
    //                     label: {
    //                         normal: {
    //                             formatter: '',
    //                             textStyle: {
    //                                 color: '#FAFAFA',
    //                                 fontSize: 24,

    //                             }
    //                         }
    //                     }
    //             }
    //         ]
    //         },

    //         {
    //             name: '已开门数',
    //             type: 'pie',
    //             radius: radius,
    //             center: ['50%', '75%'],
    //             startAngle: 225,
    //             labelLine: {
    //                 normal: {
    //                     show: false
    //                 }
    //             },
    //             label: {
    //                     normal: {
    //                         position: 'center'
    //                     }
    //                 },
    //             data: [{
    //                 value: 75,
    //                 "itemStyle": {
    //                     "normal": {
    //                         "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                             "offset": 0,
    //                             "color": '#e74a3b'
    //                         }, {
    //                             "offset": 1,
    //                             "color": '#FF00FF'
    //                         }]),
    //                     }
    //                 },
    //                  name: '已开门数',
    //                     label: {
    //                         normal: {
    //                             formatter: '已开门数',
    //                             textStyle: {
    //                                 color: '#ffff',
    //                                 fontSize: 24

    //                             }
    //                         }
    //                     }
    //             }, {
    //                 value: randomdata[4],
    //                 name: '%',
    //                     label: {
    //                         normal: {
    //                             formatter: '\n\n{c0}',
    //                             textStyle: {
    //                                 color: '#e74a3b',
    //                                 fontSize: 24

    //                             }
    //                         }
    //                     }
    //             },
    //             {
    //                 value: 0,
    //                 name: '%',
    //                     label: {
    //                         normal: {
    //                             formatter: '',
    //                             textStyle: {
    //                                 color: '#ffff',
    //                                 fontSize: 24

    //                             }
    //                         }
    //                     }
    //             }]
    //         },

    //         {
    //             name: '门窗状态',
    //             type: 'pie',
    //             radius: radius,
    //             center: ['85%', '75%'],
    //             startAngle: 225,
    //             labelLine: {
    //                 normal: {
    //                     show: false
    //                 }
    //             },
    //             label: {
    //                     normal: {
    //                         position: 'center'
    //                     }
    //                 },
    //             data: [
    //                 {
    //                 value: 75,
    //                 "itemStyle": {
    //                     "normal": {
    //                         "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    //                             "offset": 0,
    //                             "color": '#BDBDBD'
    //                         }, {
    //                             "offset": 1,
    //                             "color": '#6E6E6E'
    //                         }]),
    //                     }
    //                 },

    //                     label: {
    //                         normal: {
    //                             formatter: '门窗状态',
    //                             textStyle: {
    //                                 color: '#f8f9fc',
    //                                 fontSize: 24,
    //                                 }
    //                         }
    //                     }
    //             }, {
    //                 value: randomdata[5],
    //                 name: '%',
    //                     label: {
    //                         normal: {
    //                             formatter: '\n\n{c0}',
    //                             textStyle: {
    //                                 color: '#BDBDBD',
    //                                 fontSize: 24,
    //                                 }
    //                         }
    //                     }
    //             },
    //             {
    //                 value: 0,
    //                 name: '%',
    //                     label: {
    //                         normal: {
    //                             formatter: '',
    //                             textStyle: {
    //                                 color: '#fff',
    //                                 fontSize: 24,
    //                             }
    //                         }
    //                     }
    //             }]
    //         },
        ]
     };

    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}










    
    })