import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'NoExplain',
      component: ()=>import("../components/Index.vue")
    },
    {
      path: '/NoExplain',
      name: 'NoExplain',
      component: ()=>import("../components/NoExplain.vue")
    },
    {
      path: '/end',
      name: 'end',
      component: ()=>import("../components/end.vue")
    },
  ]
})
