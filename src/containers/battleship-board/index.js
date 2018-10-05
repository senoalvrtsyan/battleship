
import React, { PureComponent } from 'react';
import BattleshipBoardUnit from '../../components/battleship-board-unit';
import './style.css';

export default class BattleshipBoard extends PureComponent {
    generateBoardUnits = (row = 10, col = 10) => {
        const verticalArray = [];
        for (let i = 0; i < col; i++) {
            const arr = [];
            for (let j = 0; j < row; j++) {
                arr.push(
                    <BattleshipBoardUnit
                        key={`${i}${j}`}
                        value={`${i},${j}`}
                    />
                );
            }
            verticalArray.push(<div key={i}>{arr}</div>);
        }
        return verticalArray;
    };
    render() {
        return (
            <div className="battleshipBoard">
                {
                    this.generateBoardUnits()
                }
            </div>
        );
    }
}
