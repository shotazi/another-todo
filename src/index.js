import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers, install } from 'redux-loop';
import { reducer as formReducer } from 'redux-form'
import { todoReducer, filterReducer } from './reducers/';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
};

const reducers = combineReducers({
    todos: todoReducer,
    filter: filterReducer,
    form: formReducer
  });

const store = createStore(reducers, initialState, install());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
