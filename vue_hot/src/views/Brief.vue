<template>
    <div>
        <news-header></news-header>
        <home-banner></home-banner>
        <div class="section brief">
            <div v-for="item in list" :key="item.id">
                <h3>{{item.title}}</h3>
                <p>{{item.cases_desc}}</p>
            </div>
        </div>
        <news-footer></news-footer>
    </div>
</template>
<script>
    import axios from 'axios'
    import NewsHeader from '@/components/home/Header.vue'
    import HomeBanner from '@/components/home/Banner'
    import NewsFooter from '@/components/home/Footer.vue'
    export  default {
        name:'Brief',
        data(){
            return{
                list:[]
            }
        },
        components:{
            NewsHeader,
            HomeBanner,
            NewsFooter
        },
        methods:{
            getNewsList(){
                axios.get('http://localhost:3000/cases/biref').then(this.getNewsListSucc)
            },
            getNewsListSucc(res){
                res=res.data;
                if(res.code==1&&res.msg){
                    this.list=res.msg;
                }
            }
        },
        mounted(){
            this.getNewsList();
        }
    }
</script>
<style>
    .brief h3{
        font-size: 22px;
        line-height: 40px;
    }
    .brief p{
        font-size: 16px;
        line-height: 30px;
        text-indent: 40px;
    }
</style>