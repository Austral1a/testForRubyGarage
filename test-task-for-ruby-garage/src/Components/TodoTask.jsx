import '../css/todoTask.css';
import '../css/components/icons.css';
import DateFnsUtils from '@date-io/date-fns';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import delTask from '../firebase/delTask';
import DeadlinePicker from './TodoTaskDeadlinePicker';
import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import getStatuses from '../store/actions/getTasksStatuses';
import getPriority from '../store/actions/getTasksPriority';
import {setTaskStatusTrue, setTaskStatusFalse} from '../firebase/setTaskStatus';
import { useCallback } from 'react';
import {setPriorityToMedium, setPriorityToHigh, setPriorityToRegular} from '../firebase/setTaskPriority';
import getIsChangeNameOpenTasks from '../store/actions/getTasksIsChangeNameOpen';
import {setTaskIsChangeNameOpenTrue} from '../firebase/setTaskChangeName';
import ChangeNameTask from './Other/ChangeNameTask';
import PropTypes from 'prop-types';

const mapStateToProps = (state) => ({
    statuses: state.getTasksStatusesReducer.map,
    priorities: state.getTasksPriorityReducer.map,
    isOpenTasks: state.getTasksChangeNameOpenReducer.map,
});

const mapDispatchToProps = (dispatch) => ({
    getStatuses: (uid) => {
        dispatch(getStatuses(uid));
    },
    getPriority: (uid)  => {
        dispatch(getPriority(uid));
    },
    getIsChangeNameOpenTasks: (uid) => {
        dispatch(getIsChangeNameOpenTasks(uid));
    },
});


const TodoTask = ({
    taskName,
    taskId,
    uid,
    statuses,
    getStatuses,
    getPriority,
    priorities,
    isOpenTasks,
    getIsChangeNameOpenTasks,
    taskPrevName
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

    const memoGetIsChangeNameOpenTasks = useCallback(
        () => {
            getIsChangeNameOpenTasks(uid)
        },
        [uid]
    );

    useEffect(() => {
        memoGetStatuses();
        memoGetPriorities();
        memoGetIsChangeNameOpenTasks();
    }, [memoGetStatuses, memoGetPriorities, memoGetIsChangeNameOpenTasks]);

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
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div 
                className="todo-task" 
                style={{
                    opacity: statuses[taskId] === 'USUAL' ? 1 : .4,
                    backgroundColor: !isOpenTasks[taskId] ? stylePriority() : '#DEDEDE',
                    }}>
                {!isOpenTasks[taskId] ? 
                (<>
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
                    <div className="todo-task_toolbox_set-deadline">
                        <DeadlinePicker uid={uid} taskId={taskId} />
                    </div>
                    <div className="todo-task_toolbox">
                        <div className="todo-task_toolbox_set-priority">
                            <button onClick={() => setPriorityToRegular(uid, taskId)} className="btn-icon"><span className="material-icons priority-regular">crop_16_9</span></button>
                            <button onClick={() => setPriorityToHigh(uid, taskId)} className="btn-icon"><span className="material-icons priority-high">crop_16_9</span></button>
                            <button onClick={() => setPriorityToMedium(uid, taskId)} className="btn-icon"><span className="material-icons priority-medium">crop_16_9</span></button>
                        </div>
                        <button onClick={() => {
                            if(!isOpenTasks[taskId]) {
                                setTaskIsChangeNameOpenTrue(uid, taskId);
                            }
                        }} className="btn-icon"><span className="material-icons">create</span></button>
                        <button onClick={() => delTask(taskId, uid)} className="btn-icon"><span className="material-icons">remove_circle</span></button>
                </div>
                </>) : <ChangeNameTask uid={uid} taskId={taskId} taskPrevName={taskPrevName} />}
        </div>
        </MuiPickersUtilsProvider>
    );
};

const ConnectedTodoTask = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoTask)

ConnectedTodoTask.propTypes = {
    taskName: PropTypes.string,
    taskId: PropTypes.string,
    uid: PropTypes.string,
    statuses: PropTypes.object,
    getStatuses: PropTypes.func,
    getPriority: PropTypes.func,
    priorities: PropTypes.object,
    isOpenTasks: PropTypes.bool,
    getIsChangeNameOpenTasks: PropTypes.object,
    taskPrevName: PropTypes.string,
};

export default ConnectedTodoTask;
