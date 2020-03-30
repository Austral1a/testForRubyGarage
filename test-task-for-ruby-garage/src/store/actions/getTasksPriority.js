import {GET_TASKS_PRIORITY} from './action-types';
import firebase from 'firebase';
const getPriority = (uid) => {
    return (dispatch) => {
        firebase.database().ref('users/' + uid + '/tasks').on('value', (snapshot) => {
            let map = {};
            snapshot.val() ? Object.values(snapshot.val()).map((task) => {
                map[task.id] = task.priority;
                dispatch(getTasksPriority(map));
            }) : dispatch(getTasksPriority({}));
        });
    }
};

export const getTasksPriority = (map) => ({
    type: GET_TASKS_PRIORITY,
    map,
});

export default getPriority;
