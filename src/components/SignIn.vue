<template>
  <div class='ui segment'>
    <h2 class='ui header'>Sign In</h2>
    <div @click='signIn' class='ui google plus button'>
      <i class='google plus icon'> </i>
      Sign In With Google+
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'

export default {
  beforeRouteEnter (to, from, next) {
    const cancle = firebase.auth().onAuthStateChanged((user) => {
      cancle()
      if (user) {
        next(to.query.redirect || '/')
        return
      }
      next()
    })
  },
  methods: {
    signIn () {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((res) => {
          this.$router.replace(this.$route.query.redirect || '/')
        })
    }
  }
}
</script>
