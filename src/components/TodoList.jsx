import React, { Component } from 'react';

class TodoList extends Component {
  render() {
    return(
      <div
        className='todo-list'
        onClick={this.props.deleteMethod}
      >
        {this.props.test}
      </div>
    );
  }
}

export default TodoList
