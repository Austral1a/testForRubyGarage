import {ARE_THERE_TASKS_TRUE, ARE_THERE_TASKS_FALSE} from './action-types';
import firebase from 'firebase';

const areThereTasks = (uid) => {
    return (dispatch) => {
        firebase.database().ref('users/' + uid + '/tasks').on('value', (snapshot) => {
            let data = snapshot.val();
            if(data === 'NULL' || !data) {
                dispatch(areThereTasksFalse());
            } else {
                dispatch(areThereTasksTrue());
            };
        });
    };
};

export const areThereTasksTrue = () => ({
    type: ARE_THERE_TASKS_TRUE,
});

export const areThereTasksFalse = () => ({
    type: ARE_THERE_TASKS_FALSE,
});

export default areThereTasks;