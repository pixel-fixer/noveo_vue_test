<template>
    <div class="row">
        <div class="col col-sm-6">
            <div class="form-group">
                <label for="exampleInputEmail1">APP Client ID</label>
                <input class="form-control" id="exampleInputEmail1" placeholder="Enter email" v-model="client_id" @input="updateClientId">
            </div>
            <div class="form-group" v-if="client_id">
                <label for="exampleInputEmail1">APP Token</label>
                <input class="form-control" id="exampleInputEmail1" placeholder="Enter email" v-model="token" @input="updateAppToken">
            </div>
        </div>
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
    }
}
</script>

<style>

</style>
