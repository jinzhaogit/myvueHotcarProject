import Vue from 'vue'
import App from './App.vue'
import router from './router'
//加载vueresource模块，发送Ajax请求
import VueResource from 'vue-resource'
Vue.use(VueResource);
//设置请求的根路径
Vue.http.options.root="http://localhost:3000/"
//创建全局过滤器
Vue.filter("datatimeFilter",function(val){
    var now=new Date(val);
    var y=now.getFullYear();
    var m=now.getMonth()+1;
    m<10&&(m="0"+m);
    var d=now.getDate();
    d<0&&(d='0'+d);
    var h=now.getHours();
    h<10&&('0'+h);
    h>12&&(h-=12);
    var M=now.getMinutes();
    M<10&&('0'+M);
    var s=now.getSeconds();
    return `${y}-${m}-${d} ${h}:${M}:${s}`;
})
// 引入公用文件
import '@/assets/css/common.css'
import '@/assets/js/jquery.js'
import '@/assets/js/jquerySuperSlide.js'
import '@/assets/js/common.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
