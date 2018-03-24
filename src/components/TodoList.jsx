import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state={task: ''};

    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log('change');
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
            onChange={this.handleChange}
          />
          <button>New</button>
        </form>
      </div>
    )
  }
}

export default TodoList
