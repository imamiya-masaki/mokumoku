<template>
  <div class="top">
    <left-bar :drawer="showLeft" @show="getChangedLeft"/>
    <right-bar :drawer="showRight" @show="getChangedRight"/>
    <v-card
    color="grey lighten-4"
    :flat="true"
    tile
    class="border"
  >
    <v-toolbar flat dense>
      <v-app-bar-nav-icon @click.stop="onShowLeft()"></v-app-bar-nav-icon>

      <v-toolbar-title>MokuMoku</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-app-bar-nav-icon v-if="userVisibleMode" @click.stop="onShowRight()"></v-app-bar-nav-icon>
    </v-toolbar>
  </v-card>
  </div>
</template>

<script>
import LeftBar from '@/components/navigate/LeftBar.vue'
import RightBar from '@/components/navigate/RightBar.vue'
export default {
  name: 'topBar',
  props: {
    msg: String,
    clickParent: {
      type: Boolean,
      default: false
    }
  },
  components: {
    LeftBar,
    RightBar
  },
  data () {
    return {
      showLeft: false,
      showRight: false,
      userVisibleMode: false
    }
  },
  methods: {
    onShowLeft: function () {
      this.showLeft = !this.showLeft
      console.log('this.$refs', this.showLeft)
    },
    onShowRight: function () {
      this.showRight = !this.showRight
      console.log('this.$refs', this.showRight)
    },
    getChangedLeft: function (show) {
      console.log('show', show)
      this.showLeft = show
    },
    getChangedRight: function (show) {
      this.showRight = show
    }
  },
  watch: {
    clickParent () {
      console.log('clickParent')
      if (this.clickParent) {
        this.showLeft = false
        this.showRight = false
        this.$emit('propagated')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.border {
   border-bottom: solid 1.5px black;
}
</style>
