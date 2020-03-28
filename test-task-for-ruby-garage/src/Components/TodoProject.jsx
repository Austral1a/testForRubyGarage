import '../css/todo.css';
import '../css/components/hint.css';
import firebase from 'firebase';
import React from 'react';
import areThereProject from '../store/actions/areThereProject';
import getProjects from '../store/actions/getProjects';
import {connect} from 'react-redux';
import TodoHeader from './TodoHeader';
import TodoCreateTask from './TodoCreateTask';
import TodoAddProject from './TodoAddProject'
import TodoTask from './TodoTask';
import { useEffect } from 'react';

const mapStateToProps = (state) => ({
    currUserInfo: state.getCurrSignedInUserReducer.currUser,
    isProjectExists: state.areThereProjectReducer.areThere,
    projects: state.getProjectsReducer.projects,
    getProjectsError: state.getProjectsReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
    areThereProject: (uid) => {
        dispatch(areThereProject(uid))
    },
    getProjects: (uid) => {
        dispatch(getProjects(uid));
    }
})

const TodoProject = ({
    currUserInfo, 
    areThereProject, 
    isProjectExists,
    getProjectsError,
    getProjects,
    projects}) => {
    useEffect(() => {
        areThereProject(currUserInfo.uid);
        if (isProjectExists && !getProjectsError) {
            getProjects(currUserInfo.uid)
        };
    }, [areThereProject, isProjectExists, getProjectsError, getProjects]);
    return (
        isProjectExists ?
            Object.keys(projects).map((e, idx) => {
                return (
                <>
                <div key={idx} className="todo">
                    <TodoHeader projectName={projects[e].name} />
                    <TodoCreateTask src={firebase} projectId={projects[e].id} uid={currUserInfo.uid} />
                </div>
                <TodoTask />
                </>
                ) 
            }) : 
        (<>
        <h3 className="hint">There are no projects yet, add one!</h3>
        <TodoAddProject userUid={currUserInfo.uid} />
        </>)
    );
};

const ConnectedTodoProject = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoProject);

export default ConnectedTodoProject;
