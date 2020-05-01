<template>
  <div class="SignComponents" v-if="!confirmComponent">
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
          <sign-in/>
        </v-card-text>
      </v-tab-item>
      <v-tab-item :key="'register'">
        <v-card-text>
          <sign-up @success="changeConfirmMail"/>
        </v-card-text>
      </v-tab-item>
    </v-tabs-items>
    </v-card>
  </div>
  <div v-else>
    <v-card
    class="center"
    max-width="500"
    height="200">
    <span class="">
      {{ this.confirmEmail }} にメールをお送り致しました。
      確認後、ログインできます！
    </span>
    </v-card>
  </div>
</template>

<script>
import SignUp from '@/components/auth/SignUp'
import SignIn from '@/components/auth/SignIn'
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
    changeConfirmMail (email) {
      console.log('email', email, this.confirmComponent)
      this.confirmEmail = email
      this.confirmComponent = true
    }
  }
}
</script>

<style lang="scss">
.center {
  margin: auto;
}
</style>
