import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import computedk from '@/page/computedk'
import basicUse from '@/page/basicUse'
import test001 from '@/page/test001'
import test002 from '@/page/test002'
import joke from '@/page/joke'
import constellation from '@/page/constellation'
import aa from '@/page/aa'

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
          {path: '/home/test002/aa',name: 'aa',component: aa}
        ]
      }
      ]
    }
  ]
})
