const areThereProject = (src, uid) => {
    src.database().ref('users/' + uid).on('value', (snapshot) => {
        let data = snapshot.val();
        if(data == 'NULL' || !data) return 'There are no projects yet';
    });
};

export default areThereProject;