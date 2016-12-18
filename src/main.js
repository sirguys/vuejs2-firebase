import Vue from 'vue'
import router from './router'
import firebase from 'firebase'
import moment from 'moment'

import '!script!jquery/dist/jquery.min.js'
import '!script!semantic-ui-css/semantic.min.js'
import '!script!semantic-ui-css/components/modal.js'
import '!style!css!semantic-ui-css/semantic.min.css'

import App from './App'

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyDG1QTy_MwugSQTwMu2NgYVicWnTdsU540',
  authDomain: 'twitty-sirguys.firebaseapp.com',
  databaseURL: 'https://twitty-sirguys.firebaseio.com',
  storageBucket: 'twitty-sirguys.appspot.com',
  messagingSenderId: '776989427989'
})

const ticker = new Vue({
  data: () => ({
    tick: 0
  }),
  created () {
    setInterval(() => {
      this.tick = Date.now()
    }, 10000)
  }
})

Vue.filter('upper', (value) => {
  if (typeof value === 'string') {
    return value.toUpperCase()
  }
  return value
})

Vue.filter('fromNow', (value) => {
  ticker.tick
  // console.log(Date.now())
  return moment(value).fromNow()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...App
})
