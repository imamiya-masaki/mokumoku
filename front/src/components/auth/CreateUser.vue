<template>
  <div class="signup">
    <h2>Create sign up</h2>
    <input type="text" placeholder="email" v-model="email" disabled>
    <input tyle="text" placeholder="password" v-model="passWord">
    <button>Register</button>
  </div>
</template>

<script>
// import firebase from 'firebase'
export default {
  name: 'SignUp',
  props: {
    email: String
  },
  data () {
    return {
      passWord: ''
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
