
const initialState = {};

export const ships = (state = initialState, action) => {
    console.log(action);
    if ('GENERATE_SHIPS' === action.type) {
        console.log(action);
        return {
            ...state,
            ...action.payload
        };
    }
    return state;
};
