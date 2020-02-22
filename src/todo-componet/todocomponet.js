import React, { Component } from 'react';

class ToDo extends Component{
    constructor(){
        super();

        this.state = {
            todos: [],
            currentTodo: ''
        }
    }

    onInputChange = e => {
        //this.setState({currentTodo: e.target.value});
        this.setState(
            {
                currentTodo: e.target.value
            }
        );
    }

    onclick = () => {
        let todosCopy = this.state.todos.slice();
        todosCopy.push(this.state.currentTodo);

        this.setState({
            todos: todosCopy,
            currentTodo: ''
        });
    }

    render(){
        return(
            <div>
                <input placeholder="Enter Todo" value={this.state.currentTodo}
                onChange={this.onInputChange}/>
                <button onClick={this.onclick}>Add new</button>
                <br/>
                { this.state.todos.length === 0 ? 'no todo' : 'still have some todos'}
                <br/>
                {this.state.currentTodo}
            </div>
        );
    }
}

export default ToDo;