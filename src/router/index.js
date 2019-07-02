import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import computedk from '@/page/computedk'
import basicUse from '@/page/basicUse'
import test002 from '@/page/test002'
import test003 from '@/page/test003'
import test004 from '@/page/test004'
import ju_joke from '@/page/ju_joke'
import ju_constellation from '@/page/ju_constellation'
import ju_book from '@/page/ju_book'
import ju_books from '@/page/ju_books'
import loadinga from '@/page/loadinga'
import loadingb from '@/page/loadingb'
import wan_classic_statement from '@/page/wan_classic_statement'

Vue.use(Router)
export default new Router({
  // mode:"history",//去除地址中的#
  // base: '/dist/',
  routes: [
    // {path:"/",redirect:'/home/basicUse'},//重新定向
    {path:"/",redirect:{name:'basicUse'}},//重新定向
    {path: '/home',name: 'home', component: home,
      children:[
        {path: '/home/computedk',name: 'computedk',component: computedk},
        {path: '/home/basicUse',name: 'basicUse',component: basicUse},
        {path: '/home/test001',name: 'test001',component: () => import('@/page/test001'),},
        {path: '/home/test002',name: 'test002',component: test002,
          children:[
            {path:"/",redirect:{name:'ju_joke'}},//重新定向
            {path: '/home/test002/ju_joke',name: 'ju_joke',component: ju_joke},
            {path: '/home/test002/ju_constellation',name: 'ju_constellation',component: ju_constellation},
            {path: '/home/test002/ju_book',name: 'ju_book',component: ju_book,
              children:[
                {path: '/home/test002/ju_book/ju_books',name: 'ju_books',component: ju_books},
              ]
            }
          ]
        },
        {path: '/home/test003',name: 'test003',component: test003,
          children:[
            {path:"/",redirect:{name:'wan_classic_statement'}},//重新定向
            {path: '/home/test003/wan_classic_statement',name: 'wan_classic_statement',component: wan_classic_statement},
          ]
        },
        {path: '/home/test004',name: 'test004',component: test004,
          children:[
            {path:"/",redirect:{name:'loadinga'}},//重新定向
            {path: '/home/test004/loadinga',name: 'loadinga',component: loadinga},
            {path: '/home/test004/loadingb',name: 'loadingb',component: loadingb},
          ]
        }
      ]
    }
  ]
})