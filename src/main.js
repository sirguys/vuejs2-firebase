import Vue from 'vue'
import router from './router'
import firebase from 'firebase'

import App from './App'

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyDG1QTy_MwugSQTwMu2NgYVicWnTdsU540',
  authDomain: 'twitty-sirguys.firebaseapp.com',
  databaseURL: 'https://twitty-sirguys.firebaseio.com',
  storageBucket: 'twitty-sirguys.appspot.com',
  messagingSenderId: '776989427989'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
