import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
// import firebase from 'firebase'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {},
    currentUserId: '',
    status: false,
    logined: false
  },
  getters: {
    email (state) {
      return state.email
    },
    isSignedIn (state) {
      return state.logined
    },
    getUser (state) {
      return state.currentUser
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
    },
    onLoginUser (state, user) {
      state.logined = true
      state.currentUser = user
    },
    onLogOutUser (state) {
      state.logined = false
      state.currentUser = {}
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
          commit('onLoginUser', user)
          return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(function () {
            })
            .catch(function (error) {
              // Handle Errors here.
              var errorCode = error.code
              var errorMessage = error.message
            })
        })
        .catch(function (err) {
          console.log('err', err)
          return 'err'
        })
    },
    async logOutUser ({ commit }) {
      commit('onLogOutUser')
      firebase.auth().signOut()
    },
    async sendSecurityMail ({ commit }, info) {
      const sendMail = firebase.functions().httpsCallable('sendMail')
      const self = this
      const destination = info.targetEmail
      const security = info.code
      return sendMail({ targetEmail: destination, code: security }).then(function (res) {
        return 'sendEmail'
      })
    },
    async stateLogin ({ commit }) {
      // すでにログインされている場合 ログインされる
      let currentUser = null
      firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
          console.log('checkuser', user)
          currentUser = user
          commit('onUserStatusUid', currentUser.uid)
          commit('onLoginUser', currentUser)
        }
      })
    }
  },
  modules: {
  }
})
