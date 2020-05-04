<template>
  <div class="SignComponents">
    <v-card
    class="center"
    max-width="350">
    <v-tabs
    centered
    v-model="tabMenu"
    fixed-tabs>
      <v-tab :key="'signIn'">
        sign in
      </v-tab>
      <v-tab :key="'register'">
        register
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tabMenu">
      <v-tab-item :key="'signIn'">
        <v-card-text>
          <sign-in @success="loginOrSignInAccount"/>
        </v-card-text>
      </v-tab-item>
      <v-tab-item :key="'register'">
        <v-card-text>
          <sign-up @success="loginOrSignInAccount"/>
        </v-card-text>
      </v-tab-item>
    </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
import SignUp from '@/components/auth/SignUp'
import SignIn from '@/components/auth/SignIn'
import router from '@/router'
export default {
  name: 'SignComponents',
  // signin/signupをcardで管理するほうがかっこいいのでここに作る
  components: {
    SignUp,
    SignIn
  },
  data () {
    return {
      tabMenu: 'signIn',
      confirmComponent: false,
      confirmEmail: ''
    }
  },
  mounted: function () {
  },
  computeds: {
  },
  methods: {
    changeSignIn: function () {
      this.tabMenu = 'signIn'
    },
    changeRegister: function () {
      this.tabMenu = 'register'
    },
    loginOrSignInAccount: function () {
      // ログインかアカウントcreateが出来たらここに返してもらう？
      router.push({ path: '/' })
    }
  }
}
</script>

<style lang="scss">
.center {
  margin: auto;
}
</style>
