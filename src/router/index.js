import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../components/list.vue'
import CeShi from '../views/ceshi.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/top',
    children: [{
      path: '/top',
      component: List
    }, {
      path: '/shehui',
      component: List
    }, {
      path: '/guonei',
      component: List
    }, {
      path: '/guoji',
      component: List
    }, {
      path: '/yule',
      component: List
    }, {
      path: '/tiyu',
      component: List
    }, {
      path: '/junshi',
      component: List
    }, {
      path: '/keji',
      component: List
    }, {
      path: '/caijing',
      component: List
    }, {
      path: '/shishang',
      component: List
    }]
  },
  {
    path: '/ceshi',
    name: 'CeShi',
    component: CeShi
  }
]

const router = new VueRouter({
  routes
})

export default router
