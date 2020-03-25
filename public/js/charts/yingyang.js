
$(function () {

yy111();
yy222();
yy333();
yy444();
//yy666();
//yy777();
yy888();
colors=[['#7bbfd4', '#c8447e','#598c90','#dfba2b','#ef5728'],['#dfba2b', '#598c90','#7bbfd4','#dfba2b','#ef5728'],['#7bbfd4', '#598c90','#e8b5de','#dfba2b','#ef5728'],['#ff8c37', '#ffdcc3'],['#fd6f97', '#fed4e0'],['#ffc257', '#ffedcc'], ['#a181fc', '#e3d9fe']]

    function yy111() {
    
    
    
        var myChart = echarts.init(document.getElementById('yy111'));

       
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





    
    
    function yy222() {
    
    
    
        var myChart = echarts.init(document.getElementById('yy222'));

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

               
                //////自定义文字
                graphic: [
                    {
                       type: 'group',
                       left: '70%',
                       bottom: '25%',
                       children: [
                  
    
    
                           {
                             
                            type: 'text',
                            z: 100,
                            left: 'center',
                            top: 'middle',
                            style: {
                                fill: '#fff',
                                text: [
                                    '60-           5人',
                                    '60-70     10人',
                                    '70-80     25人',
                                    '80-90     10人',
                                    '90+          2人'  
                                    
                                ].join('\n'),
                                font: '40px Microsoft YaHei',
                                lineHeight: 46,
                               }
                           }
                       ]
                    }
                ],
                



                title: [
                    {
                        text: '用餐人数：52',
                        top:'10%',
                        left:'80%',
                        textStyle: {
                            color: colorBlack,
                            fontSize: defaultSetting.title_fontsize,
                        },
                    },
                ].concat(Array.from({length: defaultSetting.pie_name.length}, (v, i) => {
                    // console.log(one_pie_width);
                    let _title = {
                        text: defaultSetting.pie_name[i],
                        top: '85%',
                        left: one_pie_width * i+13 + '%',
                        textStyle: {
                            color: colors[i],
                            fontSize: 30,
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
                                center: [one_pie_width*(i+0.5)-20+'%', '50%'],
                                radius: 55+'%',//'33%',//['33%', '0%'],//33%=100%/3
                                avoidLabelOverlap: false,
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'outside',//'outside',//'inside',
                                        formatter: "{b} : {c} \n({d}%)",
                                           textStyle: {
                                            fontSize: '20',
                                            fontWeight: 'bold'
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

    
    function yy333() {
    
    
    
        var myChart = echarts.init(document.getElementById('yy333'));

      
        const colorGreenDark = 'rgba(34,139,34,1)';
        const colorGreenLight = 'rgba(127,250,0,1)';
        const colorYellow = 'rgba(255,255,0,1)';
        const colorOrange = 'rgba(255,128,0,1)';
        const colorRed = 'rgba(255,0,0,1)';
        const colorGrayDark = '#999';
        const colorWhite = '#fff';
        const colorBlack = '#fff';
        const colorBlack_40 = 'rgba(0,0,0,0.4)';
        
        
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

               
                //////自定义文字
                graphic: [
                    {
                       type: 'group',
                       left: '70%',
                       bottom: '25%',
                       children: [
                  
    
    
                           {
                             
                            type: 'text',
                            z: 100,
                            left: 'center',
                            top: 'middle',
                            style: {
                                fill: '#fff',
                                text: [
                                    '早餐     16.99%',
                                    '午餐     45.16%',
                                    '晚餐     37.95%',
                                    
                                ].join('\n'),
                                font: '40px Microsoft YaHei',
                                lineHeight: 46,
                               }
                           }
                       ]
                    }
                ],
                



                title: [
                    {
                        text: '用餐人数：52',
                        top:'10%',
                        left:'80%',
                        textStyle: {
                            color: colorBlack,
                            fontSize: defaultSetting.title_fontsize,
                        },
                    },
                ].concat(Array.from({length: defaultSetting.pie_name.length}, (v, i) => {
                    // console.log(one_pie_width);
                    let _title = {
                        text: defaultSetting.pie_name[i],
                        top: '85%',
                        left: one_pie_width * i+13 + '%',
                        textStyle: {
                            color: colorBlack,
                            fontSize: 30,
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
                                color:colors[1],
                                center: [one_pie_width*(i+0.5)-20+'%', '50%'],
                                radius: 55+'%',//'33%',//['33%', '0%'],//33%=100%/3
                                avoidLabelOverlap: false,
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'outside',//'outside',//'inside',
                                        formatter: "{b} : {c} \n({d}%)",
                                           textStyle: {
                                            fontSize: '20',
                                            fontWeight: 'bold'
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

    
    function yy444() {
        // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('yy444'));
   
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
            data: ['能量','脂肪','水果','蔬菜','蛋白质'],
        }],
        yAxis: [{
            name:'营养摄入',
            nameTextStyle:{
                color: "#fff",
                fontSize:'24',
                fontWeight: 'bold',
            },
            type: 'value',
            min: 0,
            max: 60,
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
                show:false,
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
            data: [10,20,50,40,10]
        }]
    };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    
    function yy666() {

        var myChart = echarts.init(document.getElementById('yy666'));

     
    
        option = {
            title: 
            [{
                text: '早餐',
                top: '1%',
                left:'10%',
                textStyle:{
                    color:'#fff',
                    fontStyle:'normal',
                    fontWeight:'600',
                    fontFamily:'sans-serif',
            　　　　fontSize:30
                }
            },{
                text: "午餐",
                left:'40%',
                top: '1%',
                textStyle:{
                    color:'#fff',
                    fontStyle:'normal',
                    fontWeight:'400',
                    fontFamily:'sans-serif',
            　　　　 fontSize:30
                }
            },
            {
                text: "晚餐",
                right: '18%',
                top: '1%',
                textStyle:{
                    color:'#fff',
                    fontStyle:'normal',
                    fontWeight:'400',
                    fontFamily:'sans-serif',
            　　　　 fontSize:30
                }
            }],
          
        
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(params){
                    let result = params[0].name + '<br />' + 
                                  params[1].data.name;
                    return result;
                }
            },
            grid: [{
                left: '10%',
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
                data: [1, 2, 3, 4]
            }],
            series: [
                {
                    name: '告警',
                    stack: '1',
                    type: 'bar',
                    color:"rgba(128, 128, 128, 0 ",
                    label: {
                        show: true,
                        position: 'insideLeft',
                        fontSize:32,
                        
                        formatter: function(params){
                            return params.data.name
                        }
                    },
                    
                    data: [
                        {value: 0.4, name:'蛋炒饭'},
                        {value: 0.4, name:'白粥'},
                        {value: 0.4, name:'油条'},
                        {value: 0.4, name:'肉包'}
                      
                     
                    ]
                },  {
                    name: '告警',
                    stack: '1',
                    type: 'bar',
                    color:"rgba(128, 128, 128, 0",
                    label: {
                        show: true,
                        position: 'insideLeft',
                        fontSize:32,
                        
                        formatter: function(params){
                            return params.data.name
                        }
                    },
                    
                    data: [
                        {value: 0.4, name: '红烧排骨'},
                        {value: 0.4, name: '番茄鸡蛋'},
                        {value: 0.4, name: '蒜蓉生菜'},
                        {value: 0.4, name: '炒空心菜'},
                      
                     
                    ]
                },{
                    name: '已拖延时间',
                    stack: '1',
                    type: 'bar',
                    color:"rgba(128, 128, 128, 0 ",
                    label: {
                        show: true,
                        position: 'inside',
                        fontSize:32,
                
                        formatter: function(params){
                            return params.data.name
                        }
                    },
                    data: [
                        {value: 0.4, name: '鱼香茄子'},
                        {value: .4, name: '冬菇炖鸡'},
                        {value: .4, name: '炒土豆丝'},
                        {value: .4, name: '梅菜扣肉'}
                   
                      
                    ]
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }







   
    
    function yy777() {

        var myChart = echarts.init(document.getElementById('yy777'));

     
    
        option = {
          
          
        
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(params){
                    let result = params[0].name + '<br />' + 
                                  params[1].data.name;
                    return result;
                }
            },
            grid: [{
                left: '10%',
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
                data: [1, 2, 3, 4]
            }],
            series: [
                {
                    name: '告警',
                    stack: '1',
                    type: 'bar',
                    color:"rgba(128, 128, 128, 0 ",
                    label: {
                        show: true,
                        position: 'insideLeft',
                        fontSize:32,
                        
                        formatter: function(params){
                            return params.data.name
                        }
                    },
                    
                    data: [
                        {value: 0.4, name:'苹果'},
                        {value: 0.4, name:'梨'},
                        {value: 0.4, name:'菠萝'},
                        {value: 0.4, name:'草莓'}
                      
                     
                    ]
                },  {
                    name: '告警',
                    stack: '1',
                    type: 'bar',
                    color:"rgba(128, 128, 128, 0",
                    label: {
                        show: true,
                        position: 'insideLeft',
                        fontSize:32,
                        
                        formatter: function(params){
                            return params.data.name
                        }
                    },
                    
                    data: [
                        {value: 0.4, name: '桃子'},
                        {value: 0.4, name: '柠檬'},
                        {value: 0.4, name: '香蕉'},
                        {value: 0.4, name: '葡萄'},
                      
                     
                    ]
                },{
                    name: '已拖延时间',
                    stack: '1',
                    type: 'bar',
                    color:"rgba(128, 128, 128, 0 ",
                    label: {
                        show: true,
                        position: 'inside',
                        fontSize:32,
                
                        formatter: function(params){
                            return params.data.name
                        }
                    },
                    data: [
                        {value: 0.4, name: '柚子'},
                        {value: .4, name: '芒果'},
                        {value: .4, name: '橘子'},
                        {value: .4, name: '樱桃'}
                   
                      
                    ]
                }
            ]
        };

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    
    


    


    function yy888() {
    
    
    
        var myChart = echarts.init(document.getElementById('yy888'));
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
                    show:false,
                    text: '健身人数：'+data3,
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
               data: ['早餐', '午餐','晚餐'],
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
                 name: '早餐',
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
                name: '午餐',
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
              }, {
                name: '晚餐',
                type: 'bar',
                barWidth: '15%',
                itemStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: '#1d65f7f0'
                      }, {
                          offset: 1,
                          color: '#2c62cef0'
                      }]),
                      barBorderRadius: 11,
                  }
                  
                },
                data: [10,30,50,40,30,56,20]
              },]
             };
       
           
           

        
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });

    
    }


































      })
    