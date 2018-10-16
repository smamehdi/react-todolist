import React, { Component } from 'react';
import './App.css';

class NewTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onAdd(this.input.value);
  }
  render() {
    return (
      <form className="new-todo" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="New Todo..." ref={(input) => this.input = input} required />
        <input type="submit" value="Add Todo" />
      </form>
    );
  }
}

export default NewTodo;
