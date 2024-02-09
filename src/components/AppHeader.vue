<script>

export default {
  name: "AppHeader"
}

</script>

<template>
  <header>

    <div class="container">

      <figure>
        <img src="../assets/img/Yu-Gi-Oh!.png" alt="Yu-Gi-Oh Logo">
      </figure>
      <h3>Yu-Gi-Oh Api</h3>

    </div>
  </header>
</template>

<style scoped>
header {

  background-color: rgb(0, 0, 0);
  padding-block: 30px;
  color: white;

  div {

    display: flex;
    flex-direction: column;
    align-items: center;

    figure {

      width: 200px;
      margin-bottom: 10px;
    }
  }


}
</style>
