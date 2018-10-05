
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
            ships[unit.cordX][unit.cordY].isShip = true;
            ships[unit.cordX][unit.cordY].shipType = unit.type;
        });
        return ships;
    } else if (action.type === `CLICK_ON_${suffix}`) {
        const ships = { ...state };
        ships[action.payload[0]][action.payload[1]].isClicked = true;
        return ships;
    }
    return state;
};
