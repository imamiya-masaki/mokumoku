import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
// import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {},
    currentUserId: '',
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
    },
    onUserStatusUid (state, uid) {
      state.uid = uid
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
      return auth.createUserWithEmailAndPassword(info.email, info.password)
        .then(function (userRecord) {
          console.log('Succsess', userRecord, userRecord.user)
          // メール確認を送る
          return 'success'
        })
        .catch(function (error) {
          console.log('err', error)
          return 'err'
        })
    },
    async createConfirmCreateUser ({ commit }, userInfo) {
      const auth = firebase.auth()
    },
    async signInUser ({ commit }, userInfo) {
      const auth = firebase.auth()
      const email = userInfo.email
      const password = userInfo.password
      console.log('check', email, password)
      return auth.signInWithEmailAndPassword(email, password)
        .then(function (userRecord) {
          console.log('success', userRecord.user)
          // frontよりな表示changeしたいのでここではフラグだけ返す
          const user = userRecord.user
          commit('onUserStatusUid', user.uid)
          return user
        })
        .catch(function (err) {
          console.log('err', err)
          return 'err'
        })
    },
    async sendSecurityMail ({ commit }, info) {
      const sendMail = firebase.functions().httpsCallable('sendMail')
      const self = this
      const destination = info.targetEmail
      const security = info.code
      return sendMail({ targetEmail: destination, code: security }).then(function (res) {
        return 'sendEmail'
      })
    }
  },
  modules: {
  }
})
