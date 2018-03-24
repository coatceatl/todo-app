import React, { Component } from 'react';
import Header from './components/Header.jsx';
import TodoList from './components/TodoList.jsx';
//import TodoForm from './components/TodoForm.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='todo-wrapper'>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
