import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import getCurrSignedInUser from '../store/actions/getCurrSignedInUser';
import ConnectedTodoProject from './TodoProject';

const mapDispatchToProps = (dispatch) => ({
    getCurrUser: () => {
        dispatch(getCurrSignedInUser());
    },
});

const TodoApp = ({getCurrUser}) => {
    useEffect(() => {
        getCurrUser();
    }, [getCurrUser]);
    return (
        <div className="todo-list">
           <ConnectedTodoProject />
        </div>
    );
};

const ConnectedTodoApp = connect(
    null,
    mapDispatchToProps
)(TodoApp);

ConnectedTodoApp.propTypes = {
    getCurrUser: PropTypes.func,
};

export default ConnectedTodoApp;
