<template>
    <div class="message">
        <p v-if="playerId==1">◯のターン</p>
        <p v-if="playerId==2">×のターン</p>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    name: 'Message',
    computed: {
        ...mapState({
            playerId: state => state.playerId,
        })
    },
    methods: {
     ...mapMutations([]),
     ...mapActions([])
   }
}
</script>

<style lang="scss" scoped>
    .message{
        position: fixed;
        top: 0.3vh;
        right: 0;
        font-size: 1.4em;
        padding: 0.2em 1em;
        margin: 1em 0;
        background: #fafafa;
        border-left: solid 6px #5bb7ae;
        box-shadow: 0px 2px 3px rgba(147, 147, 147, 0.33);
        p {
            margin: 0; 
            padding: 0;
        }
    }
</style>