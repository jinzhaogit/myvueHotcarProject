<template>
    <div class="section">
        <!--能力-->
        <section class="ability">
            <div class="item">
                <img src="@/assets/img/android.png" />
                <span>安卓导航</span>
            </div>
            <div class="item">
                <img src="@/assets/img/apple.png" />
                <span>苹果车载</span>
            </div>
            <div class="item">
                <img src="@/assets/img/html5.png" />
                <span>HTML5软件</span>
            </div>
            <div class="item">
                <img src="@/assets/img/weixin.png" />
                <span>微信公众号</span>
            </div>
        </section>
        <!--宣言-->
        <section class="slogn">
            <p>最具专业的汽车制作开发团队,为您提供一站式汽车舒服度开发服务</p>
            <p>The most professional team, to provide you with one-stop mobile car development services</p>
        </section>
    </div>
</template>
<script>
    export default {
        name: 'HomeAbility',
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>
<style>
    /*能力*/
    .ability{
        display: flex;
        margin-bottom: 65px;
    }
    .ability .item{
        flex: 1;
        width: 240px;
        height: 220px;
        margin-right: 15px;
        background-color: #6c9d5f;
    }
    .ability .item:nth-child(2){
        background-color: #7e7f88;
    }
    .ability .item:nth-child(3){
        background-color: #e55e35;
    }
    .ability .item:nth-child(4){
        background-color: #23c184;
    }
    .ability .item img{
        display: block;
        margin: 50px auto 20px;
    }
    .ability .item span{
        display: block;
        font-size: 16px;
        text-align: center;
        color: white;
    }
    /*宣言*/
    .slogn{
        text-align: center;
        font-size: 16px;
        height: 65px;
        margin-bottom: 50px;
    }
    .slogn p:first-child{
        font-size: 22px;
        color: #3c404f;
    }
</style>