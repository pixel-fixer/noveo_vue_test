<template>
    <div class="container" v-cloak>
        <h1><img class="logo" src="./../assets/logo.png" height="40">Yandex Disk REST API test</h1>
        <app-tokens></app-tokens>
        <preloader v-if="$store.state.isLoading"></preloader>
        <div v-else>
          <dir-list v-if="$store.state.dir_list"></dir-list>
        </div>
    </div>
</template>

<script>
import AppTokens from './../components/app-tokens.vue'
import DirList from './../components/dir-list.vue'
import Preloader from './../components/preloader.vue'

export default {
  name: 'app',
  data: () => ({
    response: null
  }),
  created(){
    this.getDir()
  },
  watch: {
    '$route': 'getDir'
  },
  components: {
    AppTokens,
    DirList,
    Preloader
  },
  methods: {
      getDir(){
        if(this.$route.params.dir)
            this.$store.dispatch('loadDir', this.$route.params.dir)
        else
            this.$store.dispatch('loadDir')
      }
  }
}
</script>

<style scoped>
  .logo{
    height: 40px;
    margin-right: 15px;
  }
  [v-cloak]{
    display: none;
  }
</style>