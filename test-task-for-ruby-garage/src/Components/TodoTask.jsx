import '../css/todoTask.css';
import '../css/components/icons.css';
import delTask from '../firebase/delTask';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import getStatuses from '../store/actions/getTasksStatuses';
import {setTaskStatusTrue, setTaskStatusFalse} from '../firebase/setTaskStatus';
import { useCallback } from 'react';
const mapStateToProps = (state) => ({
    statuses: state.getTasksStatusesReducer.map,
});

const mapDispatchToProps = (dispatch) => ({
    getStatuses: (uid) => {
        dispatch(getStatuses(uid));
    },
});


const TodoTask = ({
    taskName,
    taskId,
    uid,
    statuses,
    getStatuses,
    }) => {
    
    const memoGetStatuses = useCallback(
        () => {
            getStatuses(uid);
        },
        [uid]
    );

    useEffect(() => {
        memoGetStatuses();
    }, [memoGetStatuses]);

    const handleChange = () => {
        if(statuses[taskId] !== 'USUAL') {
            setTaskStatusFalse(uid, taskId);
        } else {
            setTaskStatusTrue(uid, taskId);
        };
    };

    return (
        <div 
            className="todo-task" 
            style={{
                opacity: statuses[taskId] === 'USUAL' ? 1 : .4}}>
            <input 
                className="task-done" 
                type="checkbox"
                checked={statuses[taskId] === 'USUAL' ? false : true}
                onChange={handleChange}
                 />
            <h4 
                style={{
                    textDecoration: statuses[taskId] === 'USUAL' ? 'none' : 'line-through'
                    }}
                className="task-text">{taskName}</h4>
            <div className="todo-task_toolbox">
                <button className="btn-icon"><span class="material-icons priority-high">crop_16_9</span></button>
                <button className="btn-icon"><span class="material-icons priority-medium">crop_16_9</span></button>
                <button onClick={() => delTask(taskId, uid)} className="btn-icon"><span className="material-icons">remove_circle</span></button>
            </div>
        </div>
    );
};

const ConnectedTodoTask = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoTask)

export default ConnectedTodoTask;

