<template>
    <div class="section">
        <!--头部-->
        <div class="header">
            <span>欢迎来到，本田汽车开发公司</span>
            <span>服务热线：400-9999-888</span>
            <div class="nav">
                <img src="@/assets/img/logo.gif" />
                <ul>
                    <li><router-link to="/brief"><span>关于本田</span></router-link></li>
                    <li><router-link to="/news"><span>行情咨询</span></router-link></li>
                    <li><router-link to="/cases"><span>成功案例</span></router-link></li>
                    <li><router-link to="/"><span class="active">首页</span></router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HomeHeader',
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>
<style>
    .section{
        width: 1060px;
        margin: 0 auto;
    }
    .section .header{
        height: 100px;
    }
    .section .header span:first-child{
        height: 35px;
        width: 250px;
        line-height: 35px;
    }
    .section .header span:nth-child(2){
        height: 35px;
        width: 234px;
        line-height: 35px;
        float: right;
        padding-right: 32px;
        position: relative;
    }
    .section .header span:nth-child(2):after{
        content: '';
        position: absolute;
        top: 4px;
        right: 3px;
        display: block;
        height: 25px;
        width: 121px;
        line-height: 35px;
        background-image: url(../../assets/img/QQ_head.png);
    }
    .section .header .nav{
        height: 64px;
        font-size: 16px;
    }
    .section .header .nav img{
        float: left;
    }
    .section .header .nav ul li{
        float: right;
        display: inline-block;
        width: 85px;
        height: 64px;
        line-height: 64px;
        text-align: center;
    }
    .section .header .nav ul li span.active{
        border-bottom: 2px solid #777;
        padding-bottom: 5px;
    }
</style>