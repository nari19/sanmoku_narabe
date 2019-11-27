<template>
  <div class="gameboard">

    <div class="row" v-for="(row, rowsIndex) in games" :key="row">
      <div class="col-4 panel" v-for="(state, colsIndex) in row" @click="onSelect(rowsIndex, colsIndex)" :key="state">
        <div style="color: #6c757d;" v-if="state==1">○</div>
        <div style="color: #6c757d;" v-if="state==2">×</div>
      </div>
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
     })
   },
   methods: {
     onSelect: function(rowsIndex, colsIndex) {
       if (this.games[rowsIndex][colsIndex] != -1) {
         alert("aaaa")
       } else {
         alert("bbbb")
         let states = JSON.parse(JSON.stringify(this.games))
         states[rowIndex][colsIndex] = this.playerId;
         this.states = states;
         this.playerId = (this.playerId == 1) ? 2 : 1;
       }


     },
     ...mapMutations([
       'change'
     ]),
     ...mapActions([

     ])
   }
  }
</script>
<style lang="scss" scoped>
.gameboard {
  margin: 30px auto 15px auto;
  max-width: 420px;
  .panel {
    height: 15vh;
    padding: 3px;
    background-color: #badfdb;
    background-clip : content-box;
    border-radius: 10px;
    cursor: pointer;
  }
  .panel:hover {
    background-color: #abceca;
    background-clip : content-box;
  }
  .panel div {
    position: relative;
    font-size:8.2vh;
    top: 0.7vh;
  }
}

</style>
