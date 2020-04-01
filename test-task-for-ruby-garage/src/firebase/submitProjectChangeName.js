import firebase from 'firebase';

const sumbitProjectChangeName = (uid, projectId, val) => {
    let submit = {};
    submit['users/' + uid + '/projects/project_' + projectId + '/name'] = val;
    firebase.database().ref().update(submit); 
};

export default sumbitProjectChangeName;
