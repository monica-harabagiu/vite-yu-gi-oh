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

    flex-basis: calc(100% / 5);
    border: 1px solid #E8BA3B;
    /* box-shadow: 0 0 10px #a5801a; */
    background-color: #212529;
    color: white;
    border-radius: 10px;
    text-align: center;

    .card-text {

        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>
