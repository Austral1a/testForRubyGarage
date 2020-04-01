import firebase from 'firebase';

export const setProjectIsChangeNameOpenTrue = (uid, projectId) => {
    let isOpen = {};
    isOpen['users/' + uid + '/projects/project_' + projectId + '/isChangeNameOpen'] = true;
    firebase.database().ref().update(isOpen); 
};


export const setProjectIsChangeNameOpenFalse = (uid, projectId) => {
    let isOpen = {};
    isOpen['users/' + uid + '/projects/project_' + projectId + '/isChangeNameOpen'] = false;
    firebase.database().ref().update(isOpen); 
};
