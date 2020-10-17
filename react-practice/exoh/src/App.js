import React from 'react';
import './App.css';
import Game from './components/Game'



class App extends React.Component {
    render() {
        return (
            <div className="game-container">
                <Game />
            </div>  
        )
    }


}

export default App;