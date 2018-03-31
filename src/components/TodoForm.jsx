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

  handleChange(e) {
    this.setState({ task: e.target.value });
  }

  render() {
    const task = this.state.task;
    return (
      <div>
        <form>
          <input
            type='text'
            ref={((input) => {this.task = input})}
            className='textInput'
            value={this.state.task}
            placeholder='Write your task here...'
            onChange={this.handleChange}
          />
          <button>Add Task</button>
        </form>
        <div>
          <p>{task}</p>
        </div>
      </div>
    )
  }
}

export default TodoForm
