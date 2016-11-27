<template>
  <div>
    Hi, {{ name }}
    <p ref="text">Test ref</p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      required: true
    }
  },
  mounted () {
    console.log(this.$el)
    console.log(this.$refs.text)
    $(this.$el)
  }

}
</script>
