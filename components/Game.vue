<template>
  <div class="gameboard">
    <div class="row" v-for="n in [0,1,2]" :key="n">
      <div class="col-4 panel" @click="change(n*3)">{{ games[n*3] }}</div>
      <div class="col-4 panel">{{ games[n*3+1] }}</div>
      <div class="col-4 panel">{{ games[n*3+2] }}</div>
    </div>

  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
   name: 'Game',
   computed: {
     ...mapState({
       games: state => state.games,
   }),
   methods: {
     ...mapMutations([
       'change'
     ]),
     ...mapActions([

     ])
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
