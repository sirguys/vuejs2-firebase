<template>
  <div id='app'>
    <TopMenu />
    <router-view></router-view>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu'

export default {
  components: {
    TopMenu
  }
}
</script>
