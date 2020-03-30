import firebase from 'firebase';

const dbSnaphot = (uid) => {
    firebase.database().ref('users/' + uid).once('value')
        .then((snapshot) => {
            console.log(snapshot.val());
        });
};

export default dbSnaphot;