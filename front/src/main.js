import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'
Vue.use(Vuetify)
Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: 'AIzaSyBe_BBIDtz_htiDDEpIEQuae_TrB5uLsKk',
  authDomain: 'mokumoku-on-8c151.firebaseapp.com',
  databaseURL: 'https://mokumoku-on-8c151.firebaseio.com',
  projectId: 'mokumoku-on-8c151',
  storageBucket: 'mokumoku-on-8c151.appspot.com',
  messagingSenderId: '640555037509',
  appId: '1:640555037509:web:fbfe7fbc72da734160c42c',
  measurementId: 'G-7JWVN9MLZY'
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
