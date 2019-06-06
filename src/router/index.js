import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import computedk from '@/page/computedk'
import basicUse from '@/page/basicUse'
import test001 from '@/page/test001'

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
        {path: '/test001',name: 'test001',component: test001}
      ]
    }
  ]
})
