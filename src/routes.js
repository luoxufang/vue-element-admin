// import Vue from 'vue'
// import Router from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import newsPage from './views/newsPage.vue'
import activePage from './views/activePage.vue'
import activePublic from './views/activePublic.vue'

let routes = [
    {
      path: '/',
      name: 'HelloWorld(默认页面)',
      component: HelloWorld
    },
    {
      path: '/newsPage',
      name: 'newsPage',
      component: newsPage
    },
    {
      path: '/activePage',
      name: 'activePage',
      component: activePage
    },
    {
      path: '/activePublic',
      name: 'activePublic',
      component: activePublic
    }
]

export default routes;