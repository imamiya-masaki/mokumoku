import firebase from '@firebase/app'
import '@firebase/auth'
import store from './store'

const config = {
  apiKey: 'AIzaSyDdfqX2-zuKVpLo62cJ6Xi02Ac_UUkTWUI',
  authDomain: 'mokumoku-on.firebaseapp.com',
  databaseURL: 'https://mokumoku-on.firebaseio.com',
  projectId: 'mokumoku-on',
  storageBucket: 'mokumoku-on.appspot.com',
  messagingSenderId: '698367459658',
  appId: '1:698367459658:web:90094f9b9679a1af5201b3',
  measurementId: 'G-V5CWT8WMT8'
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
