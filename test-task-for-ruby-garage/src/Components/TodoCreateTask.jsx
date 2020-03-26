import '../css/components/btn.css'
import React from 'react';

const TodoCreateTask = () => {
    return (
        <div className="todo-header_create-task">
            <span className="material-icons">add</span>
            <input type="text" />
            <button className="btn">Add</button>
        </div>
    );
};

export default TodoCreateTask;