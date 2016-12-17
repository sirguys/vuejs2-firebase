<template>
  <form class="ui form" @submit.prevent="save">
    <div class="field">
      <label>Name</label>
      <input v-model="name">
    </div>
    <div class="field">
      <label>Discription</label>
      <input v-model="discription">
    </div>
    <button class="ui submit blue button">Save</button>
  </form>
</template>

<script>
  export default {
    data: () => ({
      name: '',
      discription: ''
    }),
    methods: {
      save () {
        this.$emit('save', {
          name: this.name,
          discription: this.discription
        })
      }
    }
  }
</script>
