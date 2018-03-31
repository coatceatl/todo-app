import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return(
      <header id='todo-header'>
        <h1 className="todo-title">Todo App</h1>
      </header>
    )
  }
}

export default Header
