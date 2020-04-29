<template>
  <div class="SignComponents">
    <v-card
    class="center"
    max-width="350">
    <v-tabs
    centered
    fixed-tabs>
      <v-tab>
        sign in
      </v-tab>
      <v-tab>
        register
      </v-tab>
    </v-tabs>
      <v-card-text>
        <sign-up/>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import SignUp from '@/components/auth/SignUp'
export default {
  name: 'SignComponents',
  // signin/signupをcardで管理するほうがかっこいいのでここに作る
  components: {
    SignUp
  },
  data () {
    return {
    }
  },
  mounted: function () {
  },
  computed: {
  },
  method: {
  }
}
</script>

<style lang="scss">
.center {
  margin: auto;
}
</style>
