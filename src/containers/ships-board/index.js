
import React, { PureComponent } from 'react';
import ShipBoardUnit from '../../components/ship-board-unit';
import { connect } from 'react-redux';
import './style.css';

class ShipsBoard extends PureComponent {

    generateShips = () => {
        const { shipTypes } = this.props;
        const array = [];
        console.log(shipTypes);
        for (const key in shipTypes) {
            if (shipTypes.hasOwnProperty(key)) {
                array.push(<ShipBoardUnit
                    key={key}
                    count={shipTypes[key].count}
                    size={shipTypes[key].size}
                    isSunk={shipTypes[key].size === (shipTypes[key].positions && shipTypes[key].positions.length)}
                    type={key}
                />);
            }
        }
        return array;
    };

    render() {
        return (
            <div className="ships-board">
                {this.generateShips()}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    shipTypes: state.cloneShips,
});

export default connect(mapStateToProps)(ShipsBoard);
