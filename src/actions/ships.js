
const suffix = 'SHIPS';
export const generateShips = (dispatch, ships) => {
    dispatch({
        type: `GENERATE_${suffix}`,
        payload: ships
    });
};

export const cloneShips = (dispatch, ships) => {
    dispatch({
        type: `CLONE_${suffix}`,
        payload: ships
    });
};

export const addShipData = (dispatch, shipData) => {
    dispatch({
        type: `ADD_${suffix}_DATA`,
        payload: shipData
    });
};
