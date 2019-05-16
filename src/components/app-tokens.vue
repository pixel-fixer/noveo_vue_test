<template>
    <div>
        <div class="row">
            <div class="col col-sm-6">
                <div class="form-group">
                    <label for="exampleInputEmail1">APP Client ID</label>
                    <input class="form-control" placeholder="APP Client ID" v-model="client_id" @input="updateClientId">
                </div>
            </div>
            <div class="col col-sm-6">
                <div class="form-group" v-if="client_id">
                    <label for="exampleInputEmail1">APP Token</label>
                    <input class="form-control" placeholder="Enter email" v-model="token" @input="updateAppToken">
                </div>
            </div>
        </div>
        <button type="submit" class="btn btn-primary" @click="getAuthToken" v-if="!$store.state.token">Получить токен</button>
        <button type="submit" class="btn btn-primary" @click="$store.dispatch('loadDir')" v-if="$store.state.token">Список директорий</button>
    </div>
</template>

<script>
export default {
    name: 'app-tokens',
    data: function() {
        return {
            client_id: this.$store.state.client_id,
            token: this.$store.state.token
        }
    },
    methods:{
        updateClientId(e){
            this.$store.commit('SET_CLIENT_ID', e.target.value)
        },
        updateAppToken(e){
            this.$store.commit('SET_APP_TOKEN', e.target.value)
        },
        getAuthToken(){
            window.location = 'https://oauth.yandex.ru/authorize?response_type=token&client_id=' + this.$store.state.client_id
        }
    }
}
</script>

<style>

</style>
