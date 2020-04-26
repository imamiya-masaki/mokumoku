<template>
  <div class="SideVarProfile" v-if="userStatus">
    <p>{{ user.name }}</p>
    <p>Sign out</p>
  </div>
  <div v-else>
    <router-link to="/auth">
      <p>Sign in ?</p>
    </router-link>
  </div>
</template>

<script>
// import Firebase from '@/firebase'
export default {
  name: 'SideVarProfile',
  components: {
  },
  data () {
    return {
    }
  },
  mounted: function () {
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    userStatus () {
      return this.$store.getters.isSignedIn
    }
  },
  method: {
  }
}
</script>

<style lang="scss">
</style>
