import '../css/todoTask.css';
import React from 'react';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
    currUserInfo: state.getCurrSignedInUserReducer.currUser,
    
});

/* const mapDispatchToProps = (dispatch) => ({

}) */

const TodoTask = ({
    currUserInfo, 
    }) => {
    
    return (
        <div className="todo-task">
            <input type="checkbox" />
            <h4>But a milk</h4>
            <div className="todo-task_toolbox">
            <span className="material-icons">create</span>
                <span className="meterial-icons">delete</span>
            </div>
        </div>
    );
};

const ConnectedTodoTask = connect(
    mapStateToProps,
)(TodoTask);

export default ConnectedTodoTask;
