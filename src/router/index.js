import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import computedk from '@/page/computedk'
import basicUse from '@/page/basicUse'
import test001 from '@/page/test001'
import test002 from '@/page/test002'
import test003 from '@/page/test003'
import test004 from '@/page/test004'
import test005 from '@/page/test005'
import joke from '@/page/ju_joke'
import constellation from '@/page/ju_constellation'
import book from '@/page/ju_book'
import books from '@/page/ju_books'
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
        {path: '/home/test001',name: 'test001',component: test001},
        {path: '/home/test002',name: 'test002',component: test002,
          children:[
            {path:"/",redirect:{name:'joke'}},//重新定向
            {path: '/home/test002/joke',name: 'joke',component: joke},
            {path: '/home/test002/constellation',name: 'constellation',component: constellation},
            {path: '/home/test002/book',name: 'book',component: book,
              children:[
                {path: '/home/test002/book/books',name: 'books',component: books},
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
        {path: '/home/test004',name: 'test004',component: test004},
        {path: '/home/test005',name: 'test005',component: test005},
      ]
    }
  ]
})
