<script>

export default {
    name: "AppMain"
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
                    <h5>Found 39 cards</h5>
                </div>
            </div>


            <div class="cards">
                <div class="card">
                    <figure>
                        <img src="../assets/img/card-placeholder.jpeg" alt="">
                    </figure>
                    <div class="card-text">
                        <h3>Alien Grey</h3>
                        <span>Alien</span>
                    </div>

                </div>

            </div>

        </div>
    </main>
</template>


<style scoped>
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
    }
}
</style>