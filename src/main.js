// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/base.css'
import './assets/css/icon/iconfont.css'
import 'lib-flexible/flexible'
import scroll from './assets/js/scroll.js'
import wan_time from './assets/js/wan_time.js'
//挂载swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'
import {imageIsExist} from "./utils";

// 引入axios，并加到原型链中
import axios from 'axios';
import QS from 'qs'
Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;


Vue.prototype.wan_time = wan_time ;
Vue.prototype.bus = new Vue;

import * as filters from './assets/js/filters'
Object.keys(filters).forEach(key => {
 Vue.filter(key, filters[key])
})

//全局注册自定义指令，用于判断当前图片是否能够加载成功，可以加载成功则赋值为img的src属性，否则使用默认图片
Vue.directive('real-img', async function (el, binding) {
  let imgURL = binding.value;//获取图片地址
  let defaultURL = el.getAttribute('default-img');//获取默认图片地址
  if (imgURL) {
      let exist = await imageIsExist(imgURL);
      if (exist) {
          el.setAttribute('src', imgURL);
      } else {
          if (defaultURL) {
              el.setAttribute('src', defaultURL);
          }
      }
  }
})


Vue.config.productionTip = false
Vue.use(scroll)
// Vue.use(wan_time)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
