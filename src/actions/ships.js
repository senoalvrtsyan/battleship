
const suffix = 'SHIPS';
export const generateShips = (dispatch, ships) => {
    dispatch({
        type: `GENERATE_${suffix}`,
        payload: ships
    });
};
