<template>
  <div>
    <img v-if="profile" :src="profile.photo" class="ui small circular image">
    <h4>Name: </h4> {{profile.name | upper}}
    <h4>Description: </h4> {{profile.description}}
  </div>
</template>

<style scoped>
  img.circular {
    width: 180px;
    height: 180px;
  }
</style>

<script>
  export default {
    props: ['profile']
  }
</script>
