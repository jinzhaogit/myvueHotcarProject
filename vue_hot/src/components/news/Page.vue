<template>
    <ul class="page">
        <li @click="firstPage">首页</li>
        <li v-for="i in pages.length">{{i}}</li>
        <li @click="nextPage">下一页</li>
        <li>末页</li>
    </ul>
</template>
<script>
    export default {
        name: 'NewsPage',
        props:{
          pno:'',
          pages:''
        },
        data(){
            return{
                nextPno:this.pno
            }
        },
        methods:{
            nextPage(){
                this.nextPno++;
                this.$emit('changePage',this.nextPno);
            },
            firstPage(){
                this.nextPno=1;
                this.$emit('changePage',this.nextPno);
            }
        }
    }
</script>
<style>
    /*分页-*/
    .page{
        height: 90px;
        margin-top: 20px;
        margin-left: -350px;
        position: relative;
        left: 50%;
        padding-bottom: 40px;
        line-height: 20px;
    }
    .page li{
        display: inline-block;
        float: left;
        height: 20px;
        width: 38px;
        text-align: center;
        margin-left: 15px;
        color: #1b96c9;
        border: 1px solid #1b96c9;
        margin-top: 40px;
        background-color: white;
        cursor: pointer;
    }
    .page li.active{
        background-color: #1B96C9;
        color: white;
    }
</style>