import Vue from 'vue'
import Router from 'vue-router'
// import { resolve } from 'dns';

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path:'/',
    //   redirect:'/dashboard'//重定向
    // },
    {
      path: '/',
      component: resolve => require(['../components/HelloWorld.vue'], resolve)
    }
  ]
})

// import HelloWorld from './components/HelloWorld.vue'
// import newsPage from './views/newsPage.vue'
// let routes = [
//     {
//       path: '/',
//       name: 'HelloWorld(默认页面)',
//       component: HelloWorld
//     },
//     {
//       path: '/newsPage',
//       name: 'newsPage',
//       component: newsPage
//     }
// ]

// export default routes;