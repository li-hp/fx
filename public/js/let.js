/*

这个是专门放变量的js
文件存放组织结构为：全局、空气、光强、水、、、、等。
每个结构下面分为控制模块和poi点。

注意命名规范，缩进正确。

2020/01/16 许耿瑞
*/


// --------------------------全局  主页数据----------------------------------- //

ziyemiandata =["zhuye","kongqi","shuizhi","guangqiang", "shushi", "yinyang","jianshen", "kangyi", "renyuan"]

//首 页 数 据
kqdata=[50,50,25,30,40,80]//空气数据  温度，湿度，甲醛 voc pm2.5 co2


waterdata=[3,3,2,0.4] // 浑浊度，PH,电导率，余氯


gdata1=[400,300,200,300,400,500,400,300,400] //室内光强数据   9.00-17.00
gdata2=[200,300,400,300,200,300,0,300,200]//室外光强数据      9.00-17.00
gdata3=1000    //实时，室内光
gdata4=300  //实时，室外光


voice=[30,50]      //室内 室外  噪声 




jsdata1=[60,50,70,80,50,90,80]  //健身人数
jsdata2=[40,50,30,20,50,10,20]   //总人数-健身人数
jsdata3=50  //实时健身人数





////舒适  数据定义

 
var shushidata = [
    {
        name: '舒适',
        value: voice[0]       /////噪声
    },{
        name: '舒适',
        value: 30                     //////空气质量  未定义？？？
    },{
        name: '优秀',
        value: kqdata[1]                  //////湿度
    },{
        name: '优秀',
        value: kqdata[0]                 //////温度
    }]

    ////消毒记录
quyu=['办公室','茶水间','会议室','走廊','洗手间','洽谈室','电梯间']
xiaodudata=['已消毒','已消毒','已消毒','已消毒','已消毒','已消毒','已消毒']
xiaodutime=['3.01     18:00','2.29     18:00','2.28     18:00','2.27     18:00','2.26     18:00','2.25     18:00','2.24     18:00']

////人员占地密度指标
renyuandata=[10,20,30,40,50,'正常']   ////办公区人数，会议区人数，来访人数，开窗数，开门数，门窗状态



// --------------------------空气子页面     单独用历史数据----------------------------------- //




// --------------------------水质子页面     单独用历史数据----------------------------------- //
hunzhuodu=[0.7,1.0,1.5,0.8,0.6,0.3,0.2]   ///浑浊度，七天数据
yulv=[0.35,0.45,0.3,0.4,0.35,0.2,0.5]      /////余氯，七天数据
diandaolv=[1000,1500,1300,1600,1700,1300,1400]    ///电导率


squyu=['茶水间1','茶水间2','茶水间3','办公室']  ////滤芯位置
sxiaodudata=['正常','正常','正常','告警']     /////滤芯情况
sxiaodutime=['3.01     18:00','2.29     18:00','2.28     18:00','2.27     18:00']/////上次更换滤芯时间

