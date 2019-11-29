export const state = () => ({
    games: [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]],
    playerId: 1
})

export const mutations = {
    changePanel(state, index) {
            state.games = index;
            state.playerId = (state.playerId == 1) ? 2 : 1;
    },
}

export const actions = {
    onSelect(context, index) {
        const games = this.state.games;
        if(games[index.rows][index.cols] == -1) {
            let states = JSON.parse(JSON.stringify(games))
            states[index.rows][index.cols] = this.state.playerId;
          　context.commit('changePanel', states)
        }
    },
}