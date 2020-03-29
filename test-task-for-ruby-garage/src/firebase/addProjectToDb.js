import firebase from 'firebase';
const addProject = (uid, name) => {
    let updates = {};
    let projectKey = firebase.database().ref('users/' + uid).child('/projects').push().key;
    updates['users/' + uid + '/projects/project_' + projectKey] = {id: projectKey, name: name};
    return firebase.database().ref().update(updates);
};

export default addProject;