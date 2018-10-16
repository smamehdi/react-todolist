import React, { Component } from 'react';
import RemoveTodo from './RemoveTodo';
import NewTodo from './NewTodo';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: ['Learn Node.js', 'Learn Vue.js', 'Learn React'],
    };
    this.onAdd = this.onAdd.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }
  onAdd(todo) {
    const newTodos = this.state.todoList.slice();
    newTodos.push(todo);
    this.setState({
      todoList: newTodos,
    });
  }
  onRemove(todo) {
    const newTodos = this.state.todoList.filter((item) => {
      return todo !== item;
    });
    this.setState({
      todoList: newTodos,
    });
  }
  render() {
    let { todoList } = this.state;
    todoList = todoList.map((todo) => {
      return (
        <RemoveTodo todo={todo} key={todo.toString()} onRemove={this.onRemove} />
      );
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React Todo App</h1>
        </header>
        <section className="todo-app">
          <h1>My Todos</h1>
          <NewTodo onAdd={this.onAdd} />
          <ul>{ todoList }</ul>
        </section>
      </div>
    );
  }
}

export default App;
