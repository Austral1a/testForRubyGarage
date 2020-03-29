
const addTodoToDb = async (src, projectId, uid, todoName) => {

    let updates = {};
    let taskKey = src.database().ref('users/' + uid).child('/tasks').push().key
    let postData = {
        id: taskKey,
        name: todoName,
        status: 'USUAL',
        project_id: projectId,
    }
    updates['users/' + uid + '/tasks/task_' + taskKey] = postData;
    return src.database().ref().update(updates);
};

export default addTodoToDb;
