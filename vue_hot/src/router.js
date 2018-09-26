import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import News from './views/News.vue'
import Cases from './views/Cases.vue'
import Brief from './views/Brief.vue'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/news',
      name: 'news',
      component: News
      },{
          path: '/cases',
          name: 'cases',
          component: Cases
      },{
      path: '/brief',
      name: 'Brief',
      component: Brief
     }]
})
