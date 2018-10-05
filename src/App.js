import React, { Component } from 'react';
import BattleshipBoard from 'containers/battleship-board/index';
import PlayersBoard from 'containers/players-board';
import ShipsBoard from 'containers/ships-board';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import './style.css';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="cont">
                    <div className="left-board">
                        <PlayersBoard />
                        <ShipsBoard />
                    </div>
                    <BattleshipBoard />
                </div>
            </Provider>
        );
    }
}

export default App;
