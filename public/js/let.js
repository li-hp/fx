/*

这个是专门放变量的js
文件存放组织结构为：全局、空气、光强、水、、、、等。
每个结构下面分为控制模块和poi点。

注意命名规范，缩进正确。

2020/01/16 许耿瑞
*/


// --------------------------全局场景----------------------------------- //
objData = {
         "actionname": "changeScene",  //关键字
         "id": "1" //0外部,1,俯视,2,室内漫游
    }

roamData = {
         "actionname": "changeScene",  //关键字
         "id": "2" //0外部,1,俯视,2,室内漫游
    }
objData1 = {
            "actionname": "changeScene",  //关键字
            "id": "1" //0外部,1,俯视,2,室内漫游
    }

// --------------------------空气----------------------------------- //

// 空气控制模块
mapData = {
    "actionname": "showHideHeatMap",//关键字
    "state": "1",  //显隐状态 0隐,1显
    }
    
freshairData ={
    "actionname": "showHideFreshAir",//关键字
    "id": "freshAir1",  //id
    "state": "1",  //显隐状态 0隐,1显
    "all": "true"  //是否控制全部 true,false
    }

aircleanerData = {
    "actionname": "showHideAirCleaner",//关键字
        "id": "airCleaner1",  //id
        "state": "1",  //显隐状态 0隐,1显
        "all": "true"  //是否控制全部 true,false
    }

airConditionerData = {
        "actionname": "airConditionerControl",//关键字
        "id": "0",  //id
        "state": "1",  //显隐状态 0隐,1显
        "all": "true"  //是否控制全部 true,false
        }

airHeatData = {
    "object_id": "item_heatmap_1",       //区域热力图id
    "coord_type": "1",      //区域热力图中坐标类型(0: 经纬度gis, 1: cad 坐标, 2: UE4WorldPostion)
    "heatmap_type": "1",    //区域热力图样式类型(1: 经典类型(红绿热力图))
    "leftupper_coord": "281852,-120342",     //区域热力图范围左上坐标(坐标类型需与heatmap_type相同)
    "lowerright_coord": "296764,-132198",    //区域热力图范围右下坐标(坐标类型需与heatmap_type相同)
    "coord_z": '0',       //区域热力图Z轴值(项目约定)
    "brush_diameter": "100.0",       //区域热力点笔刷直径(米, 单个热力点覆盖直径)
    "heatpoint_minvalue": "5.00",   //区域热力点取值范围最小值(此热力图中数值范围的最小值, 例如人流密度最小1(绿色接近透明), 最大1000(最红), 线性计算)
    "heatpoint_maxvalue": "500.0"   //区域热力点取值范围最大值
}


// 空气POI点
airpoiData = {
    "object_id" : "air_conditioner",   //POI点的ID
    "object_name": "空调1-综合院", //POI提示文本
    "object_floor": "3",//用于建筑楼层, 1 一层 (非必填)
    "object_type": "airConditioner",//图标的类别 (图标的样式, 需双方沟通约定)//此项目中. 约定为：①cameraLine; ②buildingLine; ③portLine;
    "coord_type": "1",  //(0: 经纬度gis, 1: cad坐标                                                                              )
    "object_coord" : "276056.0975,-116522.8888",//POI点的坐标(坐标类型需与该POI点的object_type相同)
    "coord_z": '0',//单位米, 坐标为GIS时决定POI图标高度; CAD时无效, 不用填
    "showtitle":"true",//true 显示提示文本(默认), false 不显示提示文本
    "showtitlerange":"30, 500",//此POI点显示title的镜头距离范围(单位米, 范围最小、最大距离; 在此范围内显示, 超出范围隐藏title, 注: showtitle属性为true时生效)
    "monitormouseoverlap":"ture"//此POI是否允许监听鼠标划过事件
    }

airpoiData2 = {
    "object_id" : "air_pm25", 
    "object_name": "PM2.5-大堂",
    "object_floor": "3",
    "object_type": "pm25",
    "coord_type": "1",                                            
    "object_coord" : "280930.5555,-129875.3333",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }

airpoiData3 = {
    "object_id" : "air_tem", 
    "object_name": "空气检测1-无线院",
    "object_floor": "3",
    "object_type": "temperature",
    "coord_type": "1",                                            
    "object_coord" : "294145.5555,-134071.3333",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }

airpoiData4 = {
    "object_id" : "air_co2", 
    "object_name": "二氧化碳-洽谈室1",
    "object_floor": "3",
    "object_type": "co2",
    "coord_type": "1",                                            
    "object_coord" : "276176.3578,-138902. 4529",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }
    

airpoiData5 = {
    "object_id" : "air_formaldehyde", 
    "object_name": "甲醛-培训室",
    "object_floor": "3",
    "object_type": "formaldehyde",
    "coord_type": "1",                                            
    "object_coord" : "284555,-115757",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }

airpoiData6 = {
    "object_id" : "air_freshAir", 
    "object_name": "新风-茶水间",
    "object_floor": "3",
    "object_type": "freshAir",
    "coord_type": "1",                                            
    "object_coord" : "297077,-123624",
    "coord_z": '0',
    "showtitle":"true",
    "showtitlerange":"30, 500",
    "monitormouseoverlap":"ture",
    }

    
// 光线
lightData = {
    "actionname": "lightControl",//关键字
    "id": "LightArea1",  //区域id：LightArea1-7
    "state": "0",  //开关状态 0关,1开
    "all": "true"  //是否控制全部 true,false
    }

curtainsData = {
    "actionname": "curtainsControl",//关键字
    "id": "curtain9",  //窗帘id
    "state": "2",  //开关状态 0关,1半开,2全开
    "all": "true"  //是否控制全部 true,false
    }



    
