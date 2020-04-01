import firebase from 'firebase';

const sumbitTaskChangeName = (uid, taskId, val) => {
    let submit = {};
    submit['users/' + uid + '/tasks/task_' + taskId + '/name'] = val;
    firebase.database().ref().update(submit); 
};

export default sumbitTaskChangeName;
