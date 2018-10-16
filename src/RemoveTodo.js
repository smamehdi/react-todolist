import React, { Component } from 'react';
import './App.css';

class RemoveTodo extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    this.props.onRemove(this.props.todo);
  }
  render() {
    return (
      <li>
        <div className="todo-list">
          <p className="todo-name">{ this.props.todo }</p>
          <span className="delete" onClick={this.handleDelete}>Delete</span>
        </div>
      </li>
    );
  }
}

export default RemoveTodo;
