<template>
  <div class="auth">
    <p class="title-name">Mokumoku</p>
    <div>
      <sign-component/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SignComponent from '@/components/auth/SignComponent.vue'
// import CreateUser from '@/components/auth/CreateUser.vue'
import firebase from 'firebase'
export default {
  name: 'Auth',
  components: {
    SignComponent
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
    const self = this
    if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
      let email = window.localStorage.getItem('emailForSignIn')
      if (!email) {
        email = window.prompt('Please provide your email for confirmation')
      }
      console.log('info', email, window.location.href)
      firebase.auth().signInWithEmailLink(email, window.location.href)
        .then(function (result) {
          window.localStorage.removeItem('emailForSignIn')
          console.log('user', result, self.isEmailLink)
          self.isEmailLink = true
          self.email = email
          console.log('self', self.email)
        })
        .catch(function (err) {
          console.log('err', err, self.isEmailLink)
        })
    }
  }
}
</script>
<style scoped>
.title-name {
  text-align: center;

}
</style>
