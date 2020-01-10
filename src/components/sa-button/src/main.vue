 <!--main.vue-->
<template>
  <button class="my-button"
          :class="['my-button-size-'+size]"
          @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'sa-button',
  props: {
    // size 属性是用来控制按钮的大小样式，通过不同 size 设置不同的类名
    size: {
      type: String,
      default: 'big'
    }
  },
  methods: {
    /**
     * 用于触发 my-button 实例上的 click 事件
     */
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>
  /* 初始化 button 的样式 */
  .my-button {
    display: inline-block;
    line-height: 1;
    cursor: pointer;
    background: #fff;
    border: 1px solid #ddd;
    color: #000;
    text-align: center;
    outline: none;
    font-size: 14px;
    border-radius: 4px;
  }

  /* button big 的样式 */
  .my-button.my-button-size-big {
    padding: 12px 20px;
  }

  /* button mid 的样式 */
  .my-button.my-button-size-mid {
    padding: 10px 20px;
  }

  /* button small 的样式 */
  .my-button.my-button-size-small {
    padding: 10px 10px;
  }
</style>
