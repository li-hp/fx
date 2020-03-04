$(function () {

//js.js  用于场景切换，点击事件，跳转事件等。
    

// ---------- 八个按钮  首页 -----------//
// ---------- 八个按钮  首页 -----------//
// ---------- 八个按钮  首页 -----------//
// ---------- 八个按钮  首页 -----------//

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
            cloudRender.SuperAPI('specialChannel',doorData);
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


    let specialChannel_door = document.querySelector('.dianji');
        specialChannel_door.addEventListener('click', function() {
            console.log('333');
            cloudRender.SuperAPI('specialChannel',doorData);
        
        })

   





// --------------- 空气POI点加载 -----------------//


let specialChannel_airpoi = document.querySelector('.airpoi');     //跳转到空气页面，显示空气大类poi点
specialChannel_airpoi.addEventListener('click', function() {
    cloudRender.SuperAPI('specialChannel', objData1);
    cloudRender.SuperAPI('AddPOI', airpoiData);
    cloudRender.SuperAPI('AddPOI', airpoiData2);
    cloudRender.SuperAPI('AddPOI', airpoiData3);
    cloudRender.SuperAPI('AddPOI', airpoiData4);
    cloudRender.SuperAPI('AddPOI', airpoiData5);
    cloudRender.SuperAPI('AddPOI', airpoiData6);
   

    })


// -----  点击事件 空气子页面点击事件   -----------//


    let specialChannel_kq_kongtiao = document.querySelector('.kq_kongtiao');
        specialChannel_kq_kongtiao.addEventListener('click', function() {

            cloudRender.SuperAPI('specialChannel', airConditionerData); 
                    
            if ( airConditionerData.state == '1' ) {
                airConditionerData.state = '0';
                }
            else {
                airConditionerData.state = '1';}

        })
    let specialChannel_kq_xinfeng = document.querySelector('.kq_xinfeng');
        specialChannel_kq_xinfeng.addEventListener('click', function() {
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

    let specialChannel_kq_airpoi = document.querySelector('.kq_airpoi');  
        specialChannel_kq_airpoi.addEventListener('click', function() {
            cloudRender.SuperAPI('specialChannel', objData1);
            cloudRender.SuperAPI('AddPOI', airpoiData);
            cloudRender.SuperAPI('AddPOI', airpoiData2);
            cloudRender.SuperAPI('AddPOI', airpoiData3);
            cloudRender.SuperAPI('AddPOI', airpoiData4);
            cloudRender.SuperAPI('AddPOI', airpoiData5);
            cloudRender.SuperAPI('AddPOI', airpoiData6);
        
        
        })
    let specialChannel_kq_reli = document.querySelector('.kq_reli');
        specialChannel_kq_reli.addEventListener('click', function() {
            cloudRender.SuperAPI('specialChannel', mapData);

            if ( mapData.state == '1' ) {
                mapData.state = '0';
                }
            else {
                mapData.state = '1';}
        })
        

// ----  导航栏点击 ---//

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



//  这段有bug，我已注释

    // let tiaozhuan_show = document.querySelector('.nav-lin0');    
    //     tiaozhuan_show.addEventListener('click', function() {
    //         cloudRender.SuperAPI('RemoveAllPOI');
    //         cloudRender.SuperAPI('specialChannel', objData0); 
    //     })

    // let tiaozhuan_kongqi = document.querySelector('.nav-lin1');     //跳转到空气页面，显示空气大类poi点
    // tiaozhuan_kongqi.addEventListener('click', function() {
    //     cloudRender.SuperAPI('RemoveAllPOI');
    //     cloudRender.SuperAPI('specialChannel', objData1);
    //     cloudRender.SuperAPI('AddPOI', airpoiData_kongtiao);
    //     cloudRender.SuperAPI('AddPOI', airpoiData_fresh);
    //     cloudRender.SuperAPI('AddPOI', airpoiData_kongqi);
    //     cloudRender.SuperAPI('AddPOI', airpoiData_youhai);
    //     cloudRender.SuperAPI('AddPOI', airpoiData_paifeng);
    //     $(window).trigger('resize');
    // })

    // let tiaozhuan_guangqiang = document.querySelector('.nav-lin2');    
    // tiaozhuan_guangqiang.addEventListener('click', function() {
        
    //     cloudRender.SuperAPI('RemoveAllPOI');
    //     cloudRender.SuperAPI('specialChannel', objData1);
    //     cloudRender.SuperAPI('AddPOI', ligpoiData_curtain);
    //     cloudRender.SuperAPI('AddPOI', ligpoiData_kaiguan);
    //     cloudRender.SuperAPI('AddPOI', ligpoiData_qiangdu);
    //     cloudRender.SuperAPI('AddPOI', ligpoiData_guanggan);
        
    // })

    // let tiaozhuan_shushi = document.querySelector('.nav-lin3');     
    // tiaozhuan_shushi.addEventListener('click', function() {
        
    //     cloudRender.SuperAPI('RemoveAllPOI');
    //     cloudRender.SuperAPI('specialChannel', objData1);
    //     cloudRender.SuperAPI('AddPOI', shushipoiData_body);
    //     cloudRender.SuperAPI('AddPOI', shushipoiData_light);
    //     cloudRender.SuperAPI('AddPOI', shushipoiData_noise);
    //     cloudRender.SuperAPI('AddPOI', shushipoiData_air);
    //     cloudRender.SuperAPI('AddPOI', shushipoiData_broad);
    

    //     // alert("已完成");
    // })

    // let tiaozhuan_yingyang = document.querySelector('.nav-lin4');    
    // tiaozhuan_yingyang.addEventListener('click', function() {
        
    //     cloudRender.SuperAPI('RemoveAllPOI');
    //     cloudRender.SuperAPI('specialChannel', objData1);
    //     cloudRender.SuperAPI('AddPOI', yingyangpoiData_weibolu);
    //     cloudRender.SuperAPI('AddPOI', yingyangpoiData_yingyang);
    //     cloudRender.SuperAPI('AddPOI', yingyangpoiData_bingxiang);
    //     // alert("已完成");
    // })

    // let tiaozhuan_jianshen = document.querySelector('.nav-lin5');    
    // tiaozhuan_jianshen.addEventListener('click', function() {
        
    //     cloudRender.SuperAPI('RemoveAllPOI');
    //     cloudRender.SuperAPI('specialChannel', objData1);
    //     cloudRender.SuperAPI('AddPOI', jianshenpoiData_jianshenfang );
    //     cloudRender.SuperAPI('AddPOI', jianshenpoiData_jianshen);

    //     // alert("已完成");
    // })
    // let tiaozhuan_shui = document.querySelector('.nav-lin6');    
    // tiaozhuan_shui.addEventListener('click', function() {
        
    //     cloudRender.SuperAPI('RemoveAllPOI');
    //     cloudRender.SuperAPI('specialChannel', objData1);
    //     cloudRender.SuperAPI('AddPOI', shuipoiData_shui );
    //     cloudRender.SuperAPI('AddPOI', shuipoiData_water );
        

    //     // alert("已完成");
    // })

    // let tiaozhuan_zonghe= document.querySelector('.nav-lin7');  
    // tiaozhuan_zonghe.addEventListener('click', function() {
        
    //     cloudRender.SuperAPI('RemoveAllPOI');
    //     cloudRender.SuperAPI('specialChannel', objData1);
    //     cloudRender.SuperAPI('AddPOI', zonghepoiData_dian );
    //     cloudRender.SuperAPI('AddPOI', zonghepoiData_water );
    //     cloudRender.SuperAPI('AddPOI', zonghepoiData_camera );
    //     cloudRender.SuperAPI('AddPOI', zonghepoiData_entrance);
    //     cloudRender.SuperAPI('AddPOI', zonghepoiData_meetingRoom);
    //     cloudRender.SuperAPI('AddPOI', zonghepoiData_kaoqin);

    //     // alert("已完成");
    // })








































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


















