import firebase from 'firebase';
import {LOGIN_WITH_GOOGLE_SUCCESS, LOGIN_WITH_GOOGLE_FAIL} from './action-types';

export const loginWithGoogle = () => {
    try {
        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('email');
        firebase.auth().languageCode = 'ru';
        firebase.auth().signInWithPopup(provider)
        .then((res) => {
            let user = res.user;
            loginWithGoogleSuccess(user);
        })
        .catch((error) => {
            let errroMessage = error.message;
            loginWithGoogleFail(errroMessage);
        });
    } catch {
        loginWithGoogleFail('Something bad happend.')
    }
};

export const loginWithGoogleSuccess = (user) => ({
    type: LOGIN_WITH_GOOGLE_SUCCESS,
    user
});

export const loginWithGoogleFail = (error) => ({
    type: LOGIN_WITH_GOOGLE_FAIL,
    error,
});
