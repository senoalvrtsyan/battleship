
const suffix = 'BOARD';

export const generateBoard = (dispatch, board) => {
    dispatch({
        type: `GENERATE_${suffix}`,
        payload: board
    });
};

export const addShipsToBoard = (dispatch, ships) => {
    dispatch({
        type: `ADD_SHIPS_TO_${suffix}`,
        payload: ships
    });
};

export const handleBoardUnitClick = (dispatch, coordinates) => {
    dispatch({
        type: `CLICK_ON_${suffix}`,
        payload: coordinates
    });
};
