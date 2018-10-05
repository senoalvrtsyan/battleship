
import { combineReducers } from 'redux';
import { boardUnits } from './board-units';
import { ships } from './ships';
import { cloneShips } from './clone-ships';
import { playerBoard } from './player-board';

export default combineReducers({
    boardUnits,
    cloneShips,
    ships,
    playerBoard
});

