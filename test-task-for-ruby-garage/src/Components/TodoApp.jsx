import '../css/todo.css';
import React from 'react';
import TodoHeader from './TodoHeader';
import TodoCreateTask from './TodoCreateTask';

const TodoApp = () => {
    return (
        <div className="todo">
            <TodoHeader />
            <TodoCreateTask />
        </div>
    );
};

export default TodoApp;
