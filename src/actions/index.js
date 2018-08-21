
// actions for loading todos from API
export const loadAction = () => ({
    type: 'LOAD'
});

export const loadSuccessful = (todos) => ({
    type: 'LOAD_SUCCESSFUL',
    todos
  });

export const loadFailed = (error) => ({
    type: 'LOAD_FAILED',
    error
});

// toggle todo actions
export const toggleAction = (url, completed) => ({
    type: 'TOGGLE',
    url,
    completed
});

export const toggleSuccessful = () => ({
    type: 'TOGGLE_SUCCESSFUL'
});

export const toggleFailed = (error) => ({
    type: 'TOGGLE_FAILED',
    error
});

// delete todo actions
export const deleteAction = (url) => ({
    type: 'DELETE',
    url
});

export const deleteSuccessful = () => ({
    type: 'DELETE_SUCCESSFUL'
});

export const deleteFailed = (error) => ({
    type: 'DELETE_FAILED',
    error
});

// add todo actions
export const addTodo = (title, order) => ({
    type: 'ADD_TODO',
    title,
    order
});

export const addTodoFailed = (error) => ({
    type: 'ADD_TODO_FAILED',
    error
});

// filter Actions
export const filterAction = (filter) => ({
    type: 'FILTER_ACTION',
    filter
});
