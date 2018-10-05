import React, { Component } from 'react';
import './style.css';
import Hit from '../../assets/Hit.png';
import Miss from '../../assets/Miss.png';
import { connect } from 'react-redux';
import { handleBoardUnitClick } from '../../actions/board';

class BattleshipBoardUnit extends Component {

    handleClick = () => {
        !this.props.shipData.isClicked && this.props.handleClick(this.props.value);
    };
    render() {
        return (
            <div className="battleshipBoardUnit"
                onClick={this.handleClick}>
                {
                    this.props.shipData && this.props.shipData.isClicked
                        ? this.props.shipData.isShip
                            ? <img src={Hit} alt="Hit"/>
                            : <img src={Miss} alt="Miss"/>
                        : null
                }
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    shipData: state.boardUnits[props.value[0]][props.value[1]],
});

const mapDispatchToProps = (dispatch) => ({
    handleClick: (coordinates) => handleBoardUnitClick(dispatch, coordinates),
});

export default connect(mapStateToProps, mapDispatchToProps)(BattleshipBoardUnit);
