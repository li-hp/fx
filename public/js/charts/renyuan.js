
    $(function () {
    rr111();
   rr222();
   rr333();
   rr444();
   rr666();
   rr777();
   rr888();


   setTimeout(function(){

    rr111();
    rr222();
    rr333();
    rr444();
    rr666();
    rr777();
    rr888();
},5000); 
    




   setInterval(function(){
    rr111();
    rr222();
    rr333();
    rr444();
    rr666();
    rr777();
    rr888();
 

},360000); 
    


    function rr111() {

        var myChart = echarts.init(document.getElementById('rr111'));
    
        var randomdata = renyuandata;
    
        var radius = ['40%', '45%'];
    
        option = {
    
            series: [
                {
                    name: '办公人数',
                    type: 'pie',
                    radius: radius,
                    center: ['18%', '28%'],
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
                    center: ['53%', '28%'],
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
                    center: ['18%', '85%'],
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
                    center: ['53%', '85%'],
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






    function rr222() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('rr222'));
   
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
            data: timeday
        }],
        yAxis: [{
            name:'办公人数(人)',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 240,
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
            data: bangongrenshu
        }]
    };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    


    function rr333() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('rr333'));
   
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
            data: timeweek
        }],
        yAxis: [{
            name:'请假人数(人)',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 20,
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
            data: qingjiarenshu
        }]
    };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    function rr444() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('rr444'));
   
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
            data: timeweek
        }],
        yAxis: [{
            name:'来访人数(人)',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 20,
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
            data: laifangrenshu
        }]
    };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    




    function rr666() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('rr666'));
   
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
            data: timeday
        }],
        yAxis: [{
            name:'会议人数(人)',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 240,
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
            data: bangongrenshu
        }]
    };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function rr777() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('rr777'));
   
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
            data: timeweek
        }],
        yAxis: [{
            name:'站立办公(人)',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 20,
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
            data: laifangrenshu
        }]
    };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    
    function rr888() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('rr888'));
   
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
            data: timeweek
        }],
        yAxis: [{
            name:'开窗数',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 20,
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
            data: laifangrenshu
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
    