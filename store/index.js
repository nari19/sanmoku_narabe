export const state = () => ({
    games: [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]],
    playerId: 1
})

export const mutations = {
    change(state, n) {
        state.games[n] = "●"
    }
}