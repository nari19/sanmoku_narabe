export const state = () => ({
    games: [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]],
    playerId: 1
})

export const actions = {
    onSelect(context, index) {
        const games = this.state.games;
        if(games[index.rows][index.cols] == -1) {

            let states = JSON.parse(JSON.stringify(games))
            states[index.rows][index.cols] = this.state.playerId;

            // 同期処理が必要
            const winnerId = getWinnerId(states);
            context.commit('changePanel', states);
            if(winnerId != -1) {
          　    context.commit('finishGame');
                alert((winnerId==1 ? '○' : '×') + ' さんの勝ちです。おめでとうございます！');
            }
        }    


        function getWinnerId(states) {
            for(let i = 0; i < 3 ; i++){
                // 横の列
                let row = states[i];
                if(isStatesFilled(row)) { return row[0]; }
                // 縦の列
                let col = [ states[0][i], states[1][i], states[2][i] ];
                if(isStatesFilled(col)) { return states[0][i]; }
            }

            // ななめ
            let skew1 = [ states[0][0], states[1][1], states[2][2] ];
            if(isStatesFilled(skew1)) { return states[0][0]; }
            var skew2 = [ states[0][2], states[1][1], states[2][0] ];
            if(isStatesFilled(skew2)) { return states[0][2]; }

            return -1;
        }

        function isStatesFilled(states) {
            return( states[0] != -1 && states[0] == states[1] && states[1] == states[2] );
        }
    }
}

export const mutations = {
    changePanel(state, states) {
            state.games = states;
            state.playerId = (state.playerId == 1) ? 2 : 1;
    },
    finishGame(state) {
        state.games = [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]];
    }
}