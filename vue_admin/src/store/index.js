import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

let url = 'http://localhost:3000/users/'

export const store = new Vuex.Store({
    state: {
        users: null,
    },
    getters: {
        USERS: state => {
            return state.users
        }
    },
    mutations: {
        SET_USERS: (state, payload) => {
            state.users = payload
        },
        DEL_USER: (state, payload) => {
            let index = state.users.findIndex(users => users.id == payload)
            state.users.splice(index, 1)
        }
    },
    actions: {
        GET_USERS: async context => {
            let { data } = await Axios.get(url)
            context.commit('SET_USERS', data)
        },
        DELETE_USER: async (context, payload) => {
            await Axios.delete(url + payload)
            context.commit('DEL_USER', payload)
        }
    }
})
