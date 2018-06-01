import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import AppTemplete from './components/AppTemplete'
import AppForm from './components/form'
import AppTodoList from './components/TodoItemlist';

class App extends Component {
  id = 0;
  state = {
    val: '',
    todos: []
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
        val: e.target.value
    })
    
  }
  handleCreate = (e) => {
    const { todos, val } = this.state;
    e.preventDefault();
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id += 1,
        text: val,
        checked: false
      })
    })
  }
  handleToggle = (id) => {
    const { todos } = this.state
    const i = todos.findIndex(todo => todo.id === id)
    const selected = todos[i];
    console.log(selected);
    const nextTodos = [...todos];
    nextTodos[i] = {
      ...selected,
      checked: !selected.checked
    }
    this.setState({
      todos: nextTodos
    })
  }

  handleRemove = (id) => {
    const { todos } = this.state
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    })
  }
  render() {
    const {
      todos
    } = this.state;
    const {
      handleChange, handleCreate, handleToggle, handleRemove
    } = this;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <AppTemplete
        form={<AppForm
          handleCreate={handleCreate}
          handleChange={handleChange}
        />}
        list={<AppTodoList
          todo={todos}
          handleToggle={handleToggle}
          handleRemove={handleRemove}
        />}
        />
      </div>
    );
  }
}

export default App;
