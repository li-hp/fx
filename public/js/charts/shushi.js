$(function(){

    shushi_echarts_1();setInterval(function(){shushi_echarts_1();}, 2000);
    shushi_echarts_2();setInterval(function(){shushi_echarts_2();}, 2000);
    shushi_echarts_3();setInterval(function(){shushi_echarts_3();}, 10000);

    function shushi_echarts_1() {

        var myChart = echarts.init(document.getElementById('shushi_echart1'));


        var data = [
            {
                name: '热辐射舒适度',
                value: 54
            },{
                name: '味觉舒适度',
                value: 44
            },{
                name: '听觉舒适度',
                value: 35
            },{
                name: '环境整体满意度',
                value: 30
            }]
            
            var titleArr= [], seriesArr=[];
            colors=[['#af4', '#dfeaff'],['#ff8c37', '#ffdcc3'],['#fd6f97', '#fed4e0'],['#ffc257', '#ffedcc'], ['#a181fc', '#e3d9fe']]
            data.forEach(function(item, index){
                titleArr.push(
                    {
                        text:item.name,
                        left: index * 20 + 20 +'%',
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
                        center: [index * 20 + 20 +'%', '50%'],
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

    function shushi_echarts_2() {

        var myChart = echarts.init(document.getElementById('shushi_echart2'));

        option = {
            // backgroundColor: '#394056',
            title: {
                text: '舒适度变化趋势',
                textStyle: {
                    fontSize: 24,
                    color: '#fff',
                    fontWeight: 'bold',
                },
                left: '6%'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {
                icon: 'rect',
                itemWidth: 14,
                itemHeight: 5,
                itemGap: 13,
                data: ['热辐射舒适度', '味觉舒适度', '听觉舒适度'],
                right: '10%',
                textStyle: {
                    fontSize: 24,
                    color: '#fff',
                    fontWeight: 'bold',
                }
            },
            grid: {
                left: '5%',
                right: '10%',
                bottom: '5%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLine: {
                    lineStyle: {
                        color: '#57617B',

                    }
                }, 
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 24,
                        color: '#fff',
                        fontWeight: 'bold',
                    },
                },    
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
            }],
            yAxis: [{
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                },
                axisLabel: {
                    margin: 10,
                    textStyle: {
                        fontSize: 24,
                        color: '#fff',
                        fontWeight: 'bold',
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            }],
            series: [{
                name: '热辐射舒适度',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 8
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(137, 189, 27, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(137, 189, 27, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: 'rgb(137,189,27)'
                    }
                },
                data: [96.3,96.4,97.5,95.6,98.1,94.8,89.6,94.1,80.1,52.4,75.8,94.7]
            }, {
                name: '味觉舒适度',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 8
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(0, 136, 212, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(0, 136, 212, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ff8c37'
                    }
                },
                data: [97.3,99.2,99.3,100.0,99.6,90.6,80.0,91.5,69.8,67.5,90.4,84.9]
            }, {
                name: '听觉舒适度',
                type: 'line',
                smooth: true,
                lineStyle: {
                    normal: {
                        width: 8
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(219, 50, 51, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(219, 50, 51, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#fd6f97'
                    }
                },
                data: [84.2,81.0,67.5,72.1,43.7,88.5,91.9,101.8,79.7,87.6,92.9,0]
            }, ]
        };        

        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function shushi_echarts_3() {

        var myChart = echarts.init(document.getElementById('shushi_echart3'));

        option = {

            tooltip: {
                show: true
            },
            series: [{
                type: "wordCloud",
                gridSize:6,
                shape:'diamond',
                sizeRange: [30, 80],
                width:1000,
                height:500,
                textStyle: {
                    fontWeight: 'bold',
                    normal: {

                        color: function() {
                            return 'rgb(' + [
                                Math.round(randomNum(150,255)),
                                Math.round(randomNum(150,255)),
                                Math.round(randomNum(150,255))
                            ].join(',') + ')';
                        }
                    },
                    emphasis: {
                        shadowBlur: 15,
                        shadowColor: '#333'
                    }
                },
                data: [{
                        name: " 没有",
                        value: 30,
                    },
                    {
                        name: " 屏幕",
                        value: 24
                    },
                    {
                        name: " 不错",
                        value: 21
                    },
                    {
                        name: " 可以",
                        value: 19
                    },
                    {
                        name: " 发货",
                        value: 18
                    },
                    {
                        name: " 这个",
                        value: 18
                    },
                    {
                        name: " 什么",
                        value: 17
                    },
                    {
                        name: " 一个",
                        value: 12
                    },
                    {
                        name: " 不好",
                        value: 12
                    },
                    {
                        name: " 质量",
                        value: 11
                    },
                    {
                        name: " 快递",
                        value: 11
                    },
                    {
                        name: " 问题",
                        value: 10
                    },
                    {
                        name: " 物流",
                        value: 9
                    },
                    {
                        name: " 几天",
                        value: 9
                    },
                    {
                        name: " 一般",
                        value: 9
                    },
                    {
                        name: " 就是",
                        value: 9
                    },
                    {
                        name: " 使用",
                        value: 8
                    },
                    {
                        name: " 怎么",
                        value: 8
                    },
                    {
                        name: " 电池",
                        value: 8
                    },
                    {
                        name: " 不能",
                        value: 8
                    },
                    {
                        name: " 速度",
                        value: 8
                    },
                    {
                        name: " 客服",
                        value: 8
                    },
                    {
                        name: " 一星",
                        value: 8
                    },
                    {
                        name: " 拍照",
                        value: 8
                    },
                    {
                        name: " 摄像头",
                        value: 7
                    },
                    {
                        name: " 外观",
                        value: 7
                    },
                    {
                        name: " 包装",
                        value: 7
                    },
                    {
                        name: " 到货",
                        value: 7
                    },
                    {
                        name: " 有点",
                        value: 7
                    },
                    {
                        name: " 抢购",
                        value: 6
                    },
                    {
                        name: " 这样",
                        value: 6
                    },
                    {
                        name: " 性价比",
                        value: 6
                    },
                    {
                        name: " 一般般",
                        value: 6
                    },
                    {
                        name: " 出现",
                        value: 6
                    },
                    {
                        name: " 以前",
                        value: 6
                    },
                    {
                        name: " 知道",
                        value: 6
                    },
                    {
                        name: " 一次",
                        value: 6
                    },
                    {
                        name: " 真的",
                        value: 6
                    },
                    {
                        name: " 收到",
                        value: 6
                    },
                    {
                        name: " 其他",
                        value: 6
                    },
                    {
                        name: " 电量",
                        value: 6
                    },
                    {
                        name: " 还是",
                        value: 6
                    },
                    {
                        name: " 不行",
                        value: 6
                    },
                    {
                        name: " 红米",
                        value: 6
                    },
                    {
                        name: " 那么",
                        value: 6
                    },
                    {
                        name: " 挺快",
                        value: 5
                    },
                    {
                        name: " 现在",
                        value: 5
                    },
                    {
                        name: " 服务",
                        value: 5
                    },
                    {
                        name: " 充电",
                        value: 5
                    },
                    {
                        name: " 流畅",
                        value: 5
                    },
                    {
                        name: " 系统",
                        value: 5
                    },
                    {
                        name: " 非常",
                        value: 5
                    },
                    {
                        name: " 满意",
                        value: 5
                    },
                    {
                        name: " 购物",
                        value: 5
                    },
                    {
                        name: " 玩游戏",
                        value: 5
                    },
                    {
                        name: " 信号",
                        value: 5
                    },
                    {
                        name: " 不了",
                        value: 5
                    },
                    {
                        name: " 别人",
                        value: 5
                    },
                    {
                        name: " 死机",
                        value: 5
                    },
                    {
                        name: " 耗电",
                        value: 5
                    },
                    {
                        name: " 一直",
                        value: 5
                    },
                    {
                        name: " 像素",
                        value: 5
                    },
                    {
                        name: " 第一次",
                        value: 5
                    },
                    {
                        name: " 广告",
                        value: 5
                    },
                    {
                        name: " 买个",
                        value: 5
                    },
                    {
                        name: " 黑屏",
                        value: 5
                    },
                    {
                        name: " 为什么",
                        value: 4
                    },
                    {
                        name: " 猴王",
                        value: 4
                    },
                    {
                        name: " 视频",
                        value: 4
                    },
                    {
                        name: " 体验",
                        value: 4
                    },
                    {
                        name: " 好评",
                        value: 4
                    },
                    {
                        name: " 闪屏",
                        value: 4
                    },
                    {
                        name: " 价格",
                        value: 4
                    },
                    {
                        name: " 饥饿",
                        value: 4
                    },
                    {
                        name: " 营销",
                        value: 4
                    },
                    {
                        name: " 发热",
                        value: 4
                    },
                    {
                        name: " 还行",
                        value: 4
                    },
                    {
                        name: " 一天",
                        value: 4
                    },
                    {
                        name: " 需要",
                        value: 4
                    },
                    {
                        name: " 特别",
                        value: 4
                    },
                    {
                        name: " 而且",
                        value: 4
                    },
                    {
                        name: " 运行",
                        value: 4
                    },
                    {
                        name: " 等到",
                        value: 4
                    },
                    {
                        name: " 手机卡",
                        value: 4
                    },
                    {
                        name: " 呵呵",
                        value: 4
                    },
                    {
                        name: " 时候",
                        value: 4
                    },
                    {
                        name: " 东西",
                        value: 4
                    },
                    {
                        name: " 感觉",
                        value: 4
                    },
                    {
                        name: " 卡机",
                        value: 4
                    },
                    {
                        name: " 没什么",
                        value: 4
                    },
                    {
                        name: " 大家",
                        value: 4
                    },
                    {
                        name: " 没货",
                        value: 4
                    },
                    {
                        name: " 售后",
                        value: 4
                    },
                    {
                        name: " 比较",
                        value: 4
                    },
                    {
                        name: " 退货",
                        value: 4
                    },
                    {
                        name: " 加价",
                        value: 3
                    },
                    {
                        name: " 耳机",
                        value: 3
                    },
                    {
                        name: " 呜呜",
                        value: 3
                    },
                    {
                        name: " 一分钱",
                        value: 3
                    },
                    {
                        name: " 一分货",
                        value: 3
                    },
                    {
                        name: " 默认",
                        value: 3
                    },
                    {
                        name: " 说好",
                        value: 3
                    },
                    {
                        name: " 你们",
                        value: 3
                    },
                    {
                        name: " 一点",
                        value: 3
                    },
                    {
                        name: " 超级",
                        value: 3
                    },
                    {
                        name: " 耐用",
                        value: 3
                    },
                    {
                        name: " 很快",
                        value: 3
                    },
                    {
                        name: " 断流",
                        value: 3
                    },
                    {
                        name: " 套装",
                        value: 3
                    },
                    {
                        name: " 一样",
                        value: 3
                    },
                    {
                        name: " 发票",
                        value: 3
                    },
                    {
                        name: " 买回来",
                        value: 3
                    },
                    {
                        name: " 软件",
                        value: 3
                    },
                    {
                        name: " 还好",
                        value: 3
                    },
                    {
                        name: " 以后",
                        value: 3
                    },
                    {
                        name: " 下单",
                        value: 3
                    },
                    {
                        name: " 打游戏",
                        value: 3
                    },
                    {
                        name: " 我们",
                        value: 3
                    },
                    {
                        name: " 但是",
                        value: 3
                    },
                    {
                        name: " 一部",
                        value: 3
                    },
                    {
                        name: " 王者",
                        value: 3
                    },
                    {
                        name: " 不怎么样",
                        value: 3
                    },
                    {
                        name: " 看看",
                        value: 3
                    },
                    {
                        name: " 自己",
                        value: 3
                    },
                    {
                        name: " 里面",
                        value: 3
                    },
                    {
                        name: " 边框",
                        value: 3
                    },
                    {
                        name: " 看着",
                        value: 3
                    },
                    {
                        name: " 要死",
                        value: 3
                    },
                    {
                        name: " 原因",
                        value: 3
                    },
                    {
                        name: " 新机",
                        value: 3
                    },
                    {
                        name: " 不如",
                        value: 3
                    },
                    {
                        name: " 老是",
                        value: 3
                    },
                    {
                        name: " 购买",
                        value: 3
                    },
                    {
                        name: " 更好",
                        value: 3
                    },
                    {
                        name: " 相机",
                        value: 3
                    },
                    {
                        name: " 竟然",
                        value: 3
                    },
                    {
                        name: " 一分",
                        value: 3
                    },
                    {
                        name: " 天才",
                        value: 3
                    },
                    {
                        name: " 荣耀",
                        value: 3
                    },
                    {
                        name: " 正常",
                        value: 3
                    },
                    {
                        name: " 回复",
                        value: 3
                    },
                    {
                        name: " 联系",
                        value: 3
                    },
                    {
                        name: " 总体",
                        value: 3
                    },
                    {
                        name: " 反应",
                        value: 3
                    },
                    {
                        name: " 老爸",
                        value: 3
                    },
                    {
                        name: " 星期",
                        value: 3
                    },
                    {
                        name: " 半个",
                        value: 3
                    },
                    {
                        name: " 打电话",
                        value: 3
                    },
                    {
                        name: " 不是",
                        value: 3
                    },
                    {
                        name: " 保护膜",
                        value: 3
                    },
                    {
                        name: " 充电器",
                        value: 3
                    },
                    {
                        name: " 买不到",
                        value: 2
                    },
                    {
                        name: " 老子",
                        value: 2
                    },
                    {
                        name: " 差评",
                        value: 2
                    },
                    {
                        name: " 这么",
                        value: 2
                    },
                    {
                        name: " 真香",
                        value: 2
                    },
                    {
                        name: " 真是",
                        value: 2
                    },
                    {
                        name: " 三天",
                        value: 2
                    },
                    {
                        name: " 填写内容",
                        value: 2
                    },
                    {
                        name: " 帮别人",
                        value: 2
                    },
                    {
                        name: " 终于",
                        value: 2
                    },
                    {
                        name: " 有时候",
                        value: 2
                    },
                    {
                        name: " 极致",
                        value: 2
                    },
                    {
                        name: " 还有",
                        value: 2
                    },
                    {
                        name: " 希望",
                        value: 2
                    },
                    {
                        name: " 必须",
                        value: 2
                    },
                    {
                        name: " 好像",
                        value: 2
                    },
                    {
                        name: " 严重",
                        value: 2
                    },
                    {
                        name: " 反应速度",
                        value: 2
                    },
                    {
                        name: " 后面",
                        value: 2
                    },
                    {
                        name: " 音乐",
                        value: 2
                    },
                    {
                        name: " 商品",
                        value: 2
                    },
                    {
                        name: " 哈哈",
                        value: 2
                    },
                    {
                        name: " 垃圾",
                        value: 2
                    },
                    {
                        name: " 好用",
                        value: 2
                    },
                    {
                        name: " 突出",
                        value: 2
                    },
                    {
                        name: " 价钱",
                        value: 2
                    },
                    {
                        name: " 耍猴",
                        value: 2
                    },
                    {
                        name: " 磕碰",
                        value: 2
                    },
                    {
                        name: " 几次",
                        value: 2
                    },
                    {
                        name: " 失灵",
                        value: 2
                    },
                    {
                        name: " 支持",
                        value: 2
                    },
                    {
                        name: " 快充",
                        value: 2
                    },
                    {
                        name: " 意思",
                        value: 2
                    },
                    {
                        name: " 失败",
                        value: 2
                    },
                    {
                        name: " 整整",
                        value: 2
                    },
                    {
                        name: " 没收",
                        value: 2
                    },
                    {
                        name: " 已经",
                        value: 2
                    },
                    {
                        name: " 无法",
                        value: 2
                    },
                    {
                        name: " 方面",
                        value: 2
                    },
                    {
                        name: " 为啥",
                        value: 2
                    },
                    {
                        name: " 喜欢",
                        value: 2
                    },
                    {
                        name: " 套餐",
                        value: 2
                    },
                    {
                        name: " 完全",
                        value: 2
                    },
                    {
                        name: " 专业",
                        value: 2
                    },
                    {
                        name: " 选择",
                        value: 2
                    },
                    {
                        name: " 48mp",
                        value: 2
                    },
                    {
                        name: " 无线",
                        value: 2
                    },
                    {
                        name: " 一个月",
                        value: 2
                    },
                    {
                        name: " 不过",
                        value: 2
                    },
                    {
                        name: " ldquo",
                        value: "-"
                    },
                    {
                        name: " rdquo",
                        value: "-"
                    },
                    {
                        name: " 这种",
                        value: 2
                    },
                    {
                        name: " 送货",
                        value: 2
                    },
                    {
                        name: " 卡死",
                        value: 2
                    },
                    {
                        name: " 来看",
                        value: 2
                    },
                    {
                        name: " 糊弄人",
                        value: 2
                    },
                    {
                        name: " note7",
                        value: 2
                    },
                    {
                        name: " 时间",
                        value: 2
                    },
                    {
                        name: " 短信",
                        value: 2
                    },
                    {
                        name: " 滑落",
                        value: 2
                    },
                    {
                        name: " 那样",
                        value: 2
                    },
                    {
                        name: " vivo",
                        value: 2
                    },
                    {
                        name: " 防水",
                        value: 2
                    },
                    {
                        name: " 等待",
                        value: 2
                    },
                    {
                        name: " 直播",
                        value: 2
                    },
                    {
                        name: " 难受",
                        value: 2
                    },
                    {
                        name: " 四个",
                        value: 2
                    },
                    {
                        name: " 到手",
                        value: 2
                    },
                    {
                        name: " 发现",
                        value: 2
                    },
                    {
                        name: " 掉电",
                        value: 2
                    },
                    {
                        name: " 华为",
                        value: 2
                    },
                    {
                        name: " 再也",
                        value: 2
                    },
                    {
                        name: " 不用",
                        value: 2
                    },
                    {
                        name: " 给力",
                        value: 2
                    },
                    {
                        name: " 两天",
                        value: 2
                    },
                    {
                        name: " 立马",
                        value: 2
                    },
                    {
                        name: " 两周",
                        value: 2
                    },
                    {
                        name: " 处理器",
                        value: 2
                    },
                    {
                        name: " 关机",
                        value: 2
                    },
                    {
                        name: " 要么",
                        value: 2
                    },
                    {
                        name: " 满血",
                        value: 2
                    },
                    {
                        name: " 不会",
                        value: 2
                    },
                    {
                        name: " 定金",
                        value: 2
                    },
                    {
                        name: " 付款",
                        value: 2
                    },
                    {
                        name: " 心情",
                        value: 2
                    },
                    {
                        name: " 另外",
                        value: 2
                    },
                    {
                        name: " 游戏",
                        value: 2
                    },
                    {
                        name: " 公司",
                        value: 2
                    },
                    {
                        name: " 按键",
                        value: 2
                    },
                    {
                        name: " 卡顿",
                        value: 2
                    },
                    {
                        name: " 晚上",
                        value: 2
                    },
                    {
                        name: " 百分之",
                        value: 2
                    },
                    {
                        name: " 手机信号",
                        value: 2
                    },
                    {
                        name: " 一下",
                        value: 2
                    },
                    {
                        name: " 开学",
                        value: 2
                    },
                    {
                        name: " 上班",
                        value: 2
                    },
                    {
                        name: " 上天",
                        value: 2
                    },
                    {
                        name: " 配送",
                        value: 2
                    },
                    {
                        name: " 最后",
                        value: 2
                    },
                    {
                        name: " 太慢",
                        value: 2
                    },
                    {
                        name: " 手机套",
                        value: 2
                    },
                    {
                        name: " 笨重",
                        value: 2
                    },
                    {
                        name: " 半年",
                        value: 2
                    },
                    {
                        name: " 屏险",
                        value: 2
                    },
                    {
                        name: " 先发",
                        value: 2
                    },
                    {
                        name: " 不灵敏",
                        value: 2
                    },
                    {
                        name: " 硬度",
                        value: 2
                    },
                    {
                        name: " 这次",
                        value: 2
                    },
                    {
                        name: " 性能",
                        value: 2
                    },
                    {
                        name: " 介绍",
                        value: 2
                    },
                    {
                        name: " 卡针",
                        value: 2
                    },
                    {
                        name: " 不理",
                        value: 2
                    },
                    {
                        name: " 这是",
                        value: 2
                    },
                    {
                        name: " 买来",
                        value: 2
                    },
                    {
                        name: " 两次",
                        value: 2
                    },
                    {
                        name: " 网络",
                        value: 2
                    },
                    {
                        name: " 就裂",
                        value: 2
                    },
                    {
                        name: " 没用",
                        value: 2
                    },
                    {
                        name: " 多次",
                        value: 2
                    },
                    {
                        name: " 钢化",
                        value: 2
                    },
                    {
                        name: " 一星怪",
                        value: 1
                    },
                    {
                        name: " 新款",
                        value: 1
                    },
                    {
                        name: " 你行",
                        value: 1
                    },
                    {
                        name: " 没送",
                        value: 1
                    },
                    {
                        name: " 一个多",
                        value: 1
                    },
                    {
                        name: " 礼拜",
                        value: 1
                    },
                    {
                        name: " 只能",
                        value: 1
                    },
                    {
                        name: " 价位",
                        value: 1
                    },
                    {
                        name: " 闪退",
                        value: 1
                    },
                    {
                        name: " 抢到",
                        value: 1
                    },
                    {
                        name: " 其它",
                        value: 1
                    },
                    {
                        name: " 便宜",
                        value: 1
                    },
                    {
                        name: " 两百",
                        value: 1
                    },
                    {
                        name: " 盈利",
                        value: 1
                    },
                    {
                        name: " 机智",
                        value: 1
                    },
                    {
                        name: " 更新换代",
                        value: 1
                    },
                    {
                        name: " 太乱",
                        value: 1
                    },
                    {
                        name: " 赔付",
                        value: 1
                    },
                    {
                        name: " 自营",
                        value: 1
                    },
                    {
                        name: " 产品",
                        value: 1
                    },
                    {
                        name: " 手持",
                        value: 1
                    },
                    {
                        name: " 夜景",
                        value: 1
                    },
                    {
                        name: " 机子",
                        value: 1
                    },
                    {
                        name: " 拆过",
                        value: 1
                    }
                ],
            }]
        
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