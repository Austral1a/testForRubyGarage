import {GET_PROJECTS_SUCCESS, GET_PROJECTS_FAIL} from './action-types';
import firebase from 'firebase';
const getProjects = (uid) => {
    return (dispatch) => { 
        try {
            firebase.database().ref('users/' + uid + '/projects/').on('value', (snapshot) => {
                console.log(snapshot.val());
                dispatch(getProjectSuccess(snapshot.val()));
            });
        } catch {
            dispatch(getProjectFail());
        };
    };
};

export const getProjectSuccess = (projects) => ({
    type: GET_PROJECTS_SUCCESS,
    projects,
});


export const getProjectFail = () => ({
    type: GET_PROJECTS_FAIL,
});

export default getProjects;
