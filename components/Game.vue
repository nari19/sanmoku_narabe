<template>
  <div class="gameboard">

    <div class="row" v-for="row in games" :key="row">
      <div class="col-4 panel" v-for="state in row" :key="state">
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
