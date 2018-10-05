
import React from 'react';
import './style.css';

const PlayerBoard = (props) => (
    <div className={props.isFirstPlayer ? "player-board green" : "player-board orange"}>
        <h1>{props.score}</h1>
        <p>{props.title}</p>
    </div>
);

export default PlayerBoard;

