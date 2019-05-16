import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
    client_id: '',
    token: '',
    dir_list: null,
    isLoading: false
}

export default new Vuex.Store({
    state,
    mutations: {
        SET_CLIENT_ID(state, client_id) {
            state.client_id = client_id
        },
        SET_APP_TOKEN(state, token) {
            state.token = token
        },
        SET_DIR_LIST(state, res){
            state.dir_list = res
        },
        SET_LOADING_STATUS(state, status){
            state.isLoading = status
        },
    },
    actions:{
        loadDir({commit}, dir = '/') {
            axios.defaults.headers.common['Accept'] = 'application/json';
            axios.defaults.headers.common['Authorization'] = `OAuth ${this.state.token}`

            commit('SET_LOADING_STATUS', true)
            axios.get('https://cloud-api.yandex.net/v1/disk/resources',  { params: { path: dir } })
                .then((response) => {
                    commit('SET_DIR_LIST', response.data)
                    commit('SET_LOADING_STATUS', false)
                })
          }
    },
    plugins:  [createPersistedState()]
})