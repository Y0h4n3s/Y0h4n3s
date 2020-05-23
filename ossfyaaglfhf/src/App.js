import React from 'react';
import Joke from './Joke';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        };
    }
    render() {
        return (
        <>
            <Joke punchLine="an Egg" />
            <Joke question="whats the capital of addis" />
            <Joke question="how many teeth does a lion have" punchLine="one for each kill"/>
            <Joke question="what did the oromo say to the amara" punchLine="korona"/>
            <Joke question="who is playing jokes on the world" punchLine="covid19"/>
        <p>he is currently logged {this.state.isLoggedIn? 'in' : 'out'}</p>
        </>
    )
        }
}

export default App;