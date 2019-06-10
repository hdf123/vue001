import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import computedk from '@/page/computedk'
import basicUse from '@/page/basicUse'
import test001 from '@/page/test001'
import test002 from '@/page/test002'
import joke from '@/page/joke'
import constellation from '@/page/constellation'
import movie from '@/page/movie'

Vue.use(Router)

export default new Router({
  // mode:"history",//去除地址中的#
  // base: '/dist/',
  routes: [
    {
      path: '/',name: 'home', component: home,
      children:[
        {path: '/computedk',name: 'computedk',component: computedk},
        {path: '/basicUse',name: 'basicUse',component: basicUse},
        {path: '/test001',name: 'test001',component: test001},
        {path: '/test002',name: 'test002',component: test002,
        children:[
          // {path:"/test002",redirect:'/test002/joke'},//重新定向
          {path:"/test002",redirect:{name:'joke'}},//重新定向
          {path: '/test002/joke',name: 'joke',component: joke},
          {path: '/test002/constellation',name: 'constellation',component: constellation},
          {path: '/test002/movie',name: 'movie',component: movie},
        ]
      }
      ]
    }
  ]
})
