<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>VUE+css3滑动导航</title>
    <script src="http://www.jq22.com/jquery/vue.min.js"></script>
    <style>
    html,
    body,
    ul,
    li {
        padding: 0;
        margin: 0;
        list-style: none
    }

    #menu {
        width: 80%;
        background: #024067;
        box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
        padding: 0 10%;
    }

    #menu ul {
        display: flex;
        position: relative
    }

    #menu ul li {
        flex: 1;
        line-height: 40px;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
        text-align: center;
        position: relative;
        z-index: 2
    }

    .menubg {
        position: absolute;
        background: #8f0000;
        height: 40px;
        top: 0;
        z-index: 1;
        transition: all .4s;
        left: 0
    }
    .se{
    	text-align: center
    }
    </style>
</head>

<body>
    <div id="app">
        <div id="menu">
            <ul>
                <li v-for="(item,index) in menulist" @click="movebg(item,index)">
                    {{item.title}}
                </li>
                <div class="menubg"></div>
            </ul>
        </div>
        <div class="se">
            选中的ID为：{{id}}
        </div>
    </div>
    <script>
    var app = new Vue({
        el: '#app',
        data: {
            id: 1,
            menulist: [{
                title: 'UI',
                value: 1
            }, {
                title: '输入',
                value: 2
            }, {
                title: '媒体',
                value: 3
            }, {
                title: '导航',
                value: 4
            }, {
                title: '其他',
                value: 5
            }, {
                title: '网页模板',
                value: 6
            }, {
                title: '常用代码',
                value: 7
            }]
        },
        mounted() {
            //获取menu宽度
            let menuwidth = document.querySelector("#menu ul").offsetWidth
            //获取li
            let liwidth = document.querySelectorAll("#menu li")
            //背景
            let bgWidth = document.querySelector(".menubg")
            //设置背景的宽度
            bgWidth.style.width = liwidth[0].offsetWidth + 'px'
        },
        methods: {
            movebg(item, index) {
                let bgWidth = document.querySelector(".menubg")
                let selfLeft = document.querySelectorAll("#menu li")[index].offsetLeft
                bgWidth.style.left = selfLeft + 'px'
                this.id = item.value
            }
        }
    })
    </script>
</body>

</html>