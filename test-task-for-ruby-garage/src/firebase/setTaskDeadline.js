import firebase from 'firebase';

const setDeadline = (uid, taskId, val) => {
    let deadline = {};
    deadline['users/' + uid + '/tasks/task_' + taskId + '/deadline'] = val;
    firebase.database().ref().update(deadline);
};

export default setDeadline;
