<template>
    <div>
        <cases-header></cases-header>
        <cases-banner></cases-banner>
        <cases-list :list="list"></cases-list>
        <cases-footer></cases-footer>
    </div>
</template>
<script>
    import axios from 'axios'
    import CasesHeader from '@/components/home/Header.vue'
    import CasesBanner from '@/components/home/Banner.vue'
    import CasesList from '@/components/cases/List.vue'
    import CasesFooter from '@/components/home/Footer.vue'
    export default {
        name: 'news',
        components:{
            CasesHeader,
            CasesBanner,
            CasesList,
            CasesFooter
        },
        data(){
            return{
                list:[],
            }
        },
        methods:{
            getCasesList(){
                axios.get('http://localhost:3000/cases').then(this.getCasesListSucee);
            },
            getCasesListSucee(res){
                res=res.data;console.log(res);
                if(res.code==1&&res.msg){
                    this.list=res.msg;
                }
            }
        },
        mounted(){
            this.getCasesList();
        }
    }
</script>
<style>

</style>