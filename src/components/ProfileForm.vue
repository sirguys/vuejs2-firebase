<template>
  <form class="ui form" @submit.prevent="save">
    <div class="field">
      <label>Photo</label>
      <img v-if="photo" :src="photo" class="ui small circular image">
      <div @click="openUpload" class="ui green button">Upload Photo</div>
    </div>
    <div class="field">
      <label>Name</label>
      <input v-model="name">
    </div>
    <div class="field">
      <label>Discription</label>
      <input v-model="description">
    </div>
    <button class="ui submit blue button">Save</button>
    <div class="ui red button" @click="$emit('cancle')">Cancle</div>
    <UploadModal ref="upload" @success="uploaded"/>
  </form>
</template>

<style scoped>
  img.circular {
    width: 120px;
    height: 120px;
  }
</style>

<script>
  import UploadModal from './UploadModal'

  export default {
    components: {
      UploadModal
    },
    props: ['value'],
    data: () => ({
      name: '',
      description: '',
      photo: ''
    }),
    created () {
      console.log(this.value)
      this.name = this.value.name
      this.description = this.value.description
      this.photo = this.value.photo
    },
    watch: {
      value () {
        console.log(this.value)
        this.name = this.value.name
        this.description = this.value.description
        this.photo = this.value.photo
      }
    },
    methods: {
      save () {
        this.$emit('input', {
          name: this.name,
          description: this.description,
          photo: this.photo
        })
        this.$emit('save')
      },
      openUpload () {
        this.$refs.upload.open()
      },
      uploaded (url) {
        this.photo = url
      }
    }
  }
</script>
