$(function () {
    
    getkqdata_d();
        getkqdata_h();
        getaxis();

        setInterval(function(){
            getkqdata_h();
            getkqdata_d();
            getaxis();
        },360000); 

        
            

  

init();


        function init()
        {
            setTimeout(function(){
                timeday=xtimeday[1];
                timeweek=xtimeday[0];
                kqdata=[kqdatabase[0][0],kqdatabase[0][4],kqdatabase[0][6],kqdatabase[0][5],kqdatabase[0][1],kqdatabase[0][2]]//空气数据  温度，湿度，甲醛 voc pm2.5 co2
                airco2data=[weekkqdatabase[0][2],weekkqdatabase[1][2],weekkqdatabase[2][2],weekkqdatabase[3][2],weekkqdatabase[4][2],weekkqdatabase[5][2],weekkqdatabase[6][2]] ///co2  7天
                airvocdata=[weekkqdatabase[0][6],weekkqdatabase[1][6],weekkqdatabase[2][6],weekkqdatabase[3][6],weekkqdatabase[4][6],weekkqdatabase[5][6],weekkqdatabase[6][6]] ///voc  7天
                airtemdata=[weekkqdatabase[0][0],weekkqdatabase[1][0],weekkqdatabase[2][0],weekkqdatabase[3][0],weekkqdatabase[4][0],weekkqdatabase[5][0],weekkqdatabase[6][0]] ///voc  7天
                airpm25data=[weekkqdatabase[0][1],weekkqdatabase[1][1],weekkqdatabase[2][1],weekkqdatabase[3][1],weekkqdatabase[4][1],weekkqdatabase[5][1],weekkqdatabase[6][1]] ///voc  7天
            
            
            }, 4500);
            
         
        }
        
        setInterval(function(){timeday=xtimeday[1];
            timeweek=xtimeday[0];
         
         
            kqdata=[kqdatabase[0][0],kqdatabase[0][4],kqdatabase[0][6],kqdatabase[0][5],kqdatabase[0][1],kqdatabase[0][2]]//空气数据  温度，湿度，甲醛 voc pm2.5 co2
            airco2data=[weekkqdatabase[0][2],weekkqdatabase[1][2],weekkqdatabase[2][2],weekkqdatabase[3][2],weekkqdatabase[4][2],weekkqdatabase[5][2],weekkqdatabase[6][2]] ///co2  7天
            
        
        
        
        }, 360000);
        























function getkqdata_h() {
            $.ajax({
            url:'/lanju_inside_h',
            type:'get',
            success: function (data) {
            console.log("day.................................");
                    //是否可以使用php写出来
                console.log(data);
            kqdatabase=data;

                



            },
            error : function() {
                alert("异常！");
            }
            }
            )

}

function getkqdata_d() {
    $.ajax({
    url:'/lanju_inside_d',
    type:'get',
    success: function (data) {
    console.log("week.....................................");
            //是否可以使用php写出来
        console.log(data);
    weekkqdatabase=data;

        



    },
    error : function() {
        alert("异常！");
    }
    }
    )

}

function getaxis() {
            $.ajax({
            url:'/axis',
            type:'get',
            success: function (data) {
                console.log(data);
                console.log("axis.....................-");
                xtimeday=data;
            },
            error : function() {
                alert("异常！");
            }
            })
}


    function delOne(str, data){

        var index = data.indexOf(str);
        data.splice(index,1);
        return data;
        }

})
