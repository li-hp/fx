$(function () {

//js.js  用于场景切换，点击事件，跳转事件等。
    
// ---------- 八个按钮 -----------//

// --------------- 场景切换 -----------------//

let specialChannel_changjing = document.querySelector('.changjingqiehuan');
    specialChannel_changjing.addEventListener('click', function() {
        cloudRender.SuperAPI('specialChannel', objData);  // 这里 specialChannel 不能修改

        if ( objData.id == '1' ) {
            objData.id = '0';
            }
        else {
            objData.id = '1';}
        })

// --------------- 灯光控制  -----------------//
let specialChannel_lightControl = document.querySelector('.light');

    specialChannel_lightControl.addEventListener('click', function() {
        cloudRender.SuperAPI('specialChannel', lightData);

        if ( lightData.state == '1' ) {
            lightData.state = '0';
            }
        else {
            lightData.state = '1';}
    })

    // --------------- 温度热力图  -----------------//
let specialChannel_heatMap = document.querySelector('.heatmap');
    specialChannel_heatMap.addEventListener('click', function() {
        cloudRender.SuperAPI('specialChannel', mapData);

        if ( mapData.state == '1' ) {
            mapData.state = '0';
            }
        else {
            mapData.state = '1';}
    })

// --------------- 窗帘控制  -----------------//
let specialChannel_curTains = document.querySelector('.curtains');
    specialChannel_curTains.addEventListener('click', function() {
        cloudRender.SuperAPI('specialChannel', curtainsData);

        if ( curtainsData.state == '2' ) {
            curtainsData.state = '0';
            }
        else {
            curtainsData.state = '2';}
    })

// --------------- 漫游 -----------------//
let specialChannel_roam = document.querySelector('.roam');
    specialChannel_roam.addEventListener('click', function() {
        cloudRender.SuperAPI('specialChannel', roamData);
    })

// --------------- 新风管道  -----------------//
let specialChannel_freshair = document.querySelector('.freshair');
    specialChannel_freshair.addEventListener('click', function() {
        cloudRender.SuperAPI('specialChannel', freshairData);
        cloudRender.SuperAPI('specialChannel', aircleanerData);
        // alert(freshairData[0].all);

        if ( freshairData.state == '1' && aircleanerData.state == '1') {
            freshairData.state = '0';
            aircleanerData.state = '0';
            }
        else {
            freshairData.state = '1';
            aircleanerData.state = '1';}
    })

// --------------- 空气POI点加载 -----------------//
let specialChannel_airpoi = document.querySelector('.airpoi');
specialChannel_airpoi.addEventListener('click', function() {
    cloudRender.SuperAPI('specialChannel', objData1);
    cloudRender.SuperAPI('AddPOI', airpoiData);
    cloudRender.SuperAPI('AddPOI', airpoiData2);
    cloudRender.SuperAPI('AddPOI', airpoiData3);
    cloudRender.SuperAPI('AddPOI', airpoiData4);
    cloudRender.SuperAPI('AddPOI', airpoiData5);
    cloudRender.SuperAPI('AddPOI', airpoiData6);

    // alert("已完成");
})


// -----  点击事件 div版本   -----------//

test1(ziyemiandata);
test2(ziyemiandata);

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



    // ---导航栏点击事件--load版本--//

    // let tiaozhuan1 = document.querySelector('.nav-link1');
    // tiaozhuan1.addEventListener('click', function() {
    //     $.ajax({cache: true});

    //     $('.maincontain').load('/php/kongqi.blade.php');
    //    $.getScript("/js/kongqi.js");
    // })






})


















