<template>
  <div id="app">
    <top-var/>
    <router-view/>
  </div>
</template>

<script>
import TopVar from '@/components/navigate/TopVar.vue'

export default {
  name: 'App',

  components: {
    TopVar
  },

  data: () => ({
    //
  })
}
</script>
