import {GET_TASKS_SUCCESS, GET_TASKS_FAIL} from './action-types';
import firebase from 'firebase';

const getTasks = (uid) => {
    return (dispatch) => {
        try {
            firebase.database().ref('users/' + uid + '/tasks').on('value', (snapshot) => {
                dispatch(getTasksSuccess(snapshot.val()));
            })
        } catch {
            dispatch(getTasksFail(getTasksFail()));
        };
    };
};

export const getTasksSuccess = (tasks) => ({
    type: GET_TASKS_SUCCESS,
    tasks,
});

export const getTasksFail = () => ({
    type: GET_TASKS_FAIL,
});

export default getTasks;
