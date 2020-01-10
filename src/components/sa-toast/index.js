// index.js
import main from './src/main'

let instance

const plugin = {
  // Vue.use 会调用的这个方法
  install (Vue) {
    const Toast = Vue.extend(main)
    if (!instance) {
      // 创建 toast 组件实例
      instance = new Toast({
        el: document.createElement('div')
      })
      // 向 body 添加 toast dom
      document.body.appendChild(instance.$el)
    }

    const toast = {
      show (options = {}) {
        if (instance.timer) {
          return
        }
        let defaults = {}
        for (let key in instance.$options.props) {
          defaults[key] = instance.$options.props[key].default
        }

        Object.assign(instance, defaults, options)
        // 展示 toast
        instance.show = true
      }
    }

    if (!Vue.$saui) {
      Vue.$saui = {
        toast
      }
    } else {
      Vue.$saui.toast = toast
    }
      
    // 全局混入，开发中，组件在created时，将 $myui 绑在每一个组件实例上，就可以在组件里通过 this.$myui.toast.show(...) 展示了
    Vue.mixin({
      created () {
        this.$saui = Vue.$saui
      }
    })
  }
}

export default plugin
