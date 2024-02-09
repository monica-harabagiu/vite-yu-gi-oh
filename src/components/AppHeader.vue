<script>

export default {
  name: "AppHeader"
}

</script>

<template>
  <header>

    <div>

      <figure>
        <img src="../assets/img/Yu-Gi-Oh!.png" alt="Yu-Gi-Oh Logo">
      </figure>
      <h1>Yu-Gi-Oh Api</h1>

    </div>
  </header>
</template>

<style scoped>

header {

  background-color: white;
  padding-block: 30px;

  div {

    display: flex;
    align-items: center;
    width: 80%;
    margin: 0 auto;

    figure {

      width: 100px;
    }
  }


}
</style>
