
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const PlayerBoard = (props) => (
    <div className={props.isFirstPlayer ? 'player-board green' : 'player-board orange'}>
        <h1>
            {props.score < 10 ? `0${props.score}` : props.score}
        </h1>
        <hr/>
        <p>{props.title}</p>
    </div>
);

PlayerBoard.propTypes = {
    title: PropTypes.string,
    score: PropTypes.number,
    isFirstPlayer: PropTypes.bool
};

export default PlayerBoard;

