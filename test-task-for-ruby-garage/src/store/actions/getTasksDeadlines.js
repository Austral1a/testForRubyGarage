import {GET_TASKS_DEADLINE} from './action-types';
import firebase from 'firebase';
const getDeadlines = (uid) => {
    return (dispatch) => {
        firebase.database().ref('users/' + uid + '/tasks').on('value', (snapshot) => {
            let map = {};
            snapshot.val() ? Object.values(snapshot.val()).map((task) => {
                map[task.id] = task.deadline
                dispatch(getTasksDeadlines(map));
            }) : dispatch(getTasksDeadlines({})); 
        });
    };
};

export const getTasksDeadlines = (map) => ({
    type: GET_TASKS_DEADLINE,
    map,
});

export default getDeadlines;
