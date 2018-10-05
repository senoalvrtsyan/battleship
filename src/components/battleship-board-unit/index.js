import React, { Component } from 'react';
import './style.css';
import Hit from '../../assets/Hit.png';
import Miss from '../../assets/Miss.png';
import { connect } from 'react-redux';
import { handleBoardUnitClick } from '../../actions/board';
import { addShipData } from '../../actions/ships';

class BattleshipBoardUnit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isClicked: false
        };
    }

    handleClick = () => {
        if (!this.state.isClicked) {
            this.setState({ isClicked: true });
            if (this.props.shipData.isShip) {
                this.props.handleClick(this.props.value);
                this.props.addShipCoordinates({
                    coordinates: this.props.value,
                    shipData: this.props.shipData
                });
            }
        }
    };
    render() {
        return (
            <div className="battleshipBoardUnit"
                onClick={this.handleClick}>
                {
                    this.props.shipData && this.state.isClicked
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
    addShipCoordinates: (data) => addShipData(dispatch, data)
});

export default connect(mapStateToProps, mapDispatchToProps)(BattleshipBoardUnit);
