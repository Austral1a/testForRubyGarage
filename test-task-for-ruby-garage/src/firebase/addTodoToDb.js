const getTodosAmount = (userUid, src) => {
    return src.database().ref('users/' + userUid + '/tasks').once('value')
        .then((snapshot) => {
            if (snapshot.val() == 'NULL' || !snapshot.val()) {
                return 0;
            } else {
                return Object.keys(snapshot.val()).length;
            };
        })
        .then((id) => id)
};

const addTodoToDb = async (src, projectId, uid, todoName) => {
    let idValue = await getTodosAmount(uid, src);
    src.database().ref('users/' + uid + '/tasks/task_' + idValue).set({
        id: idValue,
        name: todoName,
        status: 'USUAL',
        project_id: projectId,
    });
};

export default addTodoToDb;
