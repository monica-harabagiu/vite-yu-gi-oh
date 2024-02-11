import { reactive } from "vue";

export const store = reactive({
    loading: false,
    yugiCards: [],
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0'
})