<script>
import SingleCard from './SingleCard.vue'
import AppLoader from './AppLoader.vue'
import { store } from '../store'

export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
    components: {
        SingleCard,
        AppLoader
    }
}

</script>


<template>
    <main>
        <div class="container">

            <div class="header-category">
                <select name="card-categories" id="category-select">
                    <option value="Alien">Alien</option>
                </select>

                <div class="header-cards-counter">
                    <h5>Found {{ store.yugiCards.length }} cards</h5>
                </div>
            </div>


            <div class="cards">

                <AppLoader v-if="(store.loading)" />

                <SingleCard v-for="(element, index) in store.yugiCards" :key="index"
                    :propsImgUrl="element.card_images[0].image_url" :propsName="element.name"
                    :propsArchetype="element.archetype" />

            </div>

        </div>
    </main>
</template>


<style lang="scss" scoped>
main {

    background-color: #212529;
    padding-block: 50px;

    .header-category {

        display: flex;
        margin-top: 30px;
        margin-bottom: 50px;
        gap: 20px;


        select {

            border: 0;
            padding: 5px 20px;
            border-radius: 5px;
        }

        .header-cards-counter {

            background-color: #E8BA3B;
            padding: 10px;
            border-radius: 5px;
        }
    }


    .cards {

        display: flex;
        flex-wrap: wrap;
        gap: 20px;

    }
}
</style>