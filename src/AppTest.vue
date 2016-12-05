<template>
  <div>
    App component
    <router-view></router-view>
    <br/>
    <router-link to="/" tag="div">Click To GoHome</router-link>
    <br/>
    <router-link to="/about">About</router-link>
    <hr/>
    <input v-model="name"/>
    <p v-if="name && name !== 'SirGuys'">Hi, {{ name }}</p>
    <p v-else-if="name === 'SirGuys'">;D</p>
    <p v-else>No Data</p>
    <p v-for="x in list">{{ x }}</p>
    <button @click="sayHello">Hello</button>
    <hr/>
    <hello :name="name"></hello>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  },
  data () {
    return {
      name: '',
      list: [
        1, 2, 3, 4, 5
      ]
    }
  },
  methods: {
    sayHello () {
      window.alert('Hi ' + this.name)
    }
  }
}
</script>

<style>
  @import '../node_modules/semantic-ui-css/semantic.min.css'
</style>
