$(function () {


 getkqdata_h();

    setInterval(function(){
   getkqdata_h();
    },3600000);

    getkqdata_d();

 function getkqdata_h() {
        $.ajax({
            url:'/lanju_inside_h',
            type:'get',
            success: function (data) {
                console.log("-------------");
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
            url:'/axis',
            type:'get',
            success: function (data) {
                console.log(data);
                console.log("-------------");
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
