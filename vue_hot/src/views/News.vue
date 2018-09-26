<template>
    <div>
        <news-header></news-header>
        <news-banner></news-banner>
        <news-list :list="list"></news-list>
        <news-page :pno="pno" :pages="pages" @changePage="pagePnoAdd"></news-page>
        <news-footer></news-footer>
    </div>
</template>
<script>
    import axios from 'axios'
    import NewsHeader from '@/components/home/Header.vue'
    import NewsBanner from '@/components/home/Banner.vue'
    import NewsList from '@/components/news/List.vue'
    import NewsPage from '@/components/news/Page.vue'
    import NewsFooter from '@/components/home/Footer.vue'
    export default {
        name: 'news',
        components:{
            NewsHeader,
            NewsBanner,
            NewsList,
            NewsPage,
            NewsFooter
        },
        data(){
          return{
              list:[],
              pno:1,
              pageSize:8
          }
        },
        computed:{
          pages(){
            return (this.list.length);
          }
        },
        methods:{
            getNewsList(){
                axios.get('http://localhost:3000/cases/news?pno='+this.pno).then(this.getNewsListSucc)
            },
            getNewsListSucc(res){
                res=res.data;
                if(res.code==1&&res.msg){
                    this.list=res.msg;
                }
            },
            pagePnoAdd(data){
                this.pno=data;
                this.getNewsList();
            }
        },
        mounted(){
            this.getNewsList();
            console.log(this.list);
        }
    }
</script>
<style>

</style>