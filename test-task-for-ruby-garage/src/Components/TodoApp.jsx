import '../css/todo.css';
import React from 'react';
import TodoHeader from './TodoHeader';
import TodoCreateTask from './TodoCreateTask';

const App = () => {
    return (
        <div className="todo">
            <TodoHeader />
            <TodoCreateTask />
        </div>
    );
};

export default App;
