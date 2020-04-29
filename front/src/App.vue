<template>
  <div id="app" @click.self="onClickRouterView()">
    <v-app>
    <top-var :clickParent="isClickRouterView" @propagated="isPropagated()"/>
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
      isClickRouterView: false
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
