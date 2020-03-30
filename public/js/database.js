// $(function () {
    
  
//  getkqdata();

//     setInterval(function(){
//    getkqdata();
//     },10000); 

  
    



















//  function getkqdata() {
//         $.ajax({
//             url:'/lanju_inside_h',
//             type:'get',
//             success: function (data) {
//                 console.log("-------------");
//                 //是否可以使用php写出来
//                 var len = data.length / 7;
//                 var dazu =[];
//                 var a =[];
//                 //分组
//                 for (let i=0; i<=6; i++ ) {
//                     var xiaozu =[];
//                     for (let j=0; j<len; j++) {
//                         xiaozu.push(data[j]);
//                         delOne(data[j],data);
//                         data.push(data[j]);

//                     }
//                     dazu.push(xiaozu);

//                 }
//                 console.log("-------------");
//                 //计算平均值,生成新玩意
//                 var strdata = [
//                     "DeviceID", "TEMP", "PM25",
//                     "CO2", "NOISE", "HUMI",
//                     "VOC", "CH2O", "LUX",
//                 ];

//                 var dazu_avg = [];
//                 let avg;

//                 for (let o = 0; o < 7; o++) {
//                     //7个大组
//                     var xiaozu_avg = [];
//                     for (let j = 1; j < strdata.length; j++) {
//                         // 将每个指标遍历进行求平均值
//                         // var zhibiao_avg = [];
//                         let sum1 = 0;
//                         for (let i = 0; i < dazu[o].length; i++) {
//                             //某个指标key下，每个对象的values求平均值
//                             sum1 += dazu[o][i][strdata[j]];
//                         }
//                         avg = sum1 / dazu[o].length;
                        
//                         xiaozu_avg.push(avg);
//                     }
                  
//                     dazu_avg.push(xiaozu_avg);
//                 }
               


//           console.log(dazu_avg);
//           kqdatabase=dazu_avg;
      
             
      
      

//             },
//             error : function() {
//                 alert("异常！");
//             }
//         }
//         )
        
//     }









//     function delOne(str, data){

//         var index = data.indexOf(str);
//         data.splice(index,1);
//         return data;
//         }
















// })