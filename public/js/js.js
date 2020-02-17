$(function () {

    //js.js  用于场景切换，点击事件，跳转事件等。



    // ----------------------------------------------------------- 清除计时器，避免重复加载-----------------------------------------------------------------------//
   /* for(var i = 1; i < 1000; i++) {
        clearInterval(i);
        };
*/
// ----------------------------------------------------------- 八个按钮 ------------------------------------------------------------------------//

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

// --------------- 空气子页面加载 -----------------//
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


///////////    点击事件，div版本   点击显示某一个div    maincontain 是包含的div名字
setTimeout(function(){
    $('.maincontain1').css("display","block");
    $('.maincontain2').css("display","none");
    $('.maincontain3').css("display","none");

},800)



let tiaozhuan = document.querySelector('.nav-link');
tiaozhuan.addEventListener('click', function() {

    $('.maincontain1').css("display","block");
    $('.maincontain2').css("display","none");
    $('.maincontain3').css("display","none");

})

let tiaozhuan1 = document.querySelector('.nav-link1');
tiaozhuan1.addEventListener('click', function() {
    $('.maincontain2').css("display","block");
    $('.maincontain1').css("display","none");
    $('.maincontain3').css("display","none");

})
let tiaozhuan2 = document.querySelector('.nav-link2');
tiaozhuan2.addEventListener('click', function() {
    $('.maincontain3').css("display","block");
    $('.maincontain2').css("display","none");
    $('.maincontain1').css("display","none");

})







    // --------------------------------------------------------------------导航栏点击事件--load版本-----------------------------------------------------------------------//
  /*
    let tiaozhuan = document.querySelector('.nav-link');
    tiaozhuan.addEventListener('click', function() {
        $.ajax({cache: true});
        $('.maincontain').load('/php/show.blade.php');
        $.getScript("/js/js.js");
    })

    let tiaozhuan1 = document.querySelector('.nav-link1');
    tiaozhuan1.addEventListener('click', function() {
        $.ajax({cache: true});

        $('.maincontain').load('/php/kongqi.blade.php');
       $.getScript("/js/kongqi.js");
    })
    let tiaozhuan2 = document.querySelector('.nav-link2');
    tiaozhuan2.addEventListener('click', function() {

        $.ajax({cache: false});
        $('.maincontain').load('/php/shuizhi.blade.php');
        $.getScript("/js/shuizhi.js");
    })
    let tiaozhuan3 = document.querySelector('.nav-link3');
    tiaozhuan3.addEventListener('click', function() {
        $.ajax({cache: false});
        $('.maincontain').load('/php/shushi.blade.php');
      //  $.getScript("/js/shushi.js");
    })
    let tiaozhuan4 = document.querySelector('.nav-link4');
    tiaozhuan4.addEventListener('click', function() {
        $.ajax({cache: false});
        $('.maincontain').load('/php/guangqiang.blade.php');
        $.getScript("/js/guangqiang.js");
    })
    let tiaozhuan5 = document.querySelector('.nav-link5');
    tiaozhuan5.addEventListener('click', function() {
        $.ajax({cache: false});
        $('.maincontain').load('/php/yingyang.blade.php');
        //$.getScript("/js/yingyang.js");
    })
    let tiaozhuan6 = document.querySelector('.nav-link6');
    tiaozhuan6.addEventListener('click', function() {
        $.ajax({cache: false});
        $('.maincontain').load('/php/jianshen.blade.php');
       // $.getScript("/js/jianshen.js");
    })
    let tiaozhuan7 = document.querySelector('.nav-link7');
    tiaozhuan7.addEventListener('click', function() {
        $.ajax({cache: false});
        $('.maincontain').load('/php/huiyi.blade.php');
       // $.getScript("/js/huiyi.js");
    })
    let tiaozhuan8 = document.querySelector('.nav-link8');
    tiaozhuan8.addEventListener('click', function() {
        $.ajax({cache: false});
        $('.maincontain').load('/php/renyuan.blade.php');
       // $.getScript("/js/renyuan.js");
    })

  */








})


















