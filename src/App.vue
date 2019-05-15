<template>
  <div id="app">
    <div class="container">
        <h1><img class="logo" src="./assets/logo.png" height="40">Yandex Disk REST API test</h1>
        <app-tokens></app-tokens>
        <button type="submit" class="btn btn-primary" @click="getAuthToken" v-if="!$store.state.token">Получить токен</button>
        <button type="submit" class="btn btn-primary" @click="$store.dispatch('loadDir')" v-if="$store.state.token">Список директорий</button>
        <dir-list v-if="$store.state.dir_list"></dir-list>
    </div>
  </div>
</template>

<script>
import AppTokens from './components/app-tokens.vue'
import DirList from './components/dir-list.vue'

export default {
  name: 'app',
  data: () => ({
    response: null
  }),
  components: {
    AppTokens,
    DirList
  },
  methods:{
    getAuthToken(){
        window.location = 'https://oauth.yandex.ru/authorize?response_type=token&client_id=' + this.$store.state.client_id
    }
  }
}
</script>

<style scoped>
  .logo{
    height: 40px;
    margin-right: 15px;
  }
</style>
