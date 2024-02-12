import { reactive } from "vue";

export const store = reactive({
    loading: false,
    yugiCards: [],
    cardsArchetype: [],
    selectValue: 'all',
    showCards: 40,
    apiUrl: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    apiArchetype: 'https://db.ygoprodeck.com/api/v7/archetypes.php'
})