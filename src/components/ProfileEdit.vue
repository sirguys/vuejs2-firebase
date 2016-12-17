<template>
  <div class="ui segment">
    <h3 class="ui header">Edit Profile</h3>
    <ProfileForm v-model="profile" @save="save" />
    {{ profile }}
  </div>
</template>

<script>
  import ProfileForm from './ProfileForm'
  export default {
    components: {
      ProfileForm
    },
    data: () => ({
      profile: {
        name: '',
        description: ''
      }
    }),
    methods: {
      save (data) {
        console.log(data)
      }
    }
  }
</script>
