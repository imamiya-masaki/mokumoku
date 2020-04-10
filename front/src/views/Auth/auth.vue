<template>
  <div class="auth">
    <div v-if="!isEmailLink">
      <sign-up/>
    </div>
    <div v-else>
      <create-user :email="email"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SignUp from '@/components/auth/SignUp.vue'
import CreateUser from '@/components/auth/CreateUser.vue'
import firebase from 'firebase'
export default {
  name: 'Auth',
  components: {
    SignUp,
    CreateUser
  },
  data () {
    return {
      isEmailLink: false,
      email: ''
    }
  },
  // computed: {
  // },
  mounted: function () {
    console.log('auth...', this.isEmailLink, this.email)
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn')
      if (!email) {
        email = window.prompt('Please provide your email for confirmation')
      }
      console.log('info', email, window.location.href)
      firebase.auth().signInWithEmailLink(email, window.location.href)
        .then(function (result) {
          window.localStorage.removeItem('emailForSignIn')
          console.log('user', result)
          this.isEmailLink = true
          this.email = email
        })
        .catch(function (err) {
          console.log('err', err)
        })
    }
  }
}
</script>
