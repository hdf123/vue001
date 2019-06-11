// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/base.css'
import './assets/css/icon/iconfont.css'
import 'lib-flexible/flexible'

// 引入axios，并加到原型链中
import axios from 'axios';
import QS from 'qs'
Vue.prototype.$axios = axios;
Vue.prototype.qs = QS;

Vue.prototype.APT1='/api1'
Vue.prototype.APT2='/api2'
Vue.prototype.APT3='/api3'
Vue.prototype.APT4='/api4'


import * as filters from './plug/filters'
Object.keys(filters).forEach(key => {
 Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
    const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    const htmlDom = document.getElementsByTagName('html')[0];
    htmlDom.style.fontSize = htmlWidth / 10 + 'px';
};
setHtmlFontSize();




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
