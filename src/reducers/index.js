
import { combineReducers } from 'redux';
import { boardUnits } from './board-units';
import { ships } from './ships';

export default combineReducers({
    boardUnits,
    ships
});

