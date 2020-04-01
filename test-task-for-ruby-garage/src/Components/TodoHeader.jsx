import delProject from '../firebase/delProject';
import {setProjectIsChangeNameOpenTrue, setProjectIsChangeNameOpenFalse} from '../firebase/setProjectChangeName';
import React, {useState, useEffect} from 'react';

const TodoHeader = ({
    projectName, 
    projectId, 
    uid, 
    tasks,
    isOpen
}) => {
    const handeClickChangeName = () => {
        if(isOpen[projectId]) {
            setProjectIsChangeNameOpenFalse(uid, projectId);
        } else {
            setProjectIsChangeNameOpenTrue(uid, projectId);
        }
    }
    return (
        <div className="todo-header_name">
            <h3>{projectName}</h3>
            <div className="todo-header_toolbox">
                <button onClick={handeClickChangeName} className="btn-icon"><span className="material-icons">create</span></button>
                <button onClick={() => delProject(projectId, uid, tasks)} className="btn-icon"><span className="material-icons">remove_circle</span></button>
            </div>
        </div>
    );
};

export default TodoHeader;
