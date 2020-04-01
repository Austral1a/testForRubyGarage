import {GET_IS_CHANGE_NAME_OPEN_TASKS} from './action-types';
import firebase from 'firebase';

const getIsChangeNameOpenTasks = (uid) => {
    return (dispatch) => {
        firebase.database().ref('users/' + uid + '/tasks').on('value', (snapshot) => {
            let map = {};
            snapshot.val() ? Object.values(snapshot.val()).map((task) => {
                map[task.id] = task.isChangeNameOpen;
                dispatch(getIsTasksChangeNameOpen(map));
            }) : dispatch(getIsTasksChangeNameOpen({}));
        });
    };
};

export const getIsTasksChangeNameOpen = (map) => ({
    type: GET_IS_CHANGE_NAME_OPEN_TASKS,
    map,
});

export default getIsChangeNameOpenTasks;
