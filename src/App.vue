<script>
import AppHeader from './components/AppHeader.vue'
import { store } from './store'

export default {
  components: {
    AppHeader
  },
  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <AppHeader/>
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
