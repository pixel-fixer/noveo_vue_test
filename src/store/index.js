import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
    client_id: '', //f8af9313665440e29db739d6bd7056e6
    token: '', //AQAAAAAC69ieAAWqCzo5Na8ptUittz2muhgt22Y
    dir_list: null
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
        }
    },
    actions:{
        loadDir({commit}, dir = '/') {
            axios.defaults.headers.common['Accept'] = 'application/json';
            axios.defaults.headers.common['Authorization'] = `OAuth ${this.state.token}`

            axios.get('https://cloud-api.yandex.net/v1/disk/resources',  { params: { path: dir } })
                .then((response) => {
                    commit('SET_DIR_LIST', response.data)
                })
          }
    },
    plugins:  [createPersistedState()]
})