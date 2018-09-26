<template>
  <div class="home">
      <home-header></home-header>
      <home-banner></home-banner>
      <home-ability></home-ability>
      <home-case :imgList="imgList"></home-case>
      <home-problem :proList="proList" :duoList="duoList"></home-problem>
      <home-footer></home-footer>
  </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from '@/components/home/Header'
import HomeBanner from '@/components/home/Banner'
import HomeAbility from '@/components/home/Ability'
import HomeCase from '@/components/home/Case'
import HomeProblem from '@/components/home/Problem'
import HomeFooter from '@/components/home/Footer'
export default {
  name: 'home',
  data(){
      return{
          imgList:[],
          proList:[],
          duoList:[]
      }
  },
  components: {
      HomeHeader,
      HomeBanner,
      HomeAbility,
      HomeCase,
      HomeProblem,
      HomeFooter
  },
    methods:{
        getHomeImg(){
          axios.get('http://localhost:3000/cases').then(this.getHomeImgSucc);
        },
        getHomeImgSucc(res){
          res=res.data;
          if(res.code==1&&res.msg){
              console.log(res.msg);
              this.imgList=res.msg;
          }
        },
        getHomeProblem(){
            axios.get('http://localhost:3000/cases/problem').then(this.getHomePronlemSucc);
        },
        getHomePronlemSucc(resp){
            resp=resp.data;
            if(resp.code==1&&resp.msg){
                this.proList=resp.msg;
            }
        },
        getHomeDuo(){
            axios.get('http://localhost:3000/cases/duo').then(this.getHomeDuoSucc);
        },
        getHomeDuoSucc(resp){
            resp=resp.data;
            if(resp.code==1&&resp.msg){
                this.duoList=resp.msg;
                console.log(resp.msg);
            }
        }
    },
    mounted(){
      this.getHomeImg();
      this.getHomeProblem();
      this.getHomeDuo();
    }
}
</script>
