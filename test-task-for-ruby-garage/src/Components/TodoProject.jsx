import '../css/todo.css';
import '../css/components/hint.css';
import firebase from 'firebase';
import areThereProject from '../firebase/areThereProject';
import React from 'react';
import {connect} from 'react-redux';
import TodoHeader from './TodoHeader';
import TodoCreateTask from './TodoCreateTask';

const mapStateToProps = (state) => ({
    userUid: state.loginWithGoogleReducer.userUid,
    currUserInfo: state.getCurrSignedInUserReducer.currUser,
});

const TodoProject = ({userUid, currUserInfo}) => {
    return (
        areThereProject(firebase, userUid) ? 
        (<div className="todo">
                    <TodoHeader />
                    <TodoCreateTask />
        </div>): <h3 className="hint">There are no projects yet, add one!</h3>
    );
};

const ConnectedTodoProject = connect(
    mapStateToProps,
)(TodoProject);

export default ConnectedTodoProject;
