import React from 'react'

class TodoItem extends React.Component  {
    constructor() {
        super();
        this.state = {};
    }
    changed() {
         
    }
    render() {
        this.state = this.props;
        return (
            <li className="todo-item">
                <input type="checkbox" checked={this.state.todo.completed} onChange={this.changed}></input>
                <span>{this.props.todo.text}</span>
            </li> 
        );    
    }

    
    }

export default TodoItem;