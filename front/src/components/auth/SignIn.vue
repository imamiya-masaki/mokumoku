<template>
  <div class="signin">
    <v-form v-model="valid"
    lazy-validation
    class="mx-auto">
    <v-container>
          <p v-if="emailStatus === 'inConfirm'">emailの確認ができていません</p>
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
    <v-btn small :disabled="!valid" color="primary" @click="sendInUser()">sign in for mokumoku</v-btn>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SignIn',
  props: {
    msg: String
  },
  data () {
    return {
      valid: false,
      email: '',
      password: '',
      emailStatus: '',
      passwordRules: [
        v => !!v,
        v => v.length > 4
      ],
      emailRules: [
        v => !!v,
        v => /.+@.+/.test(v)
      ]
    }
  },
  methods: {
    ...mapActions([
      // action
      'signInUser'
    ]),
    sendInUser: function () {
      console.log('this', this.email, this.password)
      this.signInUser({ email: this.email, password: this.password }).then(function (output) {
        console.log('output', output)
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
