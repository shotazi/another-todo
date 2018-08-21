import React from 'react';

const todo = ({ title,url,completed,toggleTodo, deleteTodo }) => (
    <div className='todo' onClick={() => toggleTodo(url,completed)}>
        <h2 style={{textDecoration: completed ? 'line-through' : 'none'}}>
            {title}
        </h2>
        <button onClick={() => deleteTodo(url)}>
        Delete
        </button>
    
    </div>
);

export default todo;