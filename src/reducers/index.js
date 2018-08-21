import { loadSuccessful, loadFailed, deleteFailed, loadAction, toggleFailed, addTodoFailed } from "../actions/index";
import { loop, Cmd } from 'redux-loop';

const API = 'https://todo-backend-express.herokuapp.com/';

const fetchTodos = () => {
  return fetch(API)
          .then(response => response.json());
}

const deleteTodos = (url) => {
  return fetch(url, {method: "DELETE"})
          .then(response => response.json());
}

const toggleTodos = (url,completed) => {
  let data = {completed: !completed};
  return fetch(url, {
    method: 'PATCH',
    body: JSON.stringify(data), 
    headers:{
      'Content-Type': 'application/json'
    }
  });
}

const addTodoAPI = (title,order) => {
  let data = {
    title: title,
    order: order
  };
  return fetch(API, {
    method: 'POST',
    body: JSON.stringify(data), 
    headers:{
      'Content-Type': 'application/json'
    }
  });
}


export const todoReducer = (state = {loading: false, todos: []}, action) => {
  switch(action.type){
    // Load Todo
    case 'LOAD':
      return loop({...state, loading: true},
        Cmd.run(fetchTodos, {
          successActionCreator: loadSuccessful,
          failActionCreator: loadFailed
        })
      );
    case 'LOAD_SUCCESSFUL':
      return {...state, loading: false, todos: action.todos};
    case 'LOAD_FAILURE':
      return {...state, loading: false, error: action.error}; 
      
    // Delete Todo
    case 'DELETE':
      return loop({...state, loading: true},
        Cmd.run(deleteTodos, {
          successActionCreator: loadAction,
          failActionCreator: deleteFailed,
          args: [action.url]
        })
      );
    case 'DELETE_FAILED':
      return {...state, loading: false, error: action.error}; 
    // Toggle Todo
    case 'TOGGLE':
    return loop({...state, loading: true},
      Cmd.run(toggleTodos, {
        successActionCreator: loadAction,
        failActionCreator: toggleFailed,
        args: [action.url, action.completed]
      })
    );
    case 'TOGGLE_FAILED':
      return {...state, loading: false, error: action.error}; 
    // Add Todo
    case 'ADD_TODO':
    return loop({...state, loading: true},
      Cmd.run(addTodoAPI, {
        successActionCreator: loadAction,
        failActionCreator: addTodoFailed,
        args: [action.title, action.order]
      })
    );
    case 'ADD_TODO_FAILED':
      return {...state, loading: false, error: action.error};

    default:
      return state; 

  }
};




export const filterReducer = (state = 'ALL', action) => {
    switch(action.type){
        case 'FILTER_ACTION':
          return action.filter;
        default:
          return state;     
    }
};

