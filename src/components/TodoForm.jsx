import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      task: '',
      tasks: []
    };

    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(task) {
    this.setState({ task: task.target.value });
  }

  render() {
    const task = this.state.task;
    return (
      <div>
        <form className='form-todo'>
          <input
            type='text'
            ref={((input) => {this.task = input})}
            className='textInput'
            value={this.state.task}
            placeholder='Add your task here...'
            onChange={this.handleChange}
          />
          <span>
            <button className='btn-todo'>Add</button>
          </span>
        </form>
        <div>
          <p>{task}</p>
        </div>
      </div>
    )
  }
}

export default TodoForm
