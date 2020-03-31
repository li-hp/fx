$(function () {

//js.js  用于场景切换，点击事件，跳转事件等。
    let qixiaoshi = document.querySelector('.qixiaoshi');
    qixiaoshi.addEventListener('click', function() {
        $.ajax({
            url:'/lanju_inside_h',
            type:'get',
            success: function (data) {
                console.log("-------------");
                //是否可以使用php写出来
                var len = data.length / 7;
                var dazu =[];
                var a =[];
                //分组
                for (let i=0; i<=6; i++ ) {
                    var xiaozu =[];
                    for (let j=0; j<len; j++) {
                        xiaozu.push(data[j]);
                        delOne(data[j],data);
                        data.push(data[j]);

                    }
                    dazu.push(xiaozu);

                }
                console.log("-------------");
                //计算平均值,生成新玩意
                var strdata = [
                    "DeviceID", "TEMP", "PM25",
                    "CO2", "NOISE", "HUMI",
                    "VOC", "CH2O", "LUX",
                ];

                var dazu_avg = [];
                let avg;

                for (let o = 0; o < 7; o++) {
                    //7个大组
                    var xiaozu_avg = [];
                    for (let j = 1; j < strdata.length; j++) {
                        // 将每个指标遍历进行求平均值
                        // var zhibiao_avg = [];
                        let sum1 = 0;
                        for (let i = 0; i < dazu[o].length; i++) {
                            //某个指标key下，每个对象的values求平均值
                            sum1 += dazu[o][i][strdata[j]];
                        }
                        avg = sum1 / dazu[o].length;
                        xiaozu_avg.push(avg);
                    }
                    dazu_avg.push(xiaozu_avg);
                }
                console.log(dazu_avg);

            },
            error : function() {
                alert("异常！");
            }
        })
    })

    let qitian = document.querySelector('.qitian');
    qitian.addEventListener('click', function() {
        $.ajax({
            url:'/lanju_inside_d',
            type:'get',
            success: function (data) {
                console.log("-------------");
                //是否可以使用php写出来
                var len = data.length / 7;
                var dazu =[];
                var a =[];
                //分组
                for (let i=0; i<=6; i++ ) {
                    var xiaozu =[];
                    for (let j=0; j<len; j++) {
                        xiaozu.push(data[j]);
                        delOne(data[j],data);
                        data.push(data[j]);

                    }
                    dazu.push(xiaozu);

                }
                console.log("-------------");
                //计算平均值,生成新玩意
                var strdata = [
                    "DeviceID", "TEMP", "PM25",
                    "CO2", "NOISE", "HUMI",
                    "VOC", "CH2O", "LUX",
                ];

                var dazu_avg = [];
                let avg;

                for (let o = 0; o < 7; o++) {
                    //7个大组
                    var xiaozu_avg = [];
                    for (let j = 1; j < strdata.length; j++) {
                        // 将每个指标遍历进行求平均值
                        // var zhibiao_avg = [];
                        let sum1 = 0;
                        for (let i = 0; i < dazu[o].length; i++) {
                            //某个指标key下，每个对象的values求平均值
                            sum1 += dazu[o][i][strdata[j]];
                        }
                        avg = sum1 / dazu[o].length;
                        xiaozu_avg.push(avg);
                    }
                    dazu_avg.push(xiaozu_avg);
                }
                console.log(dazu_avg);

            },
            error : function() {
                alert("异常！");
            }
        })
    })

    let shishi = document.querySelector('.shishi');
    shishi.addEventListener('click', function() {

        $.ajax({
            url:'/lanju_inside_n',
            type:'get',
            success: function (data) {
                console.log(data);
                console.log("-------------");
            },
            error : function() {
                alert("异常！");
            }
        })

    })

    let axis = document.querySelector('.axis');
    axis.addEventListener('click', function() {

        $.ajax({
            url:'/axis',
            type:'get',
            success: function (data) {
                console.log(data);
                console.log("-------------");
            },
            error : function() {
                alert("异常！");
            }
        })

    })

test1(ziyemiandata);
test2(ziyemiandata);

//     setInterval(function(){document.querySelector('.nav-lin'+s).click();
//     if(s++==8)  s=0;
// },30000);



function test1 (data) {

    var zymdata = data;
    setTimeout(function(){
        var str1 = '.maincontain_';
        $(str1.concat(zymdata[0])).css("display","block");  //首页

        for (var i = 1; i < zymdata.length; i++)
        {
            $(str1.concat(zymdata[i])).css("display","none");
        }
    },800);
}

// 子页面切换函数，只需要补充let.js中的ziyemiandata数组即可
function test2 (data) {

    var zymdata = data;
    var str1 = '.maincontain_';

    for (let i = 0 ; i < zymdata.length; i++) {

        let data123 = zymdata[i];
        document.querySelector('.nav-lin' + i).addEventListener('click', function() {

            $(str1 + data123).css("display","block");
            let newdata = delOne(data123,zymdata);

            for(let j = 0 ; j < newdata.length; j++)
            { $(str1 + newdata[j]).css("display","none"); }

            newdata.push(data123);
        })
    }
}


function delOne(str, data){

    var index = data.indexOf(str);
    data.splice(index,1);
    return data;
 }







})


















