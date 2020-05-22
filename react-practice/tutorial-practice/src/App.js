import React from 'react';
import logo from './logo.svg';
import './App.css';
/* import NavBar from './components/NavBar'
import MainContent from './components/MainContent'
import Footer from './components/Footer' */
import TodoItem from './components/TodoItem.js'


function App() {
  return (
    <>
      <ul className="todo-items">
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        
      </ul>
    </>
  );
}

export default App;
