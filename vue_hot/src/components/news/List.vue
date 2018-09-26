<template>
    <!--咨询-->
    <div class="section">
        <section class="lists clearfix">
            <h2>资讯动态<span>news</span><span>星火软件 > APP咨询  > </span></h2>
            <ul>
                <li>全部咨询</li>
                <li>公司新闻</li>
                <li>行业动态</li>
                <li>产品技术</li>
                <li>问题解答</li>
            </ul>
        </section>
        <!--段落-->
        <ul class="head head_f">
            <li>
                <img src="@/assets/img/a11.jpg" />
                <div class="licon">
                    <h3>Honda 双电机混动系统自动变速箱实现国产</h3>
                    <p>2018年9月10日，Honda双电机混动系统自动变速箱量产庆典活动在本田汽车零部件制造有限公司隆重举行，以往由日本进口的SPORT HYBRID（锐・混动）双电机混合动力系统自动变速箱将陆续替换成本田汽车零部件制造有限公司生产的产品，这将进一步加速并深化Honda中国汽车事业的电动化进程</p>
                    <div class="confooter">
                        <span>2016-07-13 11:13:43</span>
                        <span>40</span>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="head">
            <li>
                <div class="licon">
                    <h3>Honda中国发布2018年8月终端汽车销量</h3>
                    <p>2018年8月广汽本田汽车有限公司和东风本田汽车有限公司的终端销量总计117,188辆，同期比为90.1%。其中，广汽本田汽车有限公司8月份终端销量为58,613辆，同期比为97.3%；东风本田汽车有限公司8月份终端销量为58,575辆，同期比为83.9%。</p>
                    <div class="confooter">
                        <span>2016-07-13 11:13:43</span>
                        <span>70</span>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="head">
            <li>
                <div class="licon">
                    <h3>广汽本田汽车有限公司召回部分冠道汽车</h3>
                    <p>日前，广汽本田汽车有限公司根据《缺陷汽车产品召回管理条例》和《缺陷汽车产品召回管理条例实施办法》的要求，向国家市场监督管理总局备案了召回计划，将自2018年8月20日起，召回部分2017-2018年款冠道系列汽车，共计158,050辆</p>
                    <div class="confooter">
                        <span>2016-07-13 11:13:43</span>
                        <span>170</span>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="head" v-for="item in list" :key="item.id">
            <li>
                <img :src="item.img_url" />
                <div class="licon">
                    <h3>{{item.title}}</h3>
                    <p>{{item.cases_desc}}</p>
                    <div class="confooter">
                        <span>{{item.add_time|datatimeFilter}}</span>
                        <span>{{item.click}}</span>
                    </div>
                </div>
            </li>
        </ul>
        <ul class="head head_l">
            <li>
                <img src="@/assets/img/a10.jpg" />
                <div class="licon">
                    <h3>新型HondaJet Elite首次亮相欧洲公务航空展</h3>
                    <p>本田技研工业株式会社的航空飞机业务子公司Honda Aircraft Company （以下简称:HACI）在航空展开幕前召开了发布会，首次向全球发布了小型商务机HondaJet的最新升级版HondaJet Elite。</p>
                    <div class="confooter">
                        <span>2016-07-13 11:13:43</span>
                        <span>40</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'NewsList',
        props:{
          list:Array
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
    /*APP咨询动态*/
    .lists{
        margin-bottom: 20px;
    }
    .lists h2{
        font-size: 22px;
        padding-bottom: 4px;
        border-bottom: 2px solid #ccc;
    }
    .lists h2 span{
        font-size: 14px;
        display: inline-block;
        height: 30px;
        line-height: 50px;
        color: #666;
    }
    .lists h2 span:last-child{
        float: right;
        width: 155px;
    }
    .lists ul{
        margin: 40px 0 20px 0;
    }
    .lists ul li{
        float: left;
        width: 77px;
        height: 24px;
        line-height: 24px;
        background: #dcdcdc;
        margin-right: 10px;
        text-align: center;
        border-radius: 2px;
    }
    .lists ul li:first-child{
        background-color: #59c46c;
        color: white;
    }
    .head{
        padding: 7px 32px 0;
        background-color: white;
    }
    .head_f{
        padding-top: 40px;
    }
    .head_l{
        padding-bottom: 50px;
    }
    .head li{
        display: flex;
        margin-top: 30px;
        padding-bottom: 30px;
        height: 94px;
        border-bottom: 1px dashed #ccc;
    }
    .head li .licon{
        flex: 1;
    }
    .head li img{
        width: 191px;
        height: 94px;
        margin-right: 21px;
    }
    .head li .licon h3{
        font-size: 16px;
        height: 21px;
        line-height: 21px;
    }
    .head li .licon p{
        height: 73px;
        line-height: 21px;
        padding: 4px 0;
        margin-bottom: 15px;
        overflow: hidden;
        height: 33px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        text-overflow: ellipsis;
    }
    .head li .licon .confooter span{
        color: #b4b4b4;
        padding-right: 15px;
    }
    .head li .licon .confooter span:last-child:before{
        content: '';
        display: inline-block;
        width: 8px;
        height: 10px;
        background-image: url(http://localhost:3000/img/hot/ll.gif);
        /*background:no-repeat;*/
        margin-right: 5px;
    }
</style>