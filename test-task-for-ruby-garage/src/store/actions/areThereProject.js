import {ARE_THERE_PROJECT_TRUE, ARE_THERE_PROJECT_FALSE} from './action-types';
import firebase from 'firebase';
const areThereProject = (uid) => {
    return (dispatch) => { 
        firebase.database().ref('users/' + uid + '/projects').on('value', (snapshot) => {
            let data = snapshot.val();
            if (data === 'NULL' || !data) {
                dispatch(areThereProjectFalse());
            } else {
                dispatch(areThereProjectTrue());
            }
        });
    }
};

export const areThereProjectFalse = () => ({
    type: ARE_THERE_PROJECT_FALSE,
});

export const areThereProjectTrue = () => ({
    type: ARE_THERE_PROJECT_TRUE,
});

export default areThereProject;