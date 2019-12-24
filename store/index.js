export const state = () => ({
    games: [[-1, -1, -1], [-1, -1, -1], [-1, -1, -1]],
    playerId: 1,
    message: ''
})

export const actions = {
    onSelect(context, index) {
        const games = this.state.games;
        const states = JSON.parse(JSON.stringify(games))
        let winnerId = getWinnerId(states);

        if(games[index.rows][index.cols] == -1 && winnerId == -1) {
            states[index.rows][index.cols] = this.state.playerId;
            context.commit('changePanel', states);

            winnerId = getWinnerId(states);
            if(winnerId != -1) {
                context.commit('updateMessagee', (winnerId==1 ? 0 : 1));
            } else {
                const aryResult = Array.prototype.concat.apply([], states);
                if(aryResult.every(s => s!=-1)) { context.commit('updateMessagee', 2); }
            }
        }

        function getWinnerId(states) {
            for(let i = 0; i < 3 ; i++){
                const row = states[i];
                if(isStatesFilled(row)) { return row[0]; }
                const col = [ states[0][i], states[1][i], states[2][i] ];
                if(isStatesFilled(col)) { return states[0][i]; }
            }

            const skew1 = [ states[0][0], states[1][1], states[2][2] ];
            if(isStatesFilled(skew1)) { return states[0][0]; }
            const skew2 = [ states[0][2], states[1][1], states[2][0] ];
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
        state.message = '';
    },
    updateMessagee(state, num) {
        state.message = (num==0 ? '○ wins!!' : (num==1 ? '× wins!!' : 'draw...'));
    }
}