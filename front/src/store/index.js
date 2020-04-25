import Vue from 'vue'
import Vuex from 'vuex'
// import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {},
    status: false
  },
  getters: {
    email (state) {
      return state.email
    },
    isSignedIn (state) {
      return state.status
    }
  },
  mutations: {
    onAuthEmailChanged (state, email) {
      state.email = email // firebase user情報
    },
    onUserStatusChanged (state, status) {
      state.status = status
    }
  },
  actions: {
  },
  modules: {
  }
})
