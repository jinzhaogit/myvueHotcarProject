<template>
    <div class="section">
        <section class="lists clearfix">
            <h2>成功案例<span>success</span><span>星火软件 > APP咨询  > </span></h2>
            <ul>
                <li>全部咨询</li>
                <li>公司新闻</li>
                <li>行业动态</li>
                <li>产品技术</li>
                <li>问题解答</li>
                <li>全部咨询</li>
                <li>公司新闻</li>
                <li>行业动态</li>
                <li>产品技术</li>
                <li>问题解答</li>
                <li>产品技术</li>
                <li>问题解答</li>
            </ul>
        </section>
        <div class="cases">
            <ul v-for="i in 3">
                <li v-for="item in (list.slice(`${3*(i-1)}`,`${(i)*3}`))" :key="item.id">
                    <img :src="(item).img_url" />
                    <h3>{{(item).title}}</h3>
                    <span>{{item.cases_desc}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'caseList',
        props:{
            list:Array,
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
    /*成功案例*/
    .cases{
        margin-top: 39px;
        margin-bottom: 20px;
    }
    .cases ul{
        display: flex;
    }
    .cases ul li{
        flex: 1;
        width: 287px;
        height: 255px;
        margin-left: 69px;
    }
    .cases ul li:nth-child(1){
        margin-left: 0;
    }
    .cases ul li img{
        width: 100%;
        height: 170px;
    }
    .cases ul li h3{
        color: #3FA204;
        line-height: 13px;
        height: 13px;
        padding: 10px;
    }
    .cases ul li span{
        overflow: hidden;
        height: 33px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
    }
    .listbtn{
        width: 150px;
        height: 40px;
        background-color: #59c46c;
        color: #fff;
        margin: 10px 43%;
    }
</style>