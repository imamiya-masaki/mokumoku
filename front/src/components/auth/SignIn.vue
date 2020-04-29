<template>
  <div class="signin">
    <v-form v-model="valid"
    lazy-validation
    class="mx-auto">
    <v-container>
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
    <v-btn small color="primary" @click="sendCreateUser()">sign up for mokumoku</v-btn>
  </div>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
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
        v => v.length > 8
      ],
      emailRules: [
        v => !!v,
        v => /.+@.+/.test(v)
      ]
    }
  },
  methods: {
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
