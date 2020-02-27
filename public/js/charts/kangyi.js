
$(function () {

    // airdata();setInterval(function(){airdata();}, 60000);
    
    // --------------- 每1.5秒随机数 -----------------//
    

    
    kangyi_echarts_0();setInterval(function(){kangyi_echarts_0();}, randomNum(2000,7000));
    kangyi_echarts_1();setInterval(function(){kangyi_echarts_1();}, randomNum(2000,7000));
    kangyi_echarts_2();setInterval(function(){kangyi_echarts_2();}, randomNum(2000,7000));
    kangyi_echarts_3();setInterval(function(){kangyi_echarts_3();}, randomNum(2000,7000));
    kangyi_echarts_4();setInterval(function(){kangyi_echarts_4();}, randomNum(2000,7000));
    kangyi_echarts_5();setInterval(function(){kangyi_echarts_5();}, randomNum(2000,7000));
    kangyi_echarts_6();setInterval(function(){kangyi_echarts_6();}, randomNum(2000,7000));
    
    // --------------- echart图表 -----------------//
    function kangyi_echarts_0() {
    
        var myChart = echarts.init(document.getElementById('kangyi_echarts_0'));
    
        var data = [
            {
                name: '出勤打卡率',
                value: 54
            },{
                name: '体温健康人数比例',
                value: 44
            },{
                name: '戴口罩人数比例',
                value: 35
            },]
            
        var titleArr= [], seriesArr=[];
        colors=[['#7AFBFF', '#CEFBFF'],['#FFF757', '#ffdcc3'],['#fd6f97', '#fed4e0'],['#ffc257', '#ffedcc'], ['#a181fc', '#e3d9fe']]
        data.forEach(function(item, index){
                titleArr.push(
                    {
                        text:item.name,
                        left: index * 30 + 20 +'%',
                        top: '75%',
                        textAlign: 'center',
                        textStyle: {
                            fontWeight: 'normal',
                            fontSize: '30',
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
                        radius: [95, 110],
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
                        center: [index * 30+ 20 +'%', '50%'],
                        data: [{
                            value: item.value,
                            label: {
                                normal: {
                                    formatter: function(params){
                                        return params.value+'%';
                                    },
                                    position: 'center',
                                    show: true,
                                    textStyle: {
                                        fontSize: '40',
                                        fontWeight: 'bold',
                                        color: colors[index][0]
                                    }
                                }
                            },
                        }, {
                            value: 100-item.value,
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
            series: seriesArr
        }

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    function kangyi_echarts_1() {
    
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('kangyi_echarts_1'));

        var dataIPSxAxis = ['2019 05/20  ', '2019 05/24', '2019 05/27', '2019 05/29 ', '2019 05/02 ', '2019 05/08'];
        var dataIPS = [20, 60, 50, 80, 120, 100];
         var dataIPS2 = [20, 70, 60, 80, 100, 90];
        option = {
              title : {
               text: '消毒时长',
               textStyle:{
                   color:"#fff"
               }
           },
            // backgroundColor:"#242842",
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985',
                    },
                }
            },
            legend: {
                // orient: "vartical",
                // x: "right",
                top: "0%",
                right: '15%',
                // bottom: "0%",
                itemWidth: 32,
                itemHeight: 18,
                itemGap: 50,
                textStyle: {
                    color: '#fff',
                    fontSize: 24,
                    fontWeight: 'bold'
                },
                data:['紫外线消毒','超声波消毒液消毒']
            },
            grid: {
                left: '5%',
               right: '15%',
               top:'15%',
               bottom: '1%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                data: dataIPSxAxis,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 24,
                        fontWeight: 'bold',
                    },
                    formatter: function(value) {
                        //debugger
                        var ret = ""; //拼接加\n返回的类目项
                        var maxLength = 5; //每项显示文字个数
                        var valLength = value.length; //X轴类目项的文字个数
                        var rowN = Math.ceil(valLength / maxLength); //类目项需要换行的行数
                        if (rowN > 1) //如果类目项的文字大于3,
                        {
                            for (var i = 0; i < rowN; i++) {
                                var temp = ""; //每次截取的字符串
                                var start = i * maxLength; //开始截取的位置
                                var end = start + maxLength; //结束截取的位置
                                //这里也可以加一个是否是最后一行的判断，但是不加也没有影响，那就不加吧
                                temp = value.substring(start, end) + "\n";
                                ret += temp; //凭借最终的字符串
                            }
                            return ret;
                        } else {
                            return value;
                        }
                    },
                },
                axisLine: {
                    lineStyle: {
                        color: '#0a2b52',
                        width: 0.5, //这里是为了突出显示加上的
                    }
                }
            }],
            yAxis: [{
                type: 'value',
                axisLine: {
                    onZero: false,
                    lineStyle: {
                        color: '#0a2b52',
                        width: 1, //这里是为了突出显示加上的
                    }
                },
                
                axisLabel: {
                    formatter: function(val) {
                        return val + '';
                    },
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 24,
                        fontWeight: 'bold',
                    }
                },
                 splitLine:{
                       show:true,
                       lineStyle:{
                           type:'dashed'
                           
                       }
                       
                   },
            }],
            series: [
                {
                    name: '紫外线消毒',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    showAllSymbol: true,
                    //  symbol: "none", //去掉折线点
                    stack: 100,
                    lineStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#CB8993' // 0% 处的颜色
                            }, {
                                offset: 0.5,
                                color: '#CB8993' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#CC56CB' // 100% 处的颜色
                            }]),
                            barBorderRadius: 12,
                            width:5
                        },
                    },
                    itemStyle: {
                        normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#CB8993' // 0% 处的颜色
                            }, {
                                offset: 0.5,
                                color: '#CB8993' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#CC56CB' // 100% 处的颜色
                            }]), //背景渐变色
                            lineStyle: { // 系列级个性化折线样式
                                width: 7,
                                type: 'solid',
                                color: "#CC56CB"
                            }
                        },
                        emphasis: {
                            color: '#02675f',
                            lineStyle: { // 系列级个性化折线样式
                                width: 0.5,
                                type: 'dotted',
                                color: "#02675f" //折线的颜色
                            }
                        }
                    }, //线条样式
                    symbolSize: 5, //折线点的大小
                    areaStyle: {
                        normal: {}
                    },
                    data: dataIPS,
                },      
            {
                    name: '超声波消毒液消毒',
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    showAllSymbol: true,
                    //  symbol: "none", //去掉折线点
                    stack: 100,
                    lineStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#64CAFA' // 0% 处的颜色
                            }, {
                                offset: 0.5,
                                color: '#64CAFA' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#0078D7' // 100% 处的颜色
                            }]),
                            barBorderRadius: 12,
                            width:5
                        },
                    },
                    itemStyle: {
                        normal: { //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#64CAFA' // 0% 处的颜色
                            }, {
                                offset: 0.5,
                                color: '#64CAFA' // 100% 处的颜色
                            }, {
                                offset: 1,
                                color: '#0078D7' // 100% 处的颜色
                            }]), //背景渐变色
                            lineStyle: { // 系列级个性化折线样式
                                width: 7,
                                type: 'solid',
                                color: "#0078D7"
                            }
                        },
                        emphasis: {
                            color: '#02675f',
                            lineStyle: { // 系列级个性化折线样式
                                width: 0.5,
                                type: 'dotted',
                                color: "#02675f" //折线的颜色
                            }
                        }
                    }, //线条样式
                    symbolSize: 5, //折线点的大小
                    areaStyle: {
                        normal: {}
                    },
                    data: dataIPS2,
                },
                
       
            
            ]
        };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    function kangyi_echarts_2() {

        var myChart = echarts.init(document.getElementById('kangyi_echarts_2'));

        var data = {
            age: [{
                    value: 1,
                    name: '会议室使用'
                },
                {
                    value: 9,
                    name: '会议室空闲'
                },
            ],
            stature: [{
                    value: 3,
                    name: '洽谈室1使用'
                },
                {
                    value: 6,
                    name: '洽谈室1空闲'
                }
            ],
            education: [{
                    value: 5,
                    name: '洽谈室2使用'
                },
                {
                    value: 6,
                    name: '洽谈室2空闲'
                }
            ],
            skill: [{
                    value: 11,
                    name: '洽谈室3使用'
                },
                {
                    value: 8,
                    name: '洽谈室3空闲'
                },
            ]
        };
    
        function setText() {
            colors = ["#f29de4", "#e6a15c", "#61b1f2", "#73e699"];
            texts = ["会议室", "洽谈室1", "洽谈室2", "洽谈室3"];
            var label = [];
            for (var i = 0; i < texts.length; i++) {
    
                var obj = {
                    tooltip: {
                        show: false, //取消鼠标放上去时会显示信息的样式
                        trigger: 'item',
                    },
                    label: {
                        normal: {
                            formatter: [
                                '{c|' + texts[i] + '}',
                            ].join('\n'),
                            position: 'center', //让文字居中
                            show: true,
                            rich: {
                                c: {
                                    fontSize: '24',
                                    fontWeight: 'bold',
                                    color: '' + colors[i] + '',
                                    lineHeight: '10'
                                },
                            }
                        }
                    },
                }
                label.push(obj);
            }
            return label;
        };
    
    
        var labels = setText();
            var Index = ["age", "stature", "education", "skill"];
            for (var i = 0; i < Index.length; i++) {
                data[Index[i]].push(labels[i])
            }
    
        var radius = ['45%', '40%'];
    
        var option = {
            // backgroundColor:'#0d213b',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}:{d}%"
            },
            grid: {
                left: '0%',
                top: '0px',
                right: '0%',
                bottom: '0px',
                containLabel: true
            },
            series: [{
                type: 'pie',
                name: '会议室',
                radius: radius,
                center: ['25%', '28%'],
                color: [ "#e55ce5", "#ffe5f6", "#ffe5f6","#c500dc",],
                minAngle: 30,
                animation: false,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        fontWeight: 'bold',
                        fontSize: 20,
                        formatter: '{b}',
                    }
                },
                labelLine: {
                    show: true,
                    length: 0,
                    length2: 30
                },
                data: data.age,
            }, {
                type: 'pie',
                name: '洽谈室1',
                radius: radius,
                center: ['70%', '28%'],
                color: [ "#e5a15c", "#ffeecc","#e55c00","#f2cf9d"],
                minAngle: 30,
                animation: false,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        fontWeight: 'bold',
                        fontSize: 20,
                        formatter: '{b}',
                    }
                },
                labelLine: {
                    show: true,
                    length: 0,
                    length2: 30
                },
                data: data.stature
    
            }, {
                type: 'pie',
                name: '洽谈室2',
                radius: radius,
                center: ['25%', '75%'],
                // color: ["#0371ec", "#61b1f2", "#b2e3ff", "#e5f8ff"],
                color: ["#0371ec", "#b2e3ff"],
                minAngle: 30,
                animation: false,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        fontSize: 20,
                        fontWeight: 'bold',
                        formatter: '{b}',
                    }
                },
                labelLine: {
                    show: true,
                    length: 0,
                    length2: 30
                },
                data: data.education
            }, {
                type: 'pie',
                name: '洽谈室3',
                radius: radius,
                center: ['70%', '75%'],
                color: ["#06ca2b",  "#e5fff2"],
                minAngle: 30,
                animation: false,
                label: {
                    normal: {
                        show: true,
                        position: 'outside',
                        fontWeight: 'bold',
                        fontSize: 20,
                        formatter: '{b}',
                    }
                },
                labelLine: {
                    show: true,
                    length: 0,
                    length2: 30
                },
                data: data.skill
            }]
        };




        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    function kangyi_echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var value = randomNum(1,9) / 10;
        var data = [value,value];
        var dom = document.getElementById("kangyi_echarts_3");
        // dom.style.height=window.innerHeight+'px';
        var myChart = echarts.init(dom);
        var app = {};
        option = null;
        option = {
            //  backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
            //     offset: 0,
            //     color: '#431ab8'
            // }, {
            //     offset: 1,
            //     color: '#471bba'
            // }]),
             title: {
                 text: (value * 100).toFixed(0) + '{a|%}',
                 textStyle: {
                     fontSize: 50,
                     fontFamily: 'Microsoft Yahei',
                     fontWeight: 'normal',
                     color: '#fff',
                     rich: {
                         a: {
                             fontSize: 28,
                             fontWeight: 'bold',
                         }
                     }
                 },
                 x: 'center',
                 y: '35%'
             },
             graphic: [{
                 type: 'group',
                 left: 'center',
                 top: '60%',
                 children: [{
                     type: 'text',
                     z: 100,
                     left: '10',
                     top: 'middle',
                     style: {
                         fill: '#fff',
                         text: '实时湿度',
                         font: '24px Microsoft YaHei',
                         fontWeight: 'bold',
                     }
                 }]
             }],
             series: [{
                 type: 'liquidFill',
                 radius: '80%',
                 center: ['50%', '50%'],
                 //  shape: 'roundRect',
                 data: data,
                 backgroundStyle: {
                     color: {
                         type: 'linear',
                         x: 1,
                         y: 0,
                         x2: 0.5,
                         y2: 1,
                         colorStops: [{
                             offset: 1,
                             color: 'rgba(68, 145, 253, 0)'
                         }, {
                             offset: 0.5,
                             color: 'rgba(68, 145, 253, .25)'
                         }, {
                             offset: 0,
                             color: 'rgba(68, 145, 253, 1)'
                         }],
                         globalCoord: false
                     },
                 },
                 outline: {
                     borderDistance: 0,
                     itemStyle: {
                         borderWidth: 20,
                         borderColor: {
                             type: 'linear',
                             x: 0,
                             y: 0,
                             x2: 0,
                             y2: 1,
                             colorStops: [{
                                 offset: 0,
                                 color: 'rgba(69, 73, 240, 0)'
                             }, {
                                 offset: 0.5,
                                 color: 'rgba(69, 73, 240, .25)'
                             }, {
                                 offset: 1,
                                 color: 'rgba(69, 73, 240, 1)'
                             }],
                             globalCoord: false
                         },
                         shadowBlur: 10,
                         shadowColor: '#000',
                     }
                 },
                 color: {
                     type: 'linear',
                     x: 0,
                     y: 0,
                     x2: 0,
                     y2: 1,
                     colorStops: [{
                         offset: 1,
                         color: 'rgba(58, 71, 212, 0)'
                     }, {
                         offset: 0.5,
                         color: 'rgba(31, 222, 225, .2)'
                     }, {
                         offset: 0,
                         color: 'rgba(31, 222, 225, 1)'
                     }],
                     globalCoord: false
                 },
                 label: {
                     normal: {
                         formatter: '',
                     }
                 }
             }, ]
         };
         myChart.setOption(option);
         window.addEventListener("resize",function(){
             myChart.resize();
         });
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    function kangyi_echarts_4() {
        // kangyi 表格
    }
    
    function kangyi_echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('kangyi_echarts_5'));
        var randome81 = [randomNum(20,90),randomNum(20,90),randomNum(20,90),randomNum(20,90),randomNum(20,90),randomNum(20,90),randomNum(20,90),];
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
                name:"μg/m3",
                nameTextStyle:{
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                },
                min:0,
                max:90,
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
                        name: '轻度污染',
                        yAxis: 115
                    }, {
                        name: '良',
                        yAxis: 75
                    }, {
                        name: '优',
                        yAxis: 35
                    }],
                    lineStyle:{
                        color:'#8E8E8E',
                    },
                },
            }],
        };
    
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
    
    function kangyi_echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('kangyi_echarts_6'));
        var randome81 = [randomNum(100,700),randomNum(100,700),randomNum(100,700),randomNum(100,700),randomNum(100,700)];
        var data = [70, 34, 60, 78, 69];
        var titlename = ['综合院', '无线院', '会议室', '培训室', '茶水间'];
        var valdata = [683, 234, 234, 523, 345];
        var myColor = ['#1089E7', '#1011E7', '#56D0E3', '#12a256', '#8B78F6'];
        option = {
            // backgroundColor: '#0e2147',
            grid: {
                left: '5%',
                top: '10%',
                right: '5%',
                bottom: '7%',
                containLabel: true
            },
            xAxis: {
                show: false
            },
            yAxis: [{
                show: true,
                data: titlename,
                inverse: true,
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff",
                    fontSize:'24',
                    fontWeight: 'bold',
                    formatter: function(value, index) {
                        return [
                            '{lg|' + (index + 1) + '}' + '{title|' + value + '} '
                        ].join('\n')
                    },
                    rich: {
                        lg: {
                            backgroundColor: '#339911',
                            color: '#fff',
                            borderRadius: 15,
                            // padding: 5,
                            align: 'center',
                            width: 15,
                            height: 15
                        },
                    }
                },
        
        
            }, {
                show: true,
                // inverse: true,
                data: valdata,
                axisLabel: {
                    textStyle: {
                        color: '#ffff',
                        fontSize:'25',
                        fontWeight: 'bold',
                    },
                },
                axisLine: {
                    show: false
                },
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
        
            }],
            series: [{
                name: '条',
                type: 'bar',
                yAxisIndex: 0,
                data: data,
                barWidth: 30,
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        color: function(params) {
                            var num = myColor.length;
                            return myColor[params.dataIndex % num]
                        },
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        formatter: '{c}%',
                        color: "#fff",
                        fontSize:'24',
                        fontWeight: 'bold',
                    }
                },
            }, {
                name: '框',
                type: 'bar',
                yAxisIndex: 1,
                barGap: '-100%',
                data: [100, 100, 100, 100, 100],
                barWidth: 40,
                itemStyle: {
                    normal: {
                        color: 'none',
                        borderColor: '#00c1de',
                        borderWidth: 3,
                        barBorderRadius: 15,
                    }
                }
            }, ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    

    /*
    //生成从minNum到maxNum的随机数
    */
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


    // function airdata(){
    //     $.ajax({
    //         url:'js/data_json/jj111.json',
    //         type:'get',
    //         success: function (result) {
    //             kangyi_echarts_0(result);
                
    //         },
    //         error : function() {
    //             alert("数据异常！");
    //         }
    //     })
    // }
    
    
    
    })