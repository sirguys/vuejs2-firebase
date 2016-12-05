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
  methods: {
    signIn () {
      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((res) => {
          console.log(res)
        })
    }
  }
}
</script>
