
const initialState = {};
const suffix = 'BOARD';
export const boardUnits = (state = initialState, action) => {
    if (action.type === `GENERATE_${suffix}`) {
        return {
            ...state,
            ...action.payload
        };
    } else if (action.type === `ADD_SHIPS_TO_${suffix}`) {
        const ships = { ...state };
        action.payload.forEach((unit) => {
            ships[unit[0]][unit[1]].isShip = true;
        });
        return ships;
    } else if (action.type === `CLICK_ON_${suffix}`) {
        const ships = { ...state };
        ships[action.payload[0]][action.payload[1]].isClicked = true;
        return ships;
    }
    return state;
};
