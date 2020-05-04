<template>
  <div class="home">
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
const URL_BASE = '/api/search/'

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      url: 'https://github.com/imamiya-masaki/mokumoku/commits/',
      search_list: []
    }
  },
  mounted: function () {
  },
  computed: {
  },
  methods: {
    get_ajax (url, name) {
      return axios.get(URL_BASE + url)
        .then((res) => {
          Vue.set(this, name, res.data)
          this.$emit('GET_AJAX_COMPLETE')
        })
    }
  }
}
</script>

<style lang="scss">
</style>
