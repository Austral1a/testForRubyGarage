import {GET_IS_CHANGE_NAME_OPEN_PROJECTS} from './action-types';
import firebase from 'firebase';

const getIsChangeNameOpen = (uid) => {
    return (dispatch) => {
        firebase.database().ref('users/' + uid + '/projects').on('value', (snapshot) => {
            let map = {};
            snapshot.val() ? Object.values(snapshot.val()).map((project) => {
                map[project.id] = project.isChangeNameOpen;
                dispatch(getIsOpenProjects(map));
            }) : dispatch(getIsOpenProjects({}));
        });
    };
};

export const getIsOpenProjects = (map) => ({
    type: GET_IS_CHANGE_NAME_OPEN_PROJECTS,
    map,
});

export default getIsChangeNameOpen;
