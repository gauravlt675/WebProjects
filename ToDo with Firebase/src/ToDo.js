import React from 'react';
import './ToDo.css';

const ToDo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className={todo.Completed ? 'list-complete' : 'list'}>
      <div className='row'>
        <input
          onChange={() => toggleComplete(todo)}
          type="checkbox"
          checked={todo.Completed}
        />
        <p
          onClick={() => toggleComplete(todo)}
          className={`todo-text ${todo.Completed ? 'completed' : ''}`}
        >
          {todo.text}
        </p>
      </div>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
};

export default ToDo;
