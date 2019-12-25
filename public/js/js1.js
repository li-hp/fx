
$(function () {

kongqi8();

function konggqi8() {

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


})



		
		
		


		









