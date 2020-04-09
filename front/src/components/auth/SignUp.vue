<template>
  <div class="signup">
    <h2>sign up</h2>
    <input type="text" placeholder="email" v-model="email">
    <button @click="SendCreateEmail()">Register</button>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'SignUp',
  props: {
    msg: String
  },
  data () {
    return {
      email: ''
    }
  },
  methods: {
    SendCreateEmail: function () {
      const actionCodeSettings = {
        url: 'http://localhost:8888/finishSignUp?cartId=1234',
        handleCodeInApp: true
      }
      const email = this.email
      console.log('email', email)
      firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
        .then(function () {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
          window.localStorage.setItem('emailForSignIn', email)
        })
        .catch(function (error) {
        // Some error occurred, you can inspect the code: error.code
          console.log('err', error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
