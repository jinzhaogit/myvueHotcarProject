<template>
    <!--轮播图-->
    <div id="slideBox" class="slideBox">
        <div class="hd">
            <ul><li></li><li></li></ul>
        </div>
        <div class="bd">
            <ul>
                <li><a href="#" target="_blank"><img src="@/assets/img/banner01.jpg" /></a></li>
                <li><a href="#" target="_blank"><img src="@/assets/img/bg_solutions.png"/></a></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HomeBanner',
        data(){
            return{

            }
        },
        methods:{

        }
    }
</script>
<style>
    /*轮播图*/
    .slideBox{ width:100%; height:360px; overflow:hidden; position:relative;margin-bottom: 50px;  }
    .slideBox .hd{ height:15px; overflow:hidden; position:absolute; left:48%; bottom:10px; z-index:1;}
    .slideBox .hd ul{ overflow:hidden; zoom:1;}
    .slideBox .hd ul li{ float:left; margin-right:10px;  width:15px; height:15px; line-height:15px; text-align:center; background:#fff; cursor:pointer;border-radius: 50%; }
    .slideBox .hd ul li.on{ background:#7E7F88; color:#fff; }
    .slideBox .bd{ position:relative; height:100%; z-index:0;   }
    .slideBox .bd li{ zoom:1; vertical-align:middle; }
    .slideBox .bd img{display: block;width: 100%;height: 360px;}
</style>