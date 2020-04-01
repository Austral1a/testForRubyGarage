import firebase from 'firebase';

export const setTaskIsChangeNameOpenTrue = (uid, taskId) => {
    let isOpen = {};
    isOpen['users/' + uid + '/tasks/task_' + taskId + '/isChangeNameOpen'] = true;
    firebase.database().ref().update(isOpen); 
};


export const setTaskIsChangeNameOpenFalse = (uid, taskId) => {
    let isOpen = {};
    isOpen['users/' + uid + '/tasks/task_' + taskId + '/isChangeNameOpen'] = false;
    firebase.database().ref().update(isOpen); 
};
