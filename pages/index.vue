<template>
  <div class="container">

    <div class="title">sanmoku_narabe</div>
    <Game />

    <b-button class="primary">Reset this game..</b-button>
  </div>
</template>

<script>
import Game from '~/components/Game.vue'

export default {
  components: {
    Game
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  padding-top: 10vh;
  justify-content: center;
  align-items: center;
  text-align: center;

  .title {
    font-weight: 300;
    font-size: 42px;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

}



</style>