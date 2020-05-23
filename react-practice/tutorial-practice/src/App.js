import React from 'react';
import './App.css';
/* import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer' */
import TodoItem from './components/TodoItem.js'
import TodoData from './components/TodoData'


class App extends React.Component {
    constructor() {
        super();
        this.state = TodoData.map(todo => <TodoItem key={todo.id} todo={todo} />);
    }
    render() {
        return <ul className='todo-items'>{this.state}</ul>;
    }


}

export default App;
