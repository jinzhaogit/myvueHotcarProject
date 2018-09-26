<template>
    <div>
        <div class="section">
            <section class="problem clearfix">
                <h2>问题解答<span>更多></span></h2>
                <div class="pleft">
                    <div class="pleft_t" v-for="item in proList.slice(0,2)">
                        <img src="@/assets/img/2-16032616450Q26-lp.jpg" />
                        <div class="pt">
                            <h3><span>03-31</span>{{item.title}}</h3>
                            <p>{{item.cases_desc}}</p>
                        </div>

                    </div>

                </div>
                <div class="pright">
                    <ul>
                        <li v-for="item in proList.slice(2)"><a href="#">{{item.title}}</a></li>
                        <li><a href="#">只做一件事</a> <span>:让您的APP开发省烦恼</span></li>
                        <li><a href="#">QQ在线咨询</a></li>
                    </ul>
                </div>
            </section>
            <ul class="news">
                <li class="nli" v-for="i in 3">
                    <h2>公司新闻<span>更多></span></h2>
                    <ul>
                        <li v-for="item in duoList.slice((i-1)*5,i*5)">{{item.title}}</li>
                    </ul>
                </li>

            </ul>
        </div>
        <!--友情链接-->
        <div class="friend">
            <h2>友情链接</h2>
            <ul>
                <li>青岛手机APP开发</li>
                <li>广州手机APP开发</li>
                <li>青岛手机APP开发</li>
                <li>天津手机APP开发</li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'HomeProblem',
        props:{
            proList:Array,
            duoList:Array
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
    /*问题解答*/
    .problem{
        margin-bottom: 40px;
    }
    .problem .pleft{
        border-top: 1px solid #ccc;
        height: 200px;
        width: 585px;
        float: left;
    }
    .problem .pleft .pleft_t{
        margin: 30px 0;
    }
    .problem .pleft .pleft_t img{
        width: 89px;
        height: 56px;
        float: left;
        border: 1px solid #ccc;
        margin-right: 10px;
    }
    .problem .pleft .pleft_t .pt h3 span{
        display: inline-block;
        width: 80px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border: 1px solid #ccc;
        border-radius: 20px;
        font-size: 14px;
        background-color: #8ad698;
        color: white;
    }
    .problem .pleft .pleft_t .pt p{
        overflow: hidden;
        height: 33px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
    }
    .problem .pright{
        float: right;
        border-left: 1px solid #ccc;
        padding-left: 30px;
        width: 365px;
        height: 200px;
        font-size: 14px;
    }
    .problem .pright li{
        height: 30px;
        line-height: 30px;
    }
    .problem .pright li:nth-child(4){
        font-size: 20px;
        height: 50px;
        line-height: 50px;
    }
    .problem .pright li:nth-child(4) span{
        color: #8ad698;
    }
    /*新闻*/
    .news{
        display: flex;
    }
    .news .nli{
        flex: 1;
        width: 300px;
        height: 236px;
        margin-left: 30px;
        margin-right: 22px;
    }
    .news .nli h2{
        border-bottom: 1px solid #ccc;
        margin-bottom: 20px;
    }
    .news li ul li{
        font-size: 14px;
        color: rgb(120,120,120);
        height: 25px;
        line-height: 25px;
    }
    /*友情链接*/
    .friend{
        height: 100px;
        background-color: white;
        padding-left: 14%;
    }
    .friend h2{
        height: 21px;
        font-size: 16px;
        padding-bottom: 20px;
        margin-left: 160px;
    }
    .friend h2:before{
        content: '';
        display: inline-block;
        width: 5px;
        height: 18px;
        line-height: 18px;
        margin: -3px 5px;
        background-color:#8ad698;
    }
    .friend ul{
        margin-left: 160px;
    }
    .friend ul li{
        float: left;
        font-size: 12px;
        margin: 5px;
        width: 100px;
    }
</style>