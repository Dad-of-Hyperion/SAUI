// main.vue
<template>
  <!-- Vue 提供的过渡组件 -->
  <transition name="toast-from-top">
    <div class="my-toast"
         v-show="show">
      <div class="my-toast-content">
        这是个 toast ~
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'MyToast',
  data () {
    return {
      time: 2000, // toast 展示时长
      timer: null,  // 用来防抖
      show: false  // toast 是否展示
    }
  },
  watch: {
    show (val) {
      if (val) {
        this.timer = setTimeout(() => {
          this.show = false
          this.timer = null
        }, this.time)
      }
    }
  }
}
</script>

<style scoped>
  .my-toast {
    position: fixed;
    top: 25%;
    width: 100%;
    text-align: center;
  }

  .my-toast-content {
    display: inline-block;
    max-width: 80%;
    box-sizing: border-box;
    padding: 10px;
    background-color: hsla(0, 0%, 7%, .7);
    color: #fff;
    border-radius: 3px;
  }

  .toast-from-top-enter-active, .toast-from-top-leave-active {
    transition: all .5s;
  }

  .toast-from-top-enter, .toast-from-top-leave-to {
    transform: translateY(-100%);
    opacity: 0;
  }
</style>
