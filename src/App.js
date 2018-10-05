import React, { Component } from 'react';
import BattleshipBoard from 'containers/battleship-board/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BattleshipBoard />
            </Provider>
        );
    }
}

export default App;
