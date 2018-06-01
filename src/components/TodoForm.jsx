import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state={
      todo: '',
      todos: [
        { value: 'Wake Up' },
        { value: 'Drink coffee' },
      ]
    }

    this.handleChange = this.handleChange.bind(this);
  }

  addTodo(val) {
    console.log(this.state.todo);
  }

  handleChange(e) {
    this.setState({ todo: e.target.value });
  }

  render() {
    const todo = this.state.todo;
    let input;
    console.log(input);
    return (
      <div>
        <form className='form-todo'>
          <input
            ref={node => {
              input = node;
            }}
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
