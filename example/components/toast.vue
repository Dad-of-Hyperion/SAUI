<template>
  <div class="example-toast">
    <sa-button @click="clickFunc">
      这是一个Toast
    </sa-button>
  </div>
</template>

<script>
export default {
  name: 'example-button',
  methods: {
    clickFunc () {
      this.$saui.toast.show({
        text: '这是一个Toast'
      })
    }
  }
}
</script>

<style scoped>

</style>
