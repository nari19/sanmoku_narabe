<template>
  <div class="container">

    <Message />

    <div class="title">sanmoku_narabe</div>
    <Game />
    <b-button class="primary" @click="finishGame()">Reset this game..</b-button>

  </div>
</template>

<script>
import Game from '~/components/Game.vue'
import Message from '~/components/Message.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    Game,
    Message
  },
  computed: { },
  methods: {
    ...mapMutations([ 'finishGame' ])
  },
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
    word-spacing: 5px;
    padding-bottom: 15px;
  }
}
</style>