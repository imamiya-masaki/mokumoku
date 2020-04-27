<template>
  <div class="signup">
    <h2>sign up</h2>
    <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="name"
            :counter="10"
            label="名前を入力してください"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="passWord"
            :rules="passwordRules"
            label="password"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <v-app>
    <div class="my-2 text-center">
      <v-btn small color="primary">Primary</v-btn>
    </div>
  </v-app>
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
      valid: false,
      name: '',
      email: '',
      passord: '',
      passwordRules: [
        v => !!v,
        v => v.length > 8
      ],
      emailRules: [
        v => !!v,
        v => /.+@.+/.test(v)
      ]
    }
  },
  methods: {
    SendCreateEmail: function () {
      const actionCodeSettings = {
        url: 'http://localhost:8888/auth',
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
          console.log('success!')
        })
        .catch(function (error) {
        // Some error occurred, you can inspect the code: error.code
          console.log('err', error)
        })
    }
  },
  mounted: function () {
    console.log('SignUp!')
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
center {
  text-align: center;
}
</style>
