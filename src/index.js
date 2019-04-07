import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from './store';
import createGame from './store/model';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

createStore({
    initialState: {
        games: [
            createGame('FIFA19', 'EA', true),
            createGame('Diablo', 'Blizzard', false),
        ],
        currentGame: createGame('', '', false),
    },
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
