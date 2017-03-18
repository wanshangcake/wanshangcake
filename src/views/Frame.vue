<template>
  <div class="page-frame">
    <header-component></header-component>
    <div class="page-frame-content">
      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>
<script>
import HeaderComponent from './common/Header'
import { mapActions } from 'vuex'
import types from '@store/types'

export default{
  name: 'Frame',
  props: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  components: {
    HeaderComponent
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.page-frame {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .page-frame-content {
    flex: 1;
    display: flex;
  }
  main {
    flex: 1;
  }
}
</style>
