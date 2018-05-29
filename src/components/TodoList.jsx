import React, { Component } from 'react';
import Task from './Task.jsx';

class TodoList extends Component {

  state = {
    todos: [
      { value: 'Wake Up' },
      { value: 'Drink coffee' },
    ]
  }

  render() {
    return(
      <div className='todo-list'>
      {this.state.todos.map((todo, index) => {
        return (
          <Task
            key={index}
            todo={todo}
          />
        )
      })}
      </div>
    );
  }
}

export default TodoList
