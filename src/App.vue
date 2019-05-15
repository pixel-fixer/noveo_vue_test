<template>
  <div id="app">
    <div class="container">
        <h1><img class="logo" src="./assets/logo.png" height="40">Yandex Disk REST API test</h1>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data: () => ({

  }),
  components: {
    HelloWorld
  }
  
}
</script>

<style scoped>
  .logo{
    height: 40px;
    margin-right: 15px;
  }
</style>
