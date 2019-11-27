export const state = () => ({
    games: [[1, 1, 2], [-1, -1, -1], [-1, -1, -1]],
    playerId: 1
})

export const mutations = {
    onSelect(state, rowsIndex, colsIndex) {
        if(state.games[rowsIndex][colsIndex] != -1) {
            alert(rowsIndex, colsIndex);
            // alert('そのマスは、すでに選択されています！');
        } else {
            let states = JSON.parse(JSON.stringify(state.games))
            states[rowsIndex][colsIndex] = state.playerId;
            state.games = states;
            state.playerId = (state.playerId == 1) ? 2 : 1;
        }
    }
}