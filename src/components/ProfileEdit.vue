<template>
  <div class="ui segment">
    <h3 class="ui header">Edit Profile</h3>
    <ProfileForm @save="save" />
  </div>
</template>

<script>
  import ProfileForm from './ProfileForm'
  export default {
    components: {
      ProfileForm
    },
    methods: {
      save (data) {
        console.log(data)
      }
    }
  }
</script>
