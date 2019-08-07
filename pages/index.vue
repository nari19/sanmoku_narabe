<template>
  <div class="container">
    <h1 class="subtitle">sanmoku_narabe</h1>

     <h1 class="h1">Nuxt Bootstrap</h1>
    <b-button variant="primary">Primary Button</b-button>

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
import Logo from '~/components/Logo.vue'

export default {
  data() {
    return { 
      games: ["◻️","◻️","◻️","◻️","◻️","◻️"]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>