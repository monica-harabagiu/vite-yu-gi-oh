<script>
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import axios from 'axios'
import { store } from './store'

export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCards() {

      store.loading = true

      setTimeout(() => {
        
        axios
          .get(store.apiUrl)
          .then(res => {
            console.log(res.data)
            store.yugiCards = res.data.data
  
            store.loading = false
          })
      }, 2000)
    }
  },
  mounted() {
    this.getCards()
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
