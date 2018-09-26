<template>
    <div>
        <div class="footer ">
            <ul class="clearfix">
                <li><a href="index.htm">网站首页</a> | </li>
                <li> <a href="app/index.htm">APP开发服务</a> | </li>
                <li><a href="solutions/index.htm">APP解决方案</a> |</li>
                <li><a href="appcase/index.htm">APP案例</a> | </li>
                <li><a href="news/index.htm">APP资讯</a> | </li>
                <li><a href="sitemap.html">网站地图</a> |</li>
                <li><a href="#">TAG标签</a></li>
            </ul>
            <span>
		    	咨询电话：400-9999-888 | 在线客服 (QQ:109648888)
		    </span>
            <div class="logg">
                <img src="@/assets/img/QQ.png" />&nbsp;
                <img src="@/assets/img/weibo.png" />
                <img src="@/assets/img/logo_foot.png" />
            </div>
        </div>
        <div class="end">
            <p>青岛APP开发公司哪家好，首选青岛软件，青岛APP开发品牌服务商，提供青岛APP开发一站式服务</p>
            <p>2014@ 青岛星火软件科技有限公司|鲁ICP备14095625号</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HomeFooter',
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>
<style>
    /*脚部标注*/
    .footer{
        height: 218px;
        padding-top: 22px;
        background-color: #575e70;
        font-size: 16px;
        color: white;
    }
    .footer ul{
        width: 702px;
        margin: 0 auto;
        display: block;
    }
    .footer ul li{
        float: left;
    }
    .footer ul li a{
        color: white;
        padding: 10px;
    }
    .footer span{
        display: block;
        height: 30px;
        width: 390px;
        margin: 10px auto;
    }
    .footer .logg img:nth-child(1){
        margin-left: 14%;
    }
    .footer .logg img:nth-child(3){
        position: relative;
        bottom: 50px;
        margin-left: 76%;
    }
    .end{
        background-color: #3C404F;
        height: 54px;
        padding-top: 14px;
        padding-bottom: 28px;
    }
    .end p{
        margin: 0 auto;
        height: 25px;
        width: 530px;
    }
    .end p:last-child{
        width: 305px;
    }
</style>