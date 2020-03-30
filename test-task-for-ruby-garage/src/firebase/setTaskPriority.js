import firebase from 'firebase';

export const setPriorityToHigh = (uid, taskId) => {
    let prHign = {};
    prHign['users/' + uid + '/tasks/task_' + taskId + '/priority'] = 'HIGH';
    firebase.database().ref().update(prHign);                
};

export const setPriorityToMedium = (uid, taskId) => {
    let prMedium = {};
    prMedium['users/' + uid + '/tasks/task_' + taskId + '/priority'] = 'MEDIUM';
    firebase.database().ref().update(prMedium);
};

export const setPriorityToRegular = (uid, taskId) => {
    let prRegular = {};
    prRegular['users/' + uid + '/tasks/task_' + taskId + '/priority'] = 'REGULAR';
    firebase.database().ref().update(prRegular);
};
