"use strict";
const params = new URLSearchParams(location.search);
var cloudRender = new cloudRenderer('player', 1);
// 云渲染url 前端获取  仅限用于测试
function createXmlHttpRequest() {
    if(window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else if(window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
}

function fetchPixelStreaming(token) {
    let xhr = createXmlHttpRequest();
    xhr.open('GET', _url + renderPath, true);
    xhr.setRequestHeader('Authorization', `Bearer ${token}`);
    xhr.onload = function() {
        if(xhr.status == 200) {
            let jsData = JSON.parse(xhr.responseText);
            console.log('SuperAPI_StartRenderCloud_Url: ', jsData.url);
            sessionStorage.setItem('cloudurl', jsData.url);
            if(jsData.error) {
                alert('访问人数过多, 请稍后访问www.51hitech.com')
            } else {
                // document.querySelector('body');
                cloudRender.SuperAPI('StartRenderCloud', sessionStorage.getItem('cloudurl'));
            }
        }
    }
    xhr.send();
}

function SuperAPI_StartRenderCloud_GetUrl() {
    let xhr = createXmlHttpRequest();
    let authurl = _url + 'autoLogin';
    xhr.open('POST', authurl, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if(xhr.status == 200) {
            let jsData = JSON.parse(xhr.responseText);
            console.log('token: ', jsData);
            if(jsData.error) {
                alert('请联系51VR, 申请专用体验线路www.51hitech.com')
            } else {
                fetchPixelStreaming(jsData.token);
            }
        }
    }
    xhr.send(`username=${staticUserName}&pwd=${staticPwd}`);
}

// 测试地址 联系51VR获得可用地址
let _url = 'http://192.168.17.222:8889/';
let renderPath = 'Renderers/Any/5e1c19758b9529146cadaf6b/';
let staticUserName = 'guest';
let staticPwd = '123456';


SuperAPI_StartRenderCloud_GetUrl();


// var cloudBtn = document.getElementById('player1');

// var cloudRender = new cloudRenderer('player', 0);
// cloudRender.SuperAPI('StartRenderCloud', sessionStorage.getItem('cloudurl'));

// window.addEventListener("resize",function(){
//     cloudBtn.resize();
// });

// 事件注册
function myHandleResponseFunction(data) {
    let jsonObject = JSON.parse(data);
    console.log('receive: ' + data);

    switch(jsonObject.func_name) {
        case 'beginPlay':
            console.log('beginPlay');
            break;

        case 'APIAlready':
            console.log('APIAlready 云服务连接成功 3D世界加载完成');
            setTimeout(() => document.querySelector('.nav-list').classList.add('show'), 2e3);
            break;

        case 'OnPOIClick':
            let OnPOIClick_id = jsonObject.args.id;
            console.log('OnPOIClick id = ' + OnPOIClick_id);
            // 返回一个点击POI的ID值
            break;

        case 'OnPOIMouseOverlap':
            let OnPOIMouseOverlap_id = jsonObject.args.id;
            console.log('OnPOIMouseOverlap_id = ' + OnPOIMouseOverlap_id);
            // 返回一个滑过POI的ID值
            break;

        case 'OnCameraInfo':
            let OnCameraInfo_coord = jsonObject.args.coord;
            console.log('OnCameraInfo_coord = ' + OnCameraInfo_coord);
            // 返回当前镜头经纬度信息
            break;

        case 'OnPOIFocusEnd':
            let OnPOIFocusEnd_id = jsonObject.args.id;
            console.log('OnPOIFocusEnd_id = ' + OnPOIFocusEnd_id);
            // 场景FOCUS至POI点镜头动作结束时返回信息
            break;
    }
}

cloudRender.SuperAPI('RegisterCloudResponse', myHandleResponseFunction);

const url = 'https://api.51hitech.com/jsapi/json/list.json', req = new Request(url);

fetch(req).then(response => response.json()).then(data => {
    let navList = document.querySelector('.nav-list'), _html = '';
    data.forEach(function(el) {
        _html += `<div class="sec"><span>${el.secName}</span><ul>${el.item.map(ev => `<li class="item" data-command="${ev.dataCommand}">${ev.itemName}</li>`).join('')}</ul></div>`;
    })
    navList.innerHTML = `${_html}`;

    // 左侧栏
    let controlSec = document.querySelectorAll('.sec>span');
    [].forEach.call(controlSec, el => {
        el.addEventListener('click', btnClickSec, false)
    });

    function btnClickSec() {
        [].forEach.call(controlSec, el => {
            if(el !== this) el.closest('.sec').classList.remove('active');
        });
        this.closest('.sec').classList.toggle('active');
    }

    let controls = document.querySelectorAll('.item');
    [].forEach.call(controls, el => {
        el.addEventListener('click', btnClick, false)
    });

    function btnClick(ev) {
        [].forEach.call(controls, el => {
            if(el !== this) el.classList.remove('active');
        });
        this.classList.add('active');

        let el = ev.target;
        let _ctrl = el.dataset.command;
        switch(_ctrl) {
            // 模块
            case 'NextModule':
                cloudRender.SuperAPI('NextModule', 'traffic');//moduleName - 模块的名称, 根据项目需求, 需双方沟通约定//此项目中moduleName: ①traffic; ②economy; ③energy; ④harbor
                break;

            case 'GetFrustumArea':
                cloudRender.SuperAPI('GetFrustumArea', '0');//0: 经纬度gis, 1: cad坐标, 2: UE4WorldPostion
                break;

            case 'GetCameraInfo':
                cloudRender.SuperAPI('GetCameraInfo', '0');//0: 经纬度gis, 1: cad坐标, 2: UE4WorldPostion
                break;


            // POI点
            case 'AddPOI':
                let poiData = [
                {
                "object_id" : "poi_id",   //POI点的ID
                "object_name": "poi title", //POI提示文本
                "object_floor": "1",//用于建筑楼层, 1 一层 (非必填)
                "object_type": "cameraLine",//图标的类别 (图标的样式, 需双方沟通约定)//此项目中. 约定为：①cameraLine; ②buildingLine; ③portLine;
                "coord_type": "0",  //(0: 经纬度gis, 1: cad坐标)
                "object_coord" : "103.995697,1.399239",//POI点的坐标(坐标类型需与该POI点的object_type相同)
                "coord_z": "150",//单位米, 坐标为GIS时决定POI图标高度; CAD时无效, 不用填
                "showtitle":"true",//true 显示提示文本(默认), false 不显示提示文本
                "showtitlerange":"30, 5000",//此POI点显示title的镜头距离范围(单位米, 范围最小、最大距离; 在此范围内显示, 超出范围隐藏title, 注: showtitle属性为true时生效)
                "monitormouseoverlap":"false",//此POI是否允许监听鼠标划过事件
                },
                {
                "object_id": "1",
                "object_name": "嘉宾达街",
                "object_floor": "",
                "object_type": "cameraLine",
                "coord_type": "0",
                "object_coord": "103.99176,1.412331",
                "coord_z": "30",
                "showtitle": "false",
                "monitormouseoverlap": "true",
                "showtitlerange": "0,9000"
                },
                {
                "object_id": "2",
                "object_name": "采士华路",
                "object_floor": "",
                "object_type": "cameraLine",
                "coord_type": "0",
                "object_coord": "103.984657,1.40435",
                "coord_z": "30",
                "showtitle": "true",
                "monitormouseoverlap": "true",
                "showtitlerange": "0,9000"
                },
                {
                "object_id": "3",
                "object_name": "章芳林街",
                "object_floor": "",
                "object_type": "cameraLine",
                "coord_type": "0",
                "object_coord": "103.983879,1.395452",
                "coord_z": "30",
                "showtitle": "true",
                "monitormouseoverlap": "true",
                "showtitlerange": "0,9000"
                },
                {
                "object_id": "4",
                "object_name": "振瑞路",
                "object_floor": "",
                "object_type": "cameraLine",
                "coord_type": "0",
                "object_coord": "103.992592,1.388639",
                "coord_z": "30",
                "showtitle": "true",
                "monitormouseoverlap": "true",
                "showtitlerange": "0,9000"
                },
                {
                "object_id": "5",
                "object_name": "珠烈街",
                "object_floor": "",
                "object_type": "cameraLine",
                "coord_type": "0",
                "object_coord": "103.99894,1.386702",
                "coord_z": "30",
                "showtitle": "false",
                "monitormouseoverlap": "true",
                "showtitlerange": "0,1000"
                },
                {
                "object_id": "6",
                "object_name": "沙球朥路",
                "object_floor": "",
                "object_type": "cameraLine",
                "coord_type": "0",
                "object_coord": "104.008919,1.399966",
                "coord_z": "30",
                "showtitle": "true",
                "monitormouseoverlap": "true",
                "showtitlerange": "0,9000"
                },
                {
                "object_id": "7",
                "object_name": "哥里门街",
                "object_floor": "",
                "object_type": "buildingline",
                "coord_type": "0",
                "object_coord": "104.009148,1.40371",
                "coord_z": "30",
                "showtitle": "true",
                "monitormouseoverlap": "true",
                "showtitlerange": "0,9000"
                },
                {
                "object_id": "8",
                "object_name": "凯宝路",
                "object_floor": "",
                "object_type": "buildingline",
                "coord_type": "0",
                "object_coord": "104.005791,1.411388",
                "coord_z": "30",
                "showtitle": "false",
                "monitormouseoverlap": "true",
                "showtitlerange": "0,3000"
                },
                {
                "object_id": "9",
                "object_name": "联邦道",
                "object_floor": "",
                "object_type": "cameraLine",
                "coord_type": "0",
                "object_coord": "103.998375,1.413552",
                "coord_z": "30",
                "showtitle": "false",
                "monitormouseoverlap": "true",
                "showtitlerange": "0,3000"
                },
                {
                "object_id": "10",
                "object_name": "康宁通道",
                "object_floor": "",
                "object_type": "cameraLine",
                "coord_type": "0",
                "object_coord": "103.994385,1.422618",
                "coord_z": "30",
                "showtitle": "false",
                "monitormouseoverlap": "true",
                "showtitlerange": "0,3000"
                }]
                cloudRender.SuperAPI('RemoveAllPOI');
                poiData.forEach((el) => {
                cloudRender.SuperAPI('AddPOI', el)
                });
                cloudRender.SuperAPI('FocusAllPOI');

                break;

            case 'UpdatePOIStyle':
                cloudRender.SuperAPI('UpdatePOIStyle', 'poi_id', "alert");//POI点的Style, 需双方沟通约定//此项目中. Style: ①normal; ②alert
                break;

            case 'UpdataPOITitleInfo':
                cloudRender.SuperAPI('UpdataPOITitleInfo', 'poi_id', '更新POI点Title内容')
                break;

            case 'FocusPOI':
                cloudRender.SuperAPI('FocusPOI', 'poi_id', 120);
                break;

            case 'FocusAllPOI':
                cloudRender.SuperAPI('FocusAllPOI');
                break;

            case 'SetPOISelect':
                cloudRender.SuperAPI('SetPOISelect', 'poi_id', true);//true 选中 /false 未选中
                break;

            case 'GetPOIScreenRange':
                cloudRender.SuperAPI('GetPOIScreenRange', 'poi_id')
                break;

            case 'ShowPOI':
                cloudRender.SuperAPI('ShowPOI', 'poi_id')
                break;

            case 'HidePOI':
                cloudRender.SuperAPI('HidePOI', 'poi_id')
                break;

            case 'RemovePOI':
                cloudRender.SuperAPI('RemovePOI', 'poi_id')
                break;

            case 'RemoveAllPOI':
                cloudRender.SuperAPI('RemoveAllPOI');
                break;


            // 路径
            case 'AddPath':
                let Pathdata = {
                "object_id": "Path_id",   //路径id
                "coord_type": "0",//路径中坐标类型(0: 经纬度gis, 1: cad坐标, 2: UE4WorldPostion)
                "style_type": "2",//路径外观类型(1: 纯色式样 2: 箭头式样)
                "color": "green",//路径颜色(R,G,B颜色值, 0-1, 或 green, red, yellow, blue, gray)
                "width": "80.0",   //路径宽度(米)
                "points": [ //路径点数据(必须有顺序)
                {
                "coord": "103.979774,1.376703",//路径点的坐标(坐标类型需与该路径主体的coord_type相同)
                "coord_z": "40"//路径点高度(米)
                },
                {
                "coord": "103.981033,1.377549",
                "coord_z": "40"
                },
                {
                "coord": "103.981789,1.378412",
                "coord_z": "40"
                },
                {
                "coord": "103.98259,1.379714",
                "coord_z": "40"
                },
                {
                "coord": "103.983757,1.380564",
                "coord_z": "40"
                },
                {
                "coord": "103.9851,1.381237",
                "coord_z": "40"
                },
                {
                "coord": "103.986443,1.381956",
                "coord_z": "40"
                },
                {
                "coord": "103.988777,1.382789",
                "coord_z": "40"
                },
                {
                "coord": "103.989662,1.383826",
                "coord_z": "40"
                },
                {
                "coord": "103.9907,1.38526",
                "coord_z": "40"
                },
                {
                "coord": "103.992317,1.386147",
                "coord_z": "40"
                },
                {
                "coord": "103.993866,1.387661",
                "coord_z": "40"
                },
                {
                "coord": "103.994827,1.389451",
                "coord_z": "40"
                },
                {
                "coord": "103.995697,1.390826",
                "coord_z": "40"
                }
                ]}

                fetch('json/AddPath.json').then((res) => {
                return res.json()
                }).then(data => {
                data.forEach((ev) => {
                    cloudRender.SuperAPI('AddPath', ev);
                });
                })

                cloudRender.SuperAPI('RemovePath', 'Path_id');
                cloudRender.SuperAPI('AddPath', Pathdata);
                cloudRender.SuperAPI('FocusAllPath');

                break;

            case 'FocusPath':
                cloudRender.SuperAPI('FocusPath', 'Path_id', 2300);
                break;

            case 'FocusAllPath':
                cloudRender.SuperAPI('FocusAllPath');
                break;

            case 'ShowPath':
                cloudRender.SuperAPI('ShowPath', 'Path_id');
                break;

            case 'HidePath':
                cloudRender.SuperAPI('HidePath', 'Path_id');
                break;

            case 'RemovePath':
                cloudRender.SuperAPI('RemovePath', 'Path_id');
                break;

            case 'RemoveAllPath':
                cloudRender.SuperAPI('RemoveAllPath');
                break;


            // 图表 区域热力图
            case 'AddHeatMapand':
                let heatdata = {
                "object_id": "heatmap_id",  //区域热力图id
                "coord_type": "0",//区域热力图中坐标类型(0: 经纬度gis, 1: cad  坐标, 2: UE4WorldPostion)
                "heatmap_type": "1",//区域热力图样式类型(1: 经典类型(红绿热力图))
                "leftupper_coord": "103.930939,1.445202",//区域热力图范围左上坐标(坐标类型需与heatmap_type相同)
                "lowerright_coord": "104.030273,1.356276",//区域热力图范围右下坐标(坐标类型需与heatmap_type相同)
                "coord_z": "50.0",  //区域热力图Z轴值
                "brush_diameter": "1700.0",//区域热力点笔刷直径(米, 单个热力点覆盖直径)
                "heatpoint_minvalue": "1.00",//区域热力点取值范围最小值(此热力图中数值范围的最小值, 例如人流密度最小1(绿色接近透明), 最大1000(最红), 线性计算)
                "heatpoint_maxvalue": "100.0"//区域热力点取值范围最大值
                }

                let heatpointdata = {
                "object_id":"heatmap_id",   //要更新的区域热力图的id
                "data": [
                    {
                        "coord":"103.944847,1.427816",//区域热力数据点的坐标(坐标类型需与该热力图主体的coord_type相同)
                        "value":"18.2"  //区域热力数据点的值
                    },
                    {
                        "coord": "103.960556,1.426758",
                        "value":"18.2"
                    },
                    {
                        "coord": "103.976326,1.424438",
                        "value":"10.2"
                    },
                    {
                        "coord": "103.988388,1.420391",
                        "value":"18.2"
                    },
                    {
                        "coord": "104.01593,1.416165",
                        "value":"18.2"
                    },
                    {
                        "coord": "104.006607,1.401256",
                        "value":"18.2"
                    },
                    {
                        "coord": "103.990181,1.406069",
                        "value":"18.2"
                    },
                    {
                        "coord": "103.977501,1.414273",
                        "value":"18.9"
                    },
                    {
                        "coord": "103.954422,1.418586",
                        "value":"18.2"
                    },
                    {
                        "coord": "103.953194,1.405206",
                        "value":"18.2"
                    },
                    {
                        "coord": "103.977394,1.403728",
                        "value":"18.9"
                    },
                    {
                        "coord": "103.993462,1.397286",
                        "value":"18.2"
                    },
                    {
                        "coord": "104.004929,1.393703",
                        "value":"18.2"
                    },
                    {
                        "coord": "103.997902,1.379885",
                        "value":"18.2"
                    },
                    {
                        "coord": "103.981194,1.387105",
                        "value":"18.9"
                    },
                    {
                        "coord": "103.969437,1.386786",
                        "value":"18.2"
                    },
                    {
                        "coord": "103.955666,1.393992",
                        "value":"18.2"
                    },
                    {
                        "coord": "103.997902,1.379885",
                        "value":"18.2"
                    },
                    {
                        "coord": "104.006668,1.420812",
                        "value":"18.2"
                    },
                    {
                        "coord": "103.963943,1.415963",
                        "value":"18"
                    },
                    {
                        "coord": "103.965439,1.399254",
                        "value":"18"
                    },
                    {
                        "coord": "103.963852,1.399885",
                        "value":"18"
                    },
                    {
                        "coord": "103.977936,1.395037",
                        "value":"18"
                    },
                    {
                        "coord": "104.002518,1.411158",
                        "value":"18"
                    },
                    {
                        "coord": "103.969231,1.423601",
                        "value":"18"
                    },
                    {
                        "coord": "103.996826,1.415999",
                        "value":"18"
                    },
                    {
                        "coord": "103.994377,1.388525",
                        "value":"18"
                    },
                    {
                        "coord": "103.987045,1.380051",
                        "value":"13.2"
                    },
                    {
                        "coord": "103.977936,1.395037",
                        "value":"13.2"
                    },
                    {
                        "coord": "103.944641,1.41677",
                        "value":"13.2"
                    },
                    {
                        "coord": "103.949532,1.411833",
                        "value":"13.2"
                    },
                    {
                        "coord": "103.946274,1.40052",
                        "value":"13.2"
                    },
                    {
                        "coord": "103.961075,1.38541",
                        "value":"13.2"
                    },
                    {
                        "coord": "103.977028,1.378682",
                        "value":"13.2"
                    },
                    {
                        "coord": "103.997261,1.426439",
                        "value":"13.2"
                    },
                    {
                        "coord": "104.01403,1.407257",
                        "value":"13.2"
                    }]}

                cloudRender.SuperAPI('RemoveHeatMap', 'heatmap_id');
                cloudRender.SuperAPI('AddHeatMap', heatdata);
                cloudRender.SuperAPI('UpdateHeatMap', heatpointdata);
                cloudRender.SuperAPI('FocusHeatMap', 'heatmap_id', 8000);
                break;

            case 'UpdateHeatMap':
                let updateheatpointdata = {
                "object_id":"heatmap_id",   //要更新的区域热力图的id
                "data": [
                {
                    "coord":"103.944847,1.427816",//区域热力数据点的坐标(坐标类型需与该热力图主体的coord_type相同)
                    "value":"18.2"  //区域热力数据点的值
                },
                {
                    "coord": "103.960556,1.426758",
                    "value":"16"
                },
                {
                    "coord": "103.976326,1.424438",
                    "value":"10.2"
                },
                {
                    "coord": "103.988388,1.420391",
                    "value":"16"
                },
                {
                    "coord": "104.01593,1.416165",
                    "value":"16"
                },
                {
                    "coord": "104.006607,1.401256",
                    "value":"16"
                },
                {
                    "coord": "103.990181,1.406069",
                    "value":"16"
                },
                {
                    "coord": "103.977501,1.414273",
                    "value":"16"
                },
                {
                    "coord": "103.954422,1.418586",
                    "value":"16"
                },
                {
                    "coord": "103.953194,1.405206",
                    "value":"16"
                },
                {
                    "coord": "103.977394,1.403728",
                    "value":"16"
                },
                {
                    "coord": "103.993462,1.397286",
                    "value":"16"
                },
                {
                    "coord": "104.004929,1.393703",
                    "value":"16"
                },
                {
                    "coord": "103.997902,1.379885",
                    "value":"16"
                },
                {
                    "coord": "103.981194,1.387105",
                    "value":"16"
                },
                {
                    "coord": "103.969437,1.386786",
                    "value":"16"
                },
                {
                    "coord": "103.955666,1.393992",
                    "value":"16"
                },
                {
                    "coord": "103.997902,1.379885",
                    "value":"16"
                },
                {
                    "coord": "104.006668,1.420812",
                    "value":"16"
                },
                {
                    "coord": "103.963943,1.415963",
                    "value":"18"
                },
                {
                    "coord": "103.965439,1.399254",
                    "value":"18"
                },
                {
                    "coord": "103.963852,1.399885",
                    "value":"18"
                },
                {
                    "coord": "103.977936,1.395037",
                    "value":"18"
                },
                {
                    "coord": "104.002518,1.411158",
                    "value":"18"
                },
                {
                    "coord": "103.969231,1.423601",
                    "value":"18"
                },
                {
                    "coord": "103.996826,1.415999",
                    "value":"18"
                },
                {
                    "coord": "103.994377,1.388525",
                    "value":"18"
                },
                {
                    "coord": "103.987045,1.380051",
                    "value":"11.2"
                },
                {
                    "coord": "103.977936,1.395037",
                    "value":"11.2"
                },
                {
                    "coord": "103.944641,1.41677",
                    "value":"11.2"
                },
                {
                    "coord": "103.949532,1.411833",
                    "value":"11.2"
                },
                {
                    "coord": "103.946274,1.40052",
                    "value":"11.2"
                },
                {
                    "coord": "103.961075,1.38541",
                    "value":"11.2"
                },
                {
                    "coord": "103.977028,1.378682",
                    "value":"11.2"
                },
                {
                    "coord": "103.997261,1.426439",
                    "value":"11.2"
                },
                {
                    "coord": "104.01403,1.407257",
                    "value":"11.2"
                },
                {
                    "coord": "103.99015,1.37889",
                    "value":"15"
                },
                {
                    "coord": "103.984024,1.416714",
                    "value":"15"
                },
                {
                    "coord": "104.001312,1.423884",
                    "value":"15"
                },
                {
                    "coord": "103.987907,1.429264",
                    "value":"15"
                }]}

                cloudRender.SuperAPI('UpdateHeatMap', updateheatpointdata);
                break;

            case 'FocusHeatMap':
                cloudRender.SuperAPI('FocusHeatMap', 'heatmap_id', 8000);
                break;

            case 'FocusAllHeatMap':
                cloudRender.SuperAPI('FocusAllHeatMap');
                break;

            case 'ShowHeatMap':
                cloudRender.SuperAPI('ShowHeatMap', 'heatmap_id');
                break;

            case 'HideHeatMap':
                cloudRender.SuperAPI('HideHeatMap', 'heatmap_id');
                break;

            case 'RemoveHeatMap':
                cloudRender.SuperAPI('RemoveHeatMap', 'heatmap_id');
                break;

            case 'RemoveAllHeatMap':
                cloudRender.SuperAPI('RemoveAllHeatMap');
                break;


            // 图表 路径热力图
            case 'AddRoadHeatMap':
                let RoadHeatMapData = {
                "object_id": "roadheatmap_id",  //路径热力图id
                "coord_type": "0",//坐标类型（0: 经纬度gis, 1: cad坐标, 2: UE4WorldPostion）
                "width": "50.0",    //路径宽度(米)
                "coord_z": "40.0",  //路径高度(米)
                "roadheatmap_define": [ //定义路径热力图采用多少级颜色
                {
                    "level": "1",   //级别类型名称
                    "color": "green",//颜色(R,G,B颜色值, 0-1, 或 green,red,yellow)
                },
                {
                    "level": "2",
                    "color": "yellow"
                },
                {
                    "level": "3",
                    "color": "red"
                }
                ],
                "points": [//路径热力图点位数据(在此定义该路径热力图中路径点, 坐标类型需与coord_type相同)
                {
                    "coord": "104.00489,1.373162",//坐标类型需与该热力图主体的coord_type相同
                    "level": "1"//采用哪一种颜色(需与路径热力图 roadheatmap_define 中定义的 level 对应)
                },
                {
                "coord": "104.000237,1.371724",
                "level": "2"
                },
                {
                "coord": "103.996117,1.37196",
                "level": "1"
                },
                {
                "coord": "103.990463,1.371789",
                "level": "1"
                },
                {
                "coord": "103.984932,1.371889",
                "level": "3"
                },
                {
                "coord": "103.980003,1.37644",
                "level": "2"
                },
                {
                "coord": "103.976219,1.377955",
                "level": "1"
                },
                {
                "coord": "103.97094,1.379524",
                "level": "1"
                },
                {
                "coord": "103.966621,1.382405",
                "level": "1"
                },
                {
                "coord": "103.960609,1.383276",
                "level": "3"
                },
                {
                "coord": "103.954483,1.383789",
                "level": "3"
                },
                {
                "coord": "103.953041,1.383817",
                "level": "1"
                },
                {
                "coord": "103.946198,1.388214",
                "level": "2"
                },
                {
                "coord": "103.946342,1.389259",
                "level": "1"
                },
                {
                "coord": "103.949097,1.39078",
                "level": "1"
                },
                {
                "coord": "103.951401,1.392533",
                "level": "1"
                },
                {
                "coord": "103.957123,1.38711",
                "level": "2"
                },
                {
                "coord": "103.960747,1.390996",
                "level": "1"
                },
                {
                "coord": "103.963821,1.390304",
                "level": "1"
                },
                {
                "coord": "103.967712,1.389811",
                "level": "1"
                },
                {
                "coord": "103.969963,1.388396",
                "level": "1"
                },
                {
                "coord": "103.970886,1.388114",
                "level": "1"
                },
                {
                "coord": "103.974792,1.388016",
                "level": "3"
                },
                {
                "coord": "103.977959,1.385974",
                "level": "1"
                }
                ]}

                let RoadHeatMapData2 = {
                "object_id": "roadheatmap_id2",
                "coord_type": "0",
                "width": "50.0",
                "coord_z": "40.0",
                "roadheatmap_define": [
                {
                    "level": "1",
                    "color": "green",
                },
                {
                    "level": "2",
                    "color": "yellow"
                },
                {
                    "level": "3",
                    "color": "red"
                }
                ],
                "points": [
                {
                    "coord": "104.005302,1.39313",
                    "level": "2"
                },
                {
                    "coord": "103.994682,1.400469",
                    "level": "2"
                },
                {
                    "coord": "103.981407,1.405351",
                    "level": "2"
                },
                {
                    "coord": "103.977585,1.405142",
                    "level": "3"
                },
                {
                    "coord": "103.972504,1.401924",
                    "level": "3"
                },
                {
                    "coord": "103.970634,1.401059",
                    "level": "3"
                },
                {
                    "coord": "103.967819,1.405705",
                    "level": "1"
                },
                {
                    "coord": "103.958847,1.409673",
                    "level": "1"
                }
                ]}

                cloudRender.SuperAPI('RemoveRoadHeatMap', 'roadheatmap_id');
                cloudRender.SuperAPI('AddRoadHeatMap', RoadHeatMapData);
                cloudRender.SuperAPI('AddRoadHeatMap', RoadHeatMapData2);
                cloudRender.SuperAPI('FocusAllRoadHeatMap');

                break;

            case 'UpdateRoadHeatMap':
                let UpdateRoadHeatPointData = {
                "object_id": "roadheatmap_id",//要更新的路径热力图的id
                "points": [
                {
                    "level": "2"//采用哪一种颜色(需与路径热力图 roadheatmap_define 中定义的 level 对应)
                },
                {
                    "level": "2"
                },
                {
                    "level": "2"
                },
                {
                    "level": "2"
                },
                {
                    "level": "3"
                },
                {
                    "level": "2"
                },
                {
                    "level": "2"
                },
                {
                    "level": "2"
                },
                {
                    "level": "2"
                },
                {
                    "level": "3"
                },
                {
                    "level": "3"
                },
                {
                    "level": "2"
                },
                {
                    "level": "2"
                },
                {
                    "level": "2"
                },
                {
                    "level": "2"
                },
                {
                    "level": "2"
                },
                {
                    "level": "2"
                },
                {
                    "level": "2"
                },
                {
                    "level": "2"
                },
                {
                    "level": "2"
                },
                {
                    "level": "2"
                }
                ]}

                cloudRender.SuperAPI('UpdateRoadHeatMap', UpdateRoadHeatPointData);

                break;

            case 'FocusRoadHeatMap':
                cloudRender.SuperAPI('FocusRoadHeatMap', 'roadheatmap_id', 6000);
                break;

            case 'FocusAllRoadHeatMap':
                cloudRender.SuperAPI('FocusAllRoadHeatMap');
                break;

            case 'ShowRoadHeatMap':
                cloudRender.SuperAPI('ShowRoadHeatMap', 'roadheatmap_id');
                break;

            case 'HideRoadHeatMap':
                cloudRender.SuperAPI('HideRoadHeatMap', 'roadheatmap_id');
                break;

            case 'RemoveRoadHeatMap':
                cloudRender.SuperAPI('RemoveRoadHeatMap', 'roadheatmap_id');
                break;

            case 'RemoveAllRoadHeatMap':
                cloudRender.SuperAPI('RemoveAllRoadHeatMap');
                break;


            // 图表 迁徙图
            case 'AddMigrationMap':
                let migrationmapdata = {
                "object_id": "migrationmap_id", //迁徙图id
                "coord_type": "0",//坐标类型(0: 经纬度gis, 1: cad坐标, 2: UE4WorldPostion)
                "style_type": "2",//迁徙图外观类型(1:波浪线型, 2:箭头型)
                "start_coord": "103.937965,1.355707",//迁徙图起点(出发点)坐标位置(坐标类型需与coord_type相同)
                "start_coord_z": "25.0",    //高度(米)
                "targetdata": [ //迁徙图目标点数据数组
                {
                    "target_coord": "103.869774,1.313856",//迁徙图目标点坐标位置(坐标类型需与coord_type相同)
                    "target_coord_z": "25.0",   //高度(米)
                    "mark_size": "100.0",   //目标点标志直径(米)
                    "mark_color": "1, 0.5, 0.25",//目标点颜色 (R,G,B颜色值, 0-1, 或 green, red, yellow, blue, gray)
                    "line_width": "120.0",   //迁徙图连线宽度(米)
                    "line_color": "1, 0.5, 0.25",//迁徙图连线颜色 (R,G,B颜色值, 0-1, 或 green, red, yellow, blue, gray)
                    "curvature_adjustment": "0.2"//迁徙图连线曲度调节(取值范围 -1 ~ 1 0为默认曲度, 此值越小(最小-1)曲线越平, 反之曲线越陡峭)
                },
                {
                    "target_coord": "103.896255,1.327699",
                    "target_coord_z": "25",
                    "mark_size": "100.0",
                    "mark_color": "blue",
                    "line_width": "160.0",
                    "line_color": "blue",
                    "curvature_adjustment": "0.2"
                },
                {
                    "target_coord": "103.931488,1.322968",
                    "target_coord_z": "25",
                    "mark_size": "100.0",
                    "mark_color": "1, 0.5, 0.25",
                    "line_width": "120.0",
                    "line_color": "1, 0.5, 0.25",
                    "curvature_adjustment": "0.2"
                },
                {
                    "target_coord": "103.947823,1.301973",
                    "target_coord_z": "25",
                    "mark_size": "100.0",
                    "mark_color": "blue",
                    "line_width": "160.0",
                    "line_color": "blue",
                    "curvature_adjustment": "0.2"
                },
                {
                    "target_coord": "103.962997,1.32667",
                    "target_coord_z": "25",
                    "mark_size": "100.0",
                    "mark_color": "1, 0.5, 0.25",
                    "line_width": "120.0",
                    "line_color": "1, 0.5, 0.25",
                    "curvature_adjustment": "0.2"
                }
                ]}

                cloudRender.SuperAPI('RemoveMigrationMap', 'migrationmap_id');
                cloudRender.SuperAPI('AddMigrationMap', migrationmapdata);
                cloudRender.SuperAPI('FocusAllMigrationMap');

                break;

            case 'FocusMigrationMap':
                cloudRender.SuperAPI('FocusMigrationMap', 'migrationmap_id', 8000);
                break;

            case 'FocusAllMigrationMap':
                cloudRender.SuperAPI('FocusAllMigrationMap');
                break;

            case 'ShowMigrationMap':
                cloudRender.SuperAPI('ShowMigrationMap', 'migrationmap_id');
                break;

            case 'HideMigrationMap':
                cloudRender.SuperAPI('HideMigrationMap', 'migrationmap_id');
                break;

            case 'RemoveMigrationMap':
                cloudRender.SuperAPI('RemoveMigrationMap', 'migrationmap_id');
                break;

            case 'RemoveAllMigrationMap':
                cloudRender.SuperAPI('RemoveAllMigrationMap');
                break;


            // 区域
            case 'AddRange':
                let rangedata = {
                "object_id": "range_id",    //区域id
                "coord_type": "0",//区域中坐标类型(0: 经纬度gis, 1: cad坐标, 2: UE4WorldPostion)
                "style_type": "1",//区域外观类型(1: 默认样式, 2: 流光围栏样式)
                "color": "yellow",//区域颜色(R,G,B颜色值, 0-1, 或 green, red, yellow, blue, gray)
                "width": "5.0",    //区域底边宽度(米)
                "rangehight":"50",  //区域围栏高度 (米)
                "fillarea":"false",  //是否填充区域底部
                "points": [ //区域点数据(必须有顺序)
                {
                    "coord": "103.979141,1.389983",//区域点的坐标(坐标类型需与该区域主体的coord_type相同)
                    "coord_z": "1.0"   //区域点高度(米)
                },
                {
                    "coord": "103.978218,1.388245",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.978065,1.385906",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.977646,1.383595",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.976814,1.381615",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.97757,1.380727",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.981339,1.37893",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.983841,1.380299",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.986977,1.382102",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.989128,1.38291",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.990654,1.385197",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.993721,1.387274",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.993271,1.388337",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.992119,1.388628",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.990585,1.38834",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.987755,1.388716",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.98568,1.389631",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.984215,1.389984",
                    "coord_z": "1.0"
                },
                {
                    "coord": "103.982224,1.389961",
                    "coord_z": "1.0"
                }
                ]}

                fetch('json/AddRange.json').then((res) => {
                return res.json()
                }).then(data => {
                data.forEach((ev) => {
                    cloudRender.SuperAPI('AddRange', ev);
                });
                })

                cloudRender.SuperAPI('RemoveRange', 'range_id');
                cloudRender.SuperAPI('AddRange', rangedata);
                cloudRender.SuperAPI('FocusAllRange');

                break;

            case 'FocusRange':
                cloudRender.SuperAPI('FocusRange', 'range_id', 2200);
                break;

            case 'FocusAllRange':
                cloudRender.SuperAPI('FocusAllRange');
                break;

            case 'ShowRange':
                cloudRender.SuperAPI('ShowRange', 'range_id');
                break;

            case 'HideRange':
                cloudRender.SuperAPI('HideRange', 'range_id');
                break;

            case 'RemoveRange':
                cloudRender.SuperAPI('RemoveRange', 'range_id');
                break;

            case 'RemoveAllRange':
                cloudRender.SuperAPI('RemoveAllRange');
                break;


            // 圆形区域
            case 'AddCircularRange':
                let circularrangedata = {
                "object_id": "circularrange_id",    //区域id
                "coord_type": "0",//坐标类型(0: 经纬度gis, 1: cad坐标, 2: UE4WorldPostion)
                "style_type": "1",//区域外观类型(1: 默认样式; 2: 流光样式)
                "color": "blue",//区域颜色(R,G,B颜色值, 0-1, 或 green, red, yellow, blue, gray)
                "width": "5.0",    //区域底边宽度(米)
                "rangehight": "120", //区域围栏高度 (米)
                "fillarea": "false", //是否填充区域底部
                "center": "103.978294,1.386019",//圆心坐标 坐标类型需与该热力图主体的coord_type相同
                "coord_z": "0.0",  //区域z高度(米)
                "radius": "500" //半径(米)
                }

                fetch('json/AddCircularRange.json').then((res) => {
                return res.json()
                }).then(data => {
                data.forEach((ev) => {
                    cloudRender.SuperAPI('AddCircularRange', ev);
                });
                })

                cloudRender.SuperAPI('RemoveCircularRange', 'circularrange_id');
                cloudRender.SuperAPI('AddCircularRange', circularrangedata);
                setTimeout(() => cloudRender.SuperAPI('FocusAllCircularRange'),5e2);
                break;

            case 'FocusCircularRange':
                cloudRender.SuperAPI('FocusCircularRange', 'circularrange_id', 1500);
                break;

            case 'FocusAllCircularRange':
                cloudRender.SuperAPI('FocusAllCircularRange');
                break;

            case 'ShowCircularRange':
                cloudRender.SuperAPI('ShowCircularRange', 'circularrange_id');
                break;

            case 'HideCircularRange':
                cloudRender.SuperAPI('HideCircularRange', 'circularrange_id');
                break;

            case 'RemoveCircularRange':
                cloudRender.SuperAPI('RemoveCircularRange', 'circularrange_id');
                break;

            case 'RemoveAllCircularRange':
                cloudRender.SuperAPI('RemoveAllCircularRange');
                break;


            // 特效
            case 'AddEffect':
                let effectdata = {
                "object_id": "effect_id",   //场景特效id
                "coord_type": "0",//坐标类型(0: 经纬度gis, 1: cad坐标, 2: UE4WorldPostion)
                "style_type": "arrow",//场景特效类型(shield, fire, arrow, alarm, circle, pyramid 详见示意图)
                "width": "200.0",    //特效直径(米)
                "coord": "103.976128,1.390277",//坐标位置(坐标类型需与coord_type相同)
                "coord_z": "5.0",   //高度(米)
                "yawangle": "0.0"   //特效绕纵向旋转角度(0-360)
                }

                fetch('json/AddEffect.json').then((res) => {
                return res.json()
                }).then(data => {
                data.forEach((ev) => {
                    cloudRender.SuperAPI('AddEffect', ev);
                });
                })

                cloudRender.SuperAPI('RemoveEffect', 'effect_id');
                cloudRender.SuperAPI('AddEffect', effectdata);
                setTimeout(() => cloudRender.SuperAPI('FocusAllEffect'),5e2);
                break;

            case 'FocusEffect':
                cloudRender.SuperAPI('FocusEffect', 'effect_id', 2000);
                break;

            case 'FocusAllEffect':
                cloudRender.SuperAPI('FocusAllEffect');
                break;

            case 'ShowEffect':
                cloudRender.SuperAPI('ShowEffect', 'effect_id');
                break;

            case 'HideEffect':
                cloudRender.SuperAPI('HideEffect', 'effect_id');
                break;

            case 'RemoveEffect':
                cloudRender.SuperAPI('RemoveEffect', 'effect_id');
                break;

            case 'RemoveAllEffect':
                cloudRender.SuperAPI('RemoveAllEffect');
                break;


            // 控件
            case 'SetEnvTime':
                cloudRender.SuperAPI('SetEnvTime', '17:45'); //8:00 (早晨) //12:00 (中午) //16:00 (黄昏) //20:00 (夜晚)
                break;

            case 'SetEnvWeather':
                cloudRender.SuperAPI('SetEnvWeather', '0'); //0 - 晴天 //1 - 多云 //2 - 雨天 //3 - 雪天
                break;


            // 控件 测量工具
            case 'StartMeasureTool':
                cloudRender.SuperAPI('StartMeasureTool', '0');//0-经纬度,  1-CAD的XYZ坐标
                break;

            case 'EndMeasureTool':
                cloudRender.SuperAPI('EndMeasureTool');
                break;

            case 'ClearAll':
                cloudRender.SuperAPI('RemoveAllPOI');   //删除当前模块内全部POI点
                cloudRender.SuperAPI('RemoveAllPath'); //删除路径
                cloudRender.SuperAPI('RemoveAllHeatMap');  //删除区域热力图
                cloudRender.SuperAPI('RemoveAllRoadHeatMap');  //删除路径热力图
                cloudRender.SuperAPI('RemoveAllMigrationMap'); //删除迁徙图
                cloudRender.SuperAPI('RemoveAllRange');    //删除区域轮廓
                cloudRender.SuperAPI('RemoveAllCircularRange');    //删除圆形区域轮廓
                cloudRender.SuperAPI('RemoveAllEffect');   //删除特效
                cloudRender.SuperAPI('EndMeasureTool'); //关闭测量工具
                editor.setValue('//清除全部元素');
                break;

            case 'specialChannel':
                let data ={
                    "actionname": "changeScene",  //关键字
                    "id": "1" //0外部,1,俯视,2,室内漫游
                }
                cloudRender.SuperAPI('specialChannel',data); 
        }
    }

}).catch(e => {
    console.log(e);
});
