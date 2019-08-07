<template>
  <div class="gameboard">
    <div class="col-4">{{ games }}</div>
    <!-- <div class="row">
      <div class="col-4">{{ games[0] }}</div>
      <div class="col-4">{{ games[1] }}</div>
      <div class="col-4">{{ games[2] }}</div>
    </div>
    <div class="row">
      <div class="col-4">{{ games[3] }}</div>
      <div class="col-4">{{ games[4] }}</div>
      <div class="col-4">{{ games[5] }}</div>
    </div>
    <div class="row">
      <div class="col-4">{{ games[6] }}</div>
      <div class="col-4">{{ games[7] }}</div>
      <div class="col-4">{{ games[8] }}</div>
    </div> -->

  </div>
</template>

<script>
export default {
   computed: {
    games () {
      return this.$store.state.games
    }
  }
}
</script>
<style lang="scss" scoped>
.gameboard {
  margin: 30px auto 15px auto;
  max-width: 420px;
  .row div {
    height: 15vh;
    padding: 3px;
    background-color: #badfdb;
    background-clip : content-box;
    border-radius: 10px;
  }
  .row div:hover {
    background-color: #abceca;
    background-clip : content-box;
  }
}

</style>
