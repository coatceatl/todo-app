import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      todo: [],
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ todo: e.target.value });
  }

  render() {
    const todo = this.state.todo;
    return (
      <div>
        <form className='form-todo'>
          <input
            type='text'
            className='textInput'
            value={this.state.todo}
            placeholder='Add your task here...'
            onChange={todo => this.handleChange(todo)}
          />
         <span>
           <button className='btn-todo' onClick={() => this.addTodo(this.todo)}>Add</button>
          </span>
        </form>
        <div>
          <p>{todo}</p>
        </div>
      </div>
    )
  }
}

export default TodoForm
