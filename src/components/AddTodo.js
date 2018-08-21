import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import {connect} from 'react-redux';
import { formValueSelector } from 'redux-form'

class AddTodo extends Component {
  // update todo from local storage
  componentDidMount() {
    if (localStorage.hasOwnProperty('todo')) {
      let value = localStorage.getItem('todo');
      this.props.initialize({ todo: value });
    }

    window.addEventListener(
      "beforeunload",
      this.saveTodoToLocalStorage.bind(this)
    );
  }

   componentWillUnmount() {
      window.removeEventListener(
        "beforeunload",
        this.saveTodoToLocalStorage.bind(this)
      );
  
      this.saveTodoToLocalStorage();
  }

  saveTodoToLocalStorage(){
    localStorage.setItem('todo', this.props.todo);
  }

    render(){
        return (
        <div id='addTodo'>
            <form onSubmit={this.props.handleSubmit}>     
                <Field name='todo' component='input' type='text' placeholder='Add Todo' />
                <button type="submit">Submit</button>
            </form>
        </div>
        )
    }
}

AddTodo = reduxForm({
  form: 'addTodo'
})(AddTodo)

const selector = formValueSelector('addTodo');
export default connect(
    state => {
      const todo = selector(state, 'todo')
      return {
        todo
      }
    }
)(AddTodo)