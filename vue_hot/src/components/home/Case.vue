<template>
    <div class="section">
        <!--最新案例-->
        <section class="case">
            <h2>最新案例<span>></span></h2>
            <ul>
                <li v-for="item in (imgList.slice(0,8))" :key="item.id"><img :src="item.img_url" /></li>
            </ul>
        </section>
    </div>
</template>
<script>
    export default {
        name: 'HomeCase',
        props:{
            imgList:Array
        },
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>
<style>
    /*最新案例*/
    .case{
        height: 360px;
        margin-bottom: 85px;
    }
    .case span{
        float: right;
        height: 30px;
        width: 30px;
        line-height: 30px;
        border: 2px solid #ccc;
        border-radius: 50%;
        text-align: center;
    }
    .case ul{
        padding: 25px;
        border-top: 1px solid #ccc;
    }
    .case ul li{
        width: 235px;
        height: 145px;
        overflow: hidden;
        float: left;
        margin-right: 20px;
        margin-bottom: 20px;
    }
    .case ul li:nth-child(4n){
        margin-right: 0;
    }
    .case ul li:nth-last-child(-n+4){
        margin-bottom: 0;
    }
    .case ul li img{
        border: 1px solid #ccc;
        border-radius: 3px;
        width:100%;
    }
</style>