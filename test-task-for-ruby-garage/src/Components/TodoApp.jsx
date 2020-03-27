import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import getCurrSignedInUser from '../store/actions/getCurrSignedInUser';
import TodoProject from './TodoProject';
const mapStateToProps = (state) => ({
    userUid: state.loginWithGoogleReducer.userUid,
    currUserInfo: state.getCurrSignedInUserReducer.currUser,
});

const mapDispatchToProps = (dispatch) => ({
    getCurrUser: () => {
        dispatch(getCurrSignedInUser());
    },
});

const TodoApp = ({userUid, currUserInfo, getCurrUser}) => {
    useEffect(() => {
        getCurrUser();
    }, [])
    return (
        <div className="todo-list">
           <TodoProject />
        </div>
    );
};

const ConnectedTodoApp = connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoApp);

export default ConnectedTodoApp;
