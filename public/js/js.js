$(function () {
    


 
//计时器



setInterval(function(){getCurDate();
},100); 
function getCurDate()  
{  
 var d = new Date();  
 var week;  
 switch (d.getDay()){  
 case 1: week="星期一"; break;  
 case 2: week="星期二"; break;  
 case 3: week="星期三"; break;  
 case 4: week="星期四"; break;  
 case 5: week="星期五"; break;  
 case 6: week="星期六"; break;  
 default: week="星期天";  
 }  
 var years = d.getFullYear();  
 var month = add_zero(d.getMonth()+1);  
 var days = add_zero(d.getDate());  
 var hours = add_zero(d.getHours());  
 var minutes = add_zero(d.getMinutes());  
 var seconds=add_zero(d.getSeconds());  
 var ndate = years+"  年 "+month+" 月 "+days+" 日 "+hours+":"+minutes+":"+seconds+" "+week;  
 document.getElementById("divT").innerText=ndate;
}  
  
function add_zero(temp)  
{  
 if(temp<10) return "0"+temp;  
 else return temp;  
}  







function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
  return "Chrome";
 }
    if (userAgent.indexOf("Safari") > -1) {
        return "Safari";
    } //判断是否Safari浏览器
    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
        return "IE";
    }; //判断是否IE浏览器
}
 
 
 mb = myBrowser();
if (mb=="FF"){
    $('.boxall').css("height","41rem");
    $('.boxallright').css("height","41rem");
    $('.henbox').css("height","5.1rem");
}


















//  子页面切换函数
var s=0;

var lastdata=0;

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
         

            $(str1 + zymdata[lastdata]).css("display","none");
      
                  $('.nav-lin'+lastdata).css("background-color","#ba1c1c00");
            $(str1 + data123).css("display","block");
   if(i!=0)
         {
         
            $('.nav-lin'+i).css("background-color","#158fd587");

         }
    
            lastdata=i;



        })
    }
}










})


















