import Vue from 'vue'
import Router from 'vue-router'

import not from '../views/404.vue'
import defaults from '../views/default.vue'
import login from '../views/Login/login.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:'/',
      name:"defaults",
      component:defaults,
    },{
      path:'/notFound',
      name:'not',
      component:not,
    },{
      path:'/Login',
      name:'Login',
      component:login,
    },
    
  ]
})

router.beforeEach((to, from, next) => {
  if(!to.name) {
    next('/notFound')
  } else {
    next()
  }
})

export default router
