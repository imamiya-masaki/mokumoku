import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import 'vuetify/dist/vuetify.min.css'
import firebase from 'firebase'
import colors from 'vuetify/lib/util/colors'
Vue.config.productionTip = false
const firebaseConfig = {
  apiKey: 'AIzaSyDdfqX2-zuKVpLo62cJ6Xi02Ac_UUkTWUI',
  authDomain: 'mokumoku-on.firebaseapp.com',
  databaseURL: 'https://mokumoku-on.firebaseio.com',
  projectId: 'mokumoku-on',
  storageBucket: 'mokumoku-on.appspot.com',
  messagingSenderId: '698367459658',
  appId: '1:698367459658:web:90094f9b9679a1af5201b3',
  measurementId: 'G-V5CWT8WMT8'
}
firebase.initializeApp(firebaseConfig)
firebase.analytics()
new Vue({
  router,
  store,
  vuetify,
  primary: colors.red.darken1,
  render: h => h(App)
}).$mount('#app')
