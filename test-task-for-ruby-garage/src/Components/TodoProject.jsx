import '../css/todo.css';
import '../css/changeName.css';
import firebase from 'firebase';
import React, {useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import areThereProject from '../store/actions/areThereProject';
import getProjects from '../store/actions/getProjects';
import areThereTasks from '../store/actions/areThereTasks';
import getTasks from '../store/actions/getTasks';
import {connect} from 'react-redux';
import TodoHeader from './TodoHeader';
import TodoCreateTask from './TodoCreateTask';
import TodoAddProject from './TodoAddProject'
import ConnectedTodoTask from './TodoTask';
import ChangeName from './Other/ChangeName';
import getIsChangeNameOpen from '../store/actions/getProjectsIsChangeNameOpen';

const mapStateToProps = (state) => ({
    currUserInfo: state.getCurrSignedInUserReducer.currUser,

    isProjectExists: state.areThereProjectReducer.areThere,
    projects: state.getProjectsReducer.projects,
    getProjectsError: state.getProjectsReducer.error,

    isTaskExists: state.areThereTasksReducer.areThere,
    tasks: state.getTasksReducer.tasks,
    getTasksError: state.getTasksReducer.error,
    isOpen: state.getProjectChangeNameOpenReducer.map,
});

const mapDispatchToProps = (dispatch) => ({
    areThereProject: (uid) => {
        dispatch(areThereProject(uid))
    },
    getProjects: (uid) => {
        dispatch(getProjects(uid));
    },
    areThereTasks: (uid) => {
        dispatch(areThereTasks(uid))
    },
    getTasks: (uid) => {
        dispatch(getTasks(uid));
    },
    getIsChangeNameOpen: (uid) => {
        dispatch(getIsChangeNameOpen(uid));
    },
});

const TodoProject = ({
    currUserInfo,
    areThereProject,
    isProjectExists,
    getProjectsError,
    getProjects,
    projects,
    isTaskExists,
    tasks,
    getTasksError,
    areThereTasks,
    getTasks,
    isOpen,
    getIsChangeNameOpen,

}) => {

    const memoGetIsChangeNameOpen = useCallback(
        () => {
            getIsChangeNameOpen(currUserInfo.uid);
        },
        [currUserInfo]
    );

    useEffect(() => {
        areThereProject(currUserInfo.uid);
        areThereTasks(currUserInfo.uid);
        if (isProjectExists && !getProjectsError) {
            getProjects(currUserInfo.uid)
        };
        if(isTaskExists && !getTasksError) {
            getTasks(currUserInfo.uid);
        };
        memoGetIsChangeNameOpen();
    }, [areThereProject, isProjectExists, getProjectsError, getProjects, getTasks, isTaskExists, getTasksError, memoGetIsChangeNameOpen]);

    const renderTasks = (project_id) => {
        return tasks ? (
            Object.keys(tasks).map((e, idx) => {
                if(project_id === tasks[e].project_id) {
                    return <ConnectedTodoTask taskPrevName={tasks[e].name} key={idx} taskName={tasks[e].name} taskId={tasks[e].id} uid={currUserInfo.uid} />
                }
            }))
            : null;
    };

    return (
        <>
            {isProjectExists && projects ?
                Object.keys(projects).map((e, idx) => {
                    return (
                    <React.Fragment key={idx}>
                    <div className="todo">
                    {!isOpen[projects[e].id] ?
                        <>
                            <TodoHeader isOpen={isOpen} uid={currUserInfo.uid} projectName={projects[e].name} projectId={projects[e].id} tasks={tasks} uid={currUserInfo.uid} />
                        <TodoCreateTask src={firebase} projectId={projects[e].id} uid={currUserInfo.uid} />
                        </>: <ChangeName uid={currUserInfo.uid} projectId={projects[e].id} projectPrevName={projects[e].name} />}
                    </div>
                        {renderTasks(projects[e].id)}
                    </React.Fragment>
                    ) 
                }) : null}
            <TodoAddProject userUid={currUserInfo.uid} />
        </>
    );
};

const ConnectedTodoProject = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoProject);

ConnectedTodoProject.propTypes = {
    currUserInfo: PropTypes.object,
    areThereProject: PropTypes.bool, 
    isProjectExists: PropTypes.bool,
    getProjectsError: PropTypes.bool,
    getProjects: PropTypes.func,
    projects: PropTypes.object,
    isTaskExists: PropTypes.bool,
    tasks: PropTypes.object,
    getTasksError: PropTypes.bool,
    areThereTasks: PropTypes.bool,
    getTasks: PropTypes.func,
}

export default ConnectedTodoProject;
