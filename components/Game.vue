<template>
  <div class="gameboard">

    <div class="row" v-for="(row, rowsIndex) in games" :key="row">
      <div class="col-4 panel" v-for="(state, colsIndex) in row" 
          @click="onSelect({rows: rowsIndex, cols: colsIndex})" :key="state">
        <div v-if="state==1">○</div>
        <div  v-if="state==2">×</div>
      </div>
    </div>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
   name: 'Game',
   computed: {
     ...mapState({
       games: state => state.games
     })
   },
   methods: {
     ...mapActions([ 'onSelect' ])
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
    color: #6c757d;
  }
}
</style>
