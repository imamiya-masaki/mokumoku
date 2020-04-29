<template>
    <div class="leftBar">
      <v-navigation-drawer
        v-model="isShow"
        absolute
        temporary
        app
      >
        <v-list-item>
          <!-- <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>John Leider</v-list-item-title>
          </v-list-item-content> -->
          <side-var-profile/>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>

          <v-list-item
            v-for="item in getItem"
            :key="item.title"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  </div>
</template>
<script>
// @ is an alias to /src
import SideVarProfile from '@/components/navigate/SideVarProfile'
export default {
  name: 'LeftBar',
  components: {
    SideVarProfile
  },
  data () {
    return {
      item: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'Test', icon: 'dashboard' }
      ],
      isShow: false,
      enShow: false
    }
  },
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  mounted: function () {
    console.log('refs', this.isShow)
  },
  computed: {
    getItem: function () {
      return this.item
    },
    username  () {
      return this.$store.getters.email
    },
    userStatus () {
      return this.$store.getters.isSignedIn
    },
    getRefs () {
      console.log('this.$refs.showLeft', this.$refs)
      return this.$refs.showLeft
    }
  },
  watch: {
    // dom操作なrefsよりもemitとpropsでのdrawer操作を選んだ
    drawer () {
      console.log('drawer', this.drawer)
      this.isShow = this.drawer
    },
    isShow () {
      console.log('isShow', this.isShow)
      this.$emit('show', this.isShow)
    }
  }
}
</script>
