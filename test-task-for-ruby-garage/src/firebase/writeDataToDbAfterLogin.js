const write = (userUid ,src) => {
    src.database().ref('users/' + userUid).set({
        userUid,
        projects: 'NULL',
    });
};

export default write;