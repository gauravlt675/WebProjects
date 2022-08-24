import React from "react";
import ToDo from './ToDo'

const TodoList = ({ todos, setTodos, fileteredTodos }) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {fileteredTodos.map(todo => (
                    <ToDo 
                        setTodos={setTodos}
                        todos={todos} 
                        key={todo.id} 
                        todo={todo}
                        text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;