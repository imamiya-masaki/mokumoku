<template>
  <div class="signup">
    <v-form v-model="valid"
    lazy-validation
    class="mx-auto">
    <v-container>
          <v-text-field
            v-model="name"
            :rules="userRules"
            label="user name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="Email"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="password"
            required
          ></v-text-field>
    </v-container>
  </v-form>
  <div class="my-2 text-center">
    <v-btn small :disabled="!valid" color="primary" @click="sendCreateUser()">sign up for mokumoku</v-btn>
  </div>
  </div>
</template>

<script>
//  import firebase from 'firebase'
import { mapActions } from 'vuex'
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
      password: '',
      passwordRules: [
        v => !!v,
        v => v.length > 4
      ],
      emailRules: [
        v => !!v,
        v => /.+@.+/.test(v)
      ],
      userRules: [
        v => !!v
      ]
    }
  },
  methods: {
    ...mapActions([
      // action
      'createUser'
    ]),
    sendCreateUser: function () {
      let user = {}
      user.email = this.email
      user.name = this.name
      user.password = this.password
      const self = this
      const sendEmail = this.email
      this.createUser(user).then(function (output) {
        console.log('output', output)
        console.log('self', self, sendEmail)
        self.$emit('success', sendEmail)
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
