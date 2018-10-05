
import React, { PureComponent } from 'react';
import BattleshipBoardUnit from '../../components/battleship-board-unit';
import { connect } from 'react-redux';
import { generateBoard, addShipsToBoard } from '../../actions/board';
import lodashIsEqual from 'lodash/isEqual';
import PropTypes from 'prop-types';
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
                    isShip: false
                };
            }
        }
        this.props.genBoard(obj);
    }

    componentWillReceiveProps(nextProps) {
        if (!lodashIsEqual(nextProps.boardUnits, this.props.boardUnits)) {
            nextProps.addShips(nextProps.ships.reduce((acc, ship) => {
                return [ ...acc, ...ship.positions.map(item => ({ cordX: item[0], cordY: item[1], type: ship.ship })) ];
            }, []));
        }
    }

    generateBoardUnits = (row = 10, col = 10) => {
        const verticalArray = [];
        for (let i = 0; i < col; i++) {
            const arr = [];
            for (let j = 0; j < row; j++) {
                arr.push(
                    <BattleshipBoardUnit
                        key={`${i}${j}`}
                        value={[ i, j ]}
                    />
                );
            }
            verticalArray.push(<div key={i} className="battleship-board-column">{arr}</div>);
        }
        return verticalArray;
    };

    render() {
        return (
            <div className="battleship-board">
                {
                    this.generateBoardUnits()
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    boardUnits: state.boardUnits,
    ships: state.ships.layout
});

const mapDispatchToProps = (dispatch) => ({
    genBoard: (boardUnits) => generateBoard(dispatch, boardUnits),
    addShips: (ships) => addShipsToBoard(dispatch, ships)
});

BattleshipBoard.propTypes = {
    genBoard: PropTypes.func,
    addShips: PropTypes.func,
    boardUnits: PropTypes.object,
    ships: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(BattleshipBoard);
