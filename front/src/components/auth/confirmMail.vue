<template>
  <div class="confirmMail">
    <v-card
    class="center"
    max-width="500">
    {{ this.email }} にメールをお送り致しました。
    確認後、ログインできます！
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'confirmMail',
  components: {
  },
  data () {
    return {
    }
  },
  props: {
    email: String
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
