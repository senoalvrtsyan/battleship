
import React, { PureComponent } from 'react';
import PlayerBoard from '../../components/players-board-unit';
import './style.css';
import { connect } from 'react-redux';

class PlayersBoard extends PureComponent {

    render() {
        const { player1, player2 } = this.props.playerBoard;
        return (
            <div className="players-board">
                <PlayerBoard title={player1.title} score={player1.score} isFirstPlayer={player1.isFirstPlayer}/>
                <PlayerBoard title={player2.title} score={player2.score}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    playerBoard: state.playerBoard
});

export default connect(mapStateToProps)(PlayersBoard);
