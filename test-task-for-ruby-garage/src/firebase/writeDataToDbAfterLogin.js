const write = (userUid ,src) => {
    src.database().ref('users/' + userUid).set({
        userUid,
        tasks: 'NULL',
        projects: 'NULL',
    });
};

export default write;