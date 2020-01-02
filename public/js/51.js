"use strict";
const params = new URLSearchParams(location.search);

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
                document.querySelector('body').classList.remove('fixed');
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
let renderPath = 'Renderers/Any/5e04291a69175c2c246ed88d/';
let staticUserName = 'guest';
let staticPwd = '123456';


SuperAPI_StartRenderCloud_GetUrl();

const cloudBtn = document.querySelector('.cloud-btn');
var cloudRender = new cloudRenderer('player', 0);
cloudBtn.addEventListener('click', (event) => {
    event.preventDefault();
    cloudRender.SuperAPI('StartRenderCloud', sessionStorage.getItem('cloudurl'));
    cloudBtn.textContent = 'Loading ...';
}, true)
