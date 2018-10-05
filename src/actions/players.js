
const suffix = 'PLAYER';
export const addPlayerInfo = (dispatch, playerData) => {
    dispatch({
        type: `ADD_${suffix}_INFO`,
        payload: playerData
    });
};
