<template>
  <header class="header">
  </header>
</template>

<script>
import Vue from 'vue'
import Cookies from 'js-cookie'
import { $page } from '@helper'
// import { mapGetters } from 'vuex'
// import types from 'store/types'
export default {
  name: 'header',
  data () {
    return {
    }
  },
  components: {
  },
  computed: {
    // or: this.$store.getters[types.user.getter.user]
    // ...mapGetters({
    //   'user': types.user.getter.user
    // })
  },
  methods: {
    lang (lang) {
      Cookies.set('language', lang)
      Vue.config.lang = lang
    },
    toggleMenu () {
      let app = document.getElementById('app')
      app.className = !app.className ? 'menu-expand' : ''
    },
    logout () {
      return $page.account.logout().then(result => {
        Cookies.remove('isLogin')
        this.$router.push('/login')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
}
</style>
