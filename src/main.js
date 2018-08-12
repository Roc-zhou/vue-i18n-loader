// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueI18n from 'vue-i18n'    // 引入 vue-i18n

Vue.config.productionTip = false
Vue.use(VueI18n)  // 使用 VueI18n


const i18n = new VueI18n({
  locale: 'CN',  // 使用 this.$i18n.locale  = 'EN' 来切换语言
  messages: {
    "CN": require('./assets/CN'),
    "EN": require('./assets/EN')
  }
})


function set_directive (array = []) { // 批量vue全局指令注册[!!!仅支持Vue2.5.2+]
  for (let x of array) Vue.directive(x.directive, x.method)
}

void set_directive([ // vue全局指令注册
{
  directive: 'lang', // 多语言切换[解决单文件组件无法触发全局更新]
  method (el, binding) {
    const {value, name} = binding
    window.document.documentElement.setAttribute(name, value) // 添加浏览器识别头属性，全局组件依赖此标识
    return i18n.locale = value
  },
}])



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
