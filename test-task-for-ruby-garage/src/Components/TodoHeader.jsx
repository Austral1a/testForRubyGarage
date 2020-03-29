import delProject from '../firebase/delProject';
import React from 'react';

const TodoHeader = ({projectName, projectId, uid, tasks}) => {
    return (
        <div className="todo-header_name">
            <h3>{projectName}</h3>
            <div className="todo-header_toolbox">
                <button onClick={() => delProject(projectId, uid, tasks)} className="btn-icon"><span className="material-icons">remove_circle</span></button>
            </div>
        </div>
    );
};

export default TodoHeader;