<script>

export default {
    name: "SingleCard",
    props: {
        propsImgUrl: String,
        propsName: String,
        propsArchetype: String
    }
}

</script>


<template>
    <div class="card">
        <figure>
            <img :src="propsImgUrl" :alt="propsName">
        </figure>
        <div class="card-text">
            <h3>{{ propsName }}</h3>
            <span>{{ propsArchetype }}</span>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.card {

    flex-basis: calc((100% / 5) - 20px + (20px / 5));
    background-color: black;
    color: white;
    border-radius: 10px;
    text-align: center;
    overflow: hidden;

    &:hover {
        border: 1px solid #E8BA3B;
        box-shadow: 0 0 10px #a5801a;
        cursor: pointer;
    }

    &:hover img {
        transform: scale(1.1);
    }

    figure {
        overflow: hidden;

        img {

            transition: all 1s ease-out;
        }
    }

    .card-text {

        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>
