
import React, { PureComponent } from 'react';
import Cruiser from '../../assets/Cruiser Shape.png';
import Carrier from '../../assets/Carrier Shape.png';
import Aircraft from '../../assets/Aircraft Shape.png';
import Battleship from '../../assets/Battleship Shape.png';
import Submarine from '../../assets/Submarine Shape.png';
import Hit from '../../assets/Hit small.png';
import Miss from '../../assets/Miss small.png';
import './style.css';
import { addPlayerInfo } from '../../actions/players';
import { connect } from 'react-redux';

class ShipBoardUnit extends PureComponent {

    componentWillReceiveProps(nextProps) {
        if (nextProps.isSunk && nextProps.isSunk !== this.props.isSunk) {
            this.props.addInfo({
                player1: {
                    ...this.props.playerBoard.player1,
                    score: this.props.playerBoard.player1.score + 1
                }
            });
        }
    }

    getShip = type => {
        switch (type) {
            case 'carrier':
                return Carrier;
            case 'battleship':
                return Battleship;
            case 'cruiser':
                return Cruiser;
            case 'submarine':
                return Submarine;
            case 'destroyer':
                return Aircraft;
            default:
                return Carrier;
        }
    };

    getShipState = ({ size, isSunk }) => {
        return [ ...Array(size) ].map((one, i) => {
            return isSunk
                ? <img src={Hit} alt="" key={i}/>
                : <img src={Miss} alt="" key={i}/>;
        });
    };

    render() {
        return (
            <div className="ship-board-unit">
                <img src={this.getShip(this.props.type)} alt=""/>
                <div className="ship-state">
                    {
                        this.getShipState(this.props)
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    playerBoard: state.playerBoard
});

const mapDispatchToProps = (dispatch) => ({
    addInfo: playerInfo => addPlayerInfo(dispatch, playerInfo)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShipBoardUnit);


