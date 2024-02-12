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

      store.apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'

      if (store.selectValue !== "all") {
        store.apiUrl += `?archetype=${store.selectValue}`
      } else {
        store.apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
      }

      axios
        .get(store.apiArchetype)
        .then(res => {
          store.cardsArchetype = res.data
        })

      setTimeout(() => {
        axios
          .get(store.apiUrl)
          .then(res => {
            console.log(res.data)
            store.yugiCards = res.data.data

            store.loading = false
          })
      }, 2000)
    },
  },
  mounted() {
    this.getCards()
  }
}
</script>

<template>
  <AppHeader />
  <AppMain @filter="getCards" />
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
