import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
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
    async createUser ({ commit }, userInfo) {
      const auth = firebase.auth()
      let info = {}
      // 一応べつで対応
      info.displayName = userInfo.name
      info.email = userInfo.email
      info.password = userInfo.password
      if (info.hasOwnProperty('photoURL')) {
        info.photoURL = userInfo.photoURL
      }
      console.log('auth', userInfo)
      auth.createUserWithEmailAndPassword(info.email, info.password)
        .then(function (userRecord) {
          console.log('Succsess', userRecord)
          // メール確認を送る
          userRecord.user.sendEmailVerification()
          return 'success'
        })
        .catch(function (error) {
          console.log('err', error)
          return 'err'
        })
    }
  },
  modules: {
  }
})
