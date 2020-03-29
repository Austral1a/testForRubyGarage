import '../css/todoTask.css';
import '../css/components/icons.css';
import delTask from '../firebase/delTask';
import React from 'react';

const TodoTask = ({
    taskName,
    taskId,
    uid
    }) => {
    
    return (
        <div className="todo-task">
            <input className="task-done" type="checkbox" />
            <h4 className="task-text">{taskName}</h4>
            <div className="todo-task_toolbox">
                <button className="btn-icon"><span className="material-icons">create</span></button>
                <button onClick={() => delTask(taskId, uid)} className="btn-icon"><span className="material-icons">remove_circle</span></button>
            </div>
        </div>
    );
};

export default TodoTask;

