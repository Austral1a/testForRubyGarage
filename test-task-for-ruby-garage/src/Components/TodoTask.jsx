import '../css/todoTask.css';
import '../css/components/icons.css';
import delTask from '../firebase/delTask';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import getStatuses from '../store/actions/getTasksStatuses';
import getPriority from '../store/actions/getTasksPriority';
import {setTaskStatusTrue, setTaskStatusFalse} from '../firebase/setTaskStatus';
import { useCallback } from 'react';
import {setPriorityToMedium, setPriorityToHigh, setPriorityToRegular} from '../firebase/setTaskPriority';
const mapStateToProps = (state) => ({
    statuses: state.getTasksStatusesReducer.map,
    priorities: state.getTasksPriorityReducer.map,
});

const mapDispatchToProps = (dispatch) => ({
    getStatuses: (uid) => {
        dispatch(getStatuses(uid));
    },
    getPriority: (uid)  => {
        dispatch(getPriority(uid));
    },
});


const TodoTask = ({
    taskName,
    taskId,
    uid,
    statuses,
    getStatuses,
    getPriority,
    priorities
    }) => {
    
    const memoGetStatuses = useCallback(
        () => {
            getStatuses(uid);
        },
        [uid]
    );
    
    const memoGetPriorities = useCallback(
        () => {
            getPriority(uid);
        },
        [uid]
    );

    useEffect(() => {
        memoGetStatuses();
        memoGetPriorities()
    }, [memoGetStatuses, memoGetPriorities]);

    const handleChange = () => {
        if(statuses[taskId] !== 'USUAL') {
            setTaskStatusFalse(uid, taskId);
        } else {
            setTaskStatusTrue(uid, taskId);
        };
    };

    const stylePriority = () => {
        if(priorities[taskId] === 'HIGH') {
            return '#FF6E81';
        } else if (priorities[taskId] === 'MEDIUM') {
            return '#FFC25A';
        };
    };

    return (
        <div 
            className="todo-task" 
            style={{
                opacity: statuses[taskId] === 'USUAL' ? 1 : .4,
                backgroundColor: stylePriority(),
                }}>
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
                <button onClick={() => setPriorityToRegular(uid, taskId)} className="btn-icon"><span className="material-icons priority-regular">crop_16_9</span></button>
                <button onClick={() => setPriorityToHigh(uid, taskId)} className="btn-icon"><span className="material-icons priority-high">crop_16_9</span></button>
                <button onClick={() => setPriorityToMedium(uid, taskId)} className="btn-icon"><span className="material-icons priority-medium">crop_16_9</span></button>
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

