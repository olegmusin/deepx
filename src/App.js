import React from 'react';

import './App.css';
import GamesList from './components/GamesList/GamesList';

const App = () => {
    return (
        <div>
            <h1>React CRUD with global store on hooks</h1>
            <GamesList />
        </div>
    );
};

export default App;
