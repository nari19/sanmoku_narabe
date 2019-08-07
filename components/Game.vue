<template>
  <div class="gameboard">
    
    <div class="row">
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
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return { 
      games: ["◻️","◻️","◻️","◻️","◻️","◻️","◻️","◻️","◻️"]
    }
  }
}
</script>
<style lang="scss" scoped>
.gameboard {
  margin: 30px auto 0 auto;
  max-width: 450px;
  .row div {
    height: 15vh;
  }
}

</style>
