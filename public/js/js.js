
$(function () {

// airdata();setInterval(function(){airdata();}, 60000);
e666();
e777();
e888();
function e666() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('e666'));
    option = {
        tooltip: {},
        legend: {
            data: ['综合院','无线院','培训室','会议室'],
            textStyle: {
                color: '#FFFFFF',
                    fontSize:'12',
                }
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#FFFFFF',
                    backgroundColor: '#000000',
                    borderRadius: 3,
                    padding: [3, 5]
               }
            },
            indicator: [
               { name: '色温', max: 6500},
               { name: '稳定度', max: 16000},
               { name: '台面光强', max: 30000},
               { name: '透光率', max: 38000},
               { name: '炫光控制', max: 52000},
               { name: '节能效比', max: 25000}
            ]
        },
        color:['#00B2EE','#088A08','#D7DF01','#DF3A01'],
        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : [
                {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '综合院'
                },
                {
                    value : [4300, 11100, 24440, 35000, 50000, 1900],
                    name : '无线院'
                },
                {
                    value : [4300, 10000, 26660, 35000, 50000, 9800],
                    name : '培训室'
                },
                {
                    value : [4300, 10000, 28000, 2200, 5040, 3000],
                    name : '会议室'
                },

            ]
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
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['站立时长达标人数', '健身房使用次数', '运动步数达标人数'],
            textStyle: {
                color: '#FFFFFF',
                    fontSize:'12',
                },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'value',
                nameTextStyle:{
                    color:  "#FFF",
                    fontSize: 12,
                },
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    width: 1,
                    type: "solid"
                },
                axisLabel:  {
                    interval: 0,
                   // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                         color: "#FFF",
                        fontSize: '12',
                    },
                },
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                data : ['周一','周二','周三','周四','周五','周六','周日'],
                axisLabel:  {
                    interval: 0,
                   // rotate:50,
                    show: true,
                    splitNumber: 15,
                    textStyle: {
                         color: "#FFF",
                        fontSize: '12',
                    },
                },
            }
        ],
        color:['#00B2EE','#088A08','#D7DF01','#DF3A01'],
        series : [
            {
                name:'站立时长达标人数',
                type:'bar',
                label: {
                    normal: {
                        show: true,
                        position: 'inside'
                    }
                },
                data:[200, 170, 240, 244, 200, 220, 210]
            },
            {
                name:'健身房使用次数',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true
                    }
                },
                data:[320, 302, 341, 374, 390, 450, 420]
            },
            {
                name:'运动步数达标人数',
                type:'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'left'
                    }
                },
                data:[-120, -132, -101, -134, -190, -230, -210]
            }
        ]};
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}

function e888() {

    var myChart = echarts.init(document.getElementById('e888'));

    option = {
        legend: {
            data: ['声音舒适性','热舒适性','嗅觉舒适性'],
            textStyle: {
                color: '#FFFFFF',
                    fontSize:'12',
                }
        },
        angleAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            z: 10,
            axisLabel:{
                color:'#FFF',
            }
        },
        radiusAxis: {
        },
        polar: {
        },
        series: [{
            type: 'bar',
            data: [1, 2, 3, 4, 3, 5, 1],
            coordinateSystem: 'polar',
            name: '声音舒适性',
            stack: 'a',
        }, {
            type: 'bar',
            data: [2, 4, 6, 1, 3, 2, 1],
            coordinateSystem: 'polar',
            name: '热舒适性',
            stack: 'a'
        }, {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 5],
            coordinateSystem: 'polar',
            name: '嗅觉舒适性',
            stack: 'a'
        }],
        color:['#00B2EE','#088A08','#D7DF01','#DF3A01']
    };
    
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}
})



		
		
		


		









