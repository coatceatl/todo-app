import React, { Component } from 'react';
import Header from './components/Header.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className='todo-wrapper'>
          <h3>Todo list</h3>
        </div>
      </div>
    );
  }
}

export default App;
