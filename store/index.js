export const state = () => ({
    games: [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]],
    playerId: 1
})

export const mutations = {
    onSelect(state, index) {
        if(state.games[index.rows][index.cols] == -1) {
            let states = JSON.parse(JSON.stringify(state.games))
            states[index.rows][index.cols] = state.playerId;
            state.games = states;
            state.playerId = (state.playerId == 1) ? 2 : 1;
        }
    },
    getWinnerId() {

    }
}