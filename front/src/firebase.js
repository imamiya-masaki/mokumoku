import firebase from '@firebase/app'
import '@firebase/auth'
import store from './store'

const config = {
  apiKey: 'AIzaSyBe_BBIDtz_htiDDEpIEQuae_TrB5uLsKk',
  authDomain: 'mokumoku-on-8c151.firebaseapp.com',
  databaseURL: 'https://mokumoku-on-8c151.firebaseio.com',
  projectId: 'mokumoku-on-8c151',
  storageBucket: 'mokumoku-on-8c151.appspot.com',
  messagingSenderId: '640555037509',
  appId: '1:640555037509:web:fbfe7fbc72da734160c42c',
  measurementId: 'G-7JWVN9MLZY'
}

export default {
  init () {
    firebase.initializeApp(config)
    firebase.analytics()
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
  },
  login () {
    const provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
  },
  logout () {
    firebase.auth().signOut()
  },
  onAuth () {
    firebase.auth().onAuthStateChanged(user => {
      user = user || {}
      store.commit('onAuthStateChanged', user)
      store.commit('onUserStatusChanged', !!user.uid)
    })
  }
}
