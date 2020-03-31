import '../css/todo.css';
import firebase from 'firebase';
import React, {useEffect} from 'react';
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

const mapStateToProps = (state) => ({
    currUserInfo: state.getCurrSignedInUserReducer.currUser,

    isProjectExists: state.areThereProjectReducer.areThere,
    projects: state.getProjectsReducer.projects,
    getProjectsError: state.getProjectsReducer.error,

    isTaskExists: state.areThereTasksReducer.areThere,
    tasks: state.getTasksReducer.tasks,
    getTasksError: state.getTasksReducer.error,
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
})

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
}) => {
    useEffect(() => {
        areThereProject(currUserInfo.uid);
        areThereTasks(currUserInfo.uid);
        if (isProjectExists && !getProjectsError) {
            getProjects(currUserInfo.uid)
        };
        if(isTaskExists && !getTasksError) {
            getTasks(currUserInfo.uid);
        }
    }, [areThereProject, isProjectExists, getProjectsError, getProjects, getTasks, isTaskExists, getTasksError]);

    const renderTasks = (project_id) => {
        return tasks ? (
            Object.keys(tasks).map((e, idx) => {
                if(project_id === tasks[e].project_id) {
                    return <ConnectedTodoTask key={idx} taskName={tasks[e].name} taskId={tasks[e].id} uid={currUserInfo.uid} />
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
                        <TodoHeader projectName={projects[e].name} projectId={projects[e].id} tasks={tasks} uid={currUserInfo.uid} />
                        <TodoCreateTask src={firebase} projectId={projects[e].id} uid={currUserInfo.uid} />
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
