import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './plugins/element.js'
// 自定义属性
import g from './public/global'

// Vue原型链上添加方法
import way from './public/public'

import axios from './axios'
import qs from 'qs'
import $ from 'jquery'

Vue.use(way)

Vue.config.productionTip = false
Vue.prototype.g = g
Vue.prototype.axios = axios
Vue.prototype.qs = qs
Vue.prototype.$ = $

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')



