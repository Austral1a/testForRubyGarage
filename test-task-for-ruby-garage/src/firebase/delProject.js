import firebase from 'firebase';

const delProject = (projectId, uid, tasks) => {
    let db = firebase.database();
    db.ref('users/' + uid + '/projects/project_' + projectId).remove();
    if(tasks) {
            Object.keys(tasks).map((task) => {
            if (tasks[task].project_id == projectId) db.ref('users/' + uid + '/tasks/task_' + tasks[task].id).remove()
        })
    }
};

export default delProject;
