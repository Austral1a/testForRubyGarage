const getProjectsAmount = (userUid, src) => {
    return src.database().ref('users/' + userUid + '/projects/').once('value')
        .then((snapshot) => {
            if (snapshot.val() === "NULL" || !snapshot.val()) {
                return 0;
            } else {
                return Object.keys(snapshot.val()).length;
            };
        })
        .then((id) => id)
};

const writeNewProject = async (userUid, name, src) => {
    let idValue = await getProjectsAmount(userUid, src);
    let postData = {
        id: idValue,
        name: name,
    };
    let updates = {};
    updates['users/' + userUid + '/projects/project_' + idValue] = postData;

    await src.database().ref().update(updates);
};

export default writeNewProject;