import firebase from 'firebase';

const delTask = (taskId, uid) => {
    return firebase.database().ref('users/' + uid + '/tasks/task_' + taskId).remove();
};

export default delTask;
