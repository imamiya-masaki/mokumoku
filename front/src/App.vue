<template>
  <div id="app" @click.self="onClickRouterView()">
    <v-app>
    <top-var :clickParent="isClickRouterView" @propagated="isPropagated()" v-if="!nodeTopURL"/>
    <router-view/>
  </v-app>
  </div>
</template>

<script>
import TopVar from '@/components/navigate/TopVar.vue'

export default {
  name: 'App',

  components: {
    TopVar
  },
  data () {
    return {
      isClickRouterView: false,
      nonvisial: false
    }
  },
  computed: {
    nodeTopURL () {
      const path = this.$route.path
      console.log('path', path)
      if (path === '/auth') {
        return true
      }
      return false
    }
  },
  method: {
    isPropagated: function () {
      this.isClickRouterView = false
    },
    onClickRouterView: function () {
      this.isClickRouterView = true
    }
  }
}
</script>
