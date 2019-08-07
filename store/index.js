export const state = () => ({
    games: ["1","2","3","4","5","6","7","8","9"]
})

export const mutations = {
    change (state, n) {
        state.games[n] = "●"
    }
}