import Home from '../components/common/Home.vue'
import Dashboard from '../components/page/Dashboard.vue'
import BaseTable from '../components/page/BaseTable.vue'
import Tabs from '../components/page/Tabs.vue'
import BaseForm from '../components/page/BaseForm.vue'
import VueEditor from '../components/page/VueEditor.vue'
import Markdown from '../components/page/Markdown.vue'
import Upload from '../components/page/Upload.vue'
import BaseCharts from '../components/page/BaseCharts.vue'
import DragList from '../components/page/DragList.vue'
import Permission from '../components/page/Permission.vue'

import Login from '../views/Login.vue'
import errorFourPage from '../components/page/404.vue'
import errorThreePage from '../components/page/403.vue'
import TestPage from '../components/HelloWorld.vue'

let routes = [
    {
        path:'/',
        redirect:'/dashboard'//重定向
    },
    {
      path: '/',
      name: 'Home(默认页面)',
      component: Home,
      children: [
        { path: '/Dashboard', component: Dashboard, name: '系统首页',meta: { title: '系统首页' }},      
        { path: '/table', component: BaseTable, name: '基础表格',meta: { title: '基础表格' }},
        { path: '/tabs', component: Tabs, name: 'tab选项卡',meta: { title: 'tab选项卡' }},
        { path: '/form', component: BaseForm, name: '基本表单',meta: { title: '基本表单' }},  
        { path: '/editor', component: VueEditor, name: '富文本编辑器',meta: { title: '富文本编辑器' }},      
        { path: '/markdown', component: Markdown, name: 'markdown编辑器',meta: { title: 'markdown编辑器' }},  
        { path: '/upload', component: Upload, name: '文件上传',meta: { title: '文件上传' }},  
        { path: '/charts', component: BaseCharts, name: 'schart图表',meta: { title: 'schart图表' }},  
        { path: '/drag', component: DragList, name: '拖拽列表',meta: { title: '拖拽列表' }}, 
        { path: '/permission', component: Permission, name: '权限测试',meta: { title: '权限测试' }},
        { path: '/testPage', component: TestPage, name: '测试页面',meta: { title: '测试页面' }},
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/404',
      name: 'errorFourPage',
      component: errorThreePage
    },
    {
      path: '/403',
      name: 'errorThreePage',
      component: errorThreePage
    },
    {
        path: '*',
        redirect: '/404'
    }
] 

export default routes;