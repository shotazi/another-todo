import React, { Component } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Filters from './components/Filters';
import { connect } from 'react-redux';
import './App.css';
import { addTodo } from './actions/index';

class App extends Component {
  submit = value => {
    this.props.dispatch(addTodo(value.todo));
  }

  render() {
    return (
      <div>
        <AddTodo onSubmit={this.submit} />
        <TodoList />
        <Filters />
      </div>
    );
  }
}

export default connect()(App)
