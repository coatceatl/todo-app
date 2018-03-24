import React, { Component } from 'react';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      task: ''
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
            value={task}
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
