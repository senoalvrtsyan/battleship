
import { initialState } from './ships';

export const cloneShips = (state = initialState.shipTypes, action) => {
    if (action.type === 'CLONE_SHIPS') {
        const ships = { ...state.shipTypes };
        return {
            ...ships,
            ...action.payload
        };
    } else if (action.type === 'ADD_SHIPS_DATA') {
        const ships = { ...state };
        const { shipType } = action.payload.shipData;
        ships[shipType].positions = ships[shipType].positions
            ? [ ...ships[shipType].positions, action.payload.coordinates ]
            : [ action.payload.coordinates ];
        return {
            ...ships
        };
    }
    return state;
};
