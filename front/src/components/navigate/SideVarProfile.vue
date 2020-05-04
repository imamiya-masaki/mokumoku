<template>
  <div class="SideVarProfile" v-if="userStatus">
    <p>{{ user.email }}</p>
    <div @click="onLogout()">Sign out</div>
  </div>
  <div v-else>
    <router-link to="/auth">
      <p>Sign in ?</p>
    </router-link>
  </div>
</template>

<script>
// import Firebase from '@/firebase'
import { mapActions } from 'vuex'
export default {
  name: 'SideVarProfile',
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    },
    userStatus () {
      console.log('user', this.$store.getters.getUser)
      return this.$store.getters.isSignedIn
    }
  },
  methods: {
    ...mapActions([
      // action
      'logOutUser'
    ]),
    onLogout: function () {
      return this.logOutUser()
    }
  }
}
</script>

<style lang="scss">
</style>
