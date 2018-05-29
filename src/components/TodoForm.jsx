import React, { Component } from 'react';
import './TodoForm.css';

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      text: [],
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
    console.log(this.state.text);
  }

  addTodo(text) {
    console.log(text);
    this.props.addTodo(text);
    this.setState({text: ''})
  }

  render() {
    const text = this.state.text;
    return (
      <div>
        <form className='form-todo'>
          <input
            type='text'
            className='textInput'
            value={this.state.text}
            placeholder='Add your task here...'
            onChange={text => this.handleChange(text)}
          />
         <span>
           <button className='btn-todo' onClick={() => this.addTodo(this.text)}>Add</button>
          </span>
        </form>
        <div>
          <p>{text}</p>
        </div>
      </div>
    )
  }
}

export default TodoForm
