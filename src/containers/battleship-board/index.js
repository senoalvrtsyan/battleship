
import React, { PureComponent } from 'react';
import BattleshipBoardUnit from '../../components/battleship-board-unit';
import { connect } from 'react-redux';
import { generateShips } from '../../actions/ships';
import './style.css';

class BattleshipBoard extends PureComponent {
    componentWillMount() {
        const col = 10;
        const row = 10;
        const obj = {};
        for (let i = 0; i < col; i++) {
            obj[i] = {};
            for (let j = 0; j < row; j++) {
                obj[i][j] = {
                    isShip: false,
                    isClicked: false,
                };
            }
        }
        this.props.genShips(obj);
    }

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
        console.log(this.props);
        return (
            <div className="battleshipBoard">
                {
                    this.generateBoardUnits()
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    ships: state.ships,
});

const mapDispatchToProps = (dispatch) => ({
    genShips: (ships) => generateShips(dispatch, ships),
});

export default connect(mapStateToProps, mapDispatchToProps)(BattleshipBoard);
