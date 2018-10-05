
const initialState = {
    player1: {
        score: 0,
        title: 'Player 1',
        isFirstPlayer: true
    },
    player2: {
        score: 0,
        title: 'Player 2'
    }
};
const suffix = 'PLAYER';

export const playerBoard = (state = initialState, action) => {
    if (action.type === `ADD_${suffix}_INFO`) {
        return {
            ...state,
            ...action.payload
        };
    }
    return state;
};
