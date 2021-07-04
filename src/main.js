import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入less
import less from 'less'
import './assets/css/global.css'
import axios from 'axios'
Vue.use(less)
Vue.config.productionTip = false
Vue.prototype.$http = axios
// 配置请求接口地址
axios.defaults.baseURL = 'http://127.0.0.1:3006'
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
