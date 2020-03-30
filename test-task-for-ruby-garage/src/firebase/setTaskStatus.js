import firebase from 'firebase';
export const setTaskStatusTrue = (uid, taskId) => {
    let setPerformed = {};
    setPerformed['users/' + uid + '/tasks/task_' + taskId + '/status'] = 'PERFORMED';
    return firebase.database().ref().update(setPerformed);
};

export const setTaskStatusFalse = (uid, taskId) => {
    let setUsual = {};
    setUsual['users/' + uid + '/tasks/task_' + taskId + '/status'] = 'USUAL';
    return firebase.database().ref().update(setUsual);
};
