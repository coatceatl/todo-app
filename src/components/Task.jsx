import React, { Component } from 'react';

class Task extends Component {
  render() {
    return (
      <div className = 'task'>
        {this.props.todo.value}
      </div>
    );
  }
}


export default Task;
