'use strict'
// src 中的 index.js
import SaButton from './components/sa-button'
import SaToast from './components/sa-toast'

const components = [
  SaButton
]

const plugins = [
  SaToast
]

// 官方原文：Vue.js 的插件应该暴露一个 install 方法。这个方法的第一个参数是 Vue 构造器，第二个参数是一个可选的选项对象
const install = function (Vue) {
  components.forEach(component => {
    // Vue.component：注册或获取全局组件
    Vue.component(component.name, component)
  })

  plugins.forEach(plugin => {
    // Vue.use 会调用 plugin 中的 install 方法
    Vue.use(plugin)
  })
}

// 在全局引入组件库时，使用 Vue.use 安装插件，必须提供 install 方法，这里 export default 就是用于 Vue.use
export default {
  install
}
