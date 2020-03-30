import {GET_TASKS_STATUSES} from './action-types';
import firebase from 'firebase';

const getStatuses = (uid) => {
    return (dispatch) => {
        firebase.database().ref('users/' + uid + '/tasks').on('value', (snapshot) => {
            let map = {};
            snapshot.val() ? Object.values(snapshot.val()).map((task) => {
                map[task.id] = task.status;
                dispatch(getTasksStatuses(map));
            }) : dispatch(getTasksStatuses({}));
        });
    };
};

export const getTasksStatuses = (map) => ({
    type: GET_TASKS_STATUSES,
    map
});

export default getStatuses;

