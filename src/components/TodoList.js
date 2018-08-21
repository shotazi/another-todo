import React, { Component } from 'react';
import Todo from './Todo';
import Loader from './Loader'
import { connect } from 'react-redux';
import { loadAction, deleteAction, toggleAction } from '../actions/index';

class TodoList extends Component {
    componentDidMount(){
        this.props.load();
    }

    render() {
        let todos = this.props.todos 
            ? this.props.todos.filter(el => {
                if(this.props.filter === "ACTIVE"){
                    return el.completed === false;
                } else if(this.props.filter === "COMPLETED") {
                    return el.completed === true;
                } else {
                    return true;
                }
            }).reverse().map(el => 
                <Todo 
                    title={el.title}
                    key={el.url.slice(42)} // get id mannualy from url.
                    order={el.order}
                    url={el.url} 
                    completed={el.completed}
                    toggleTodo={this.props.toggleTodo}
                    deleteTodo={this.props.deleteTodo} />) 
            : null;
        return (
            <div id='todoList'>
                {this.props.loading ? <Loader /> : ''}
                {this.props.error ? this.props.error : ''}
                {todos}
            </div>
        );
    }
}



const mapStateToProps = state => {
    return { 
        todos: state.todos.todos,
        filter: state.filter, 
        loading: state.todos.loading, 
        error: state.todos.error }
};

const mapDispatchToProps = dispatch => ({
    load: () => dispatch(loadAction()),
    deleteTodo: (url) => dispatch(deleteAction(url)),
    toggleTodo: (url,completed) => dispatch(toggleAction(url,completed))
});

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);
