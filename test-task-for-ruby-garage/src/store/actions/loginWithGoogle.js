import firebase from 'firebase';
import {LOGIN_WITH_GOOGLE_SUCCESS, LOGIN_WITH_GOOGLE_FAIL} from './action-types';

export const loginWithGoogle = () => {
    return (dispatch) => {
        try {
            let provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('email');
            firebase.auth().languageCode = 'ru';
            return firebase.auth().signInWithPopup(provider)
                .then((res) => {
                    dispatch(loginWithGoogleSuccess({}));
                })
                .catch((error) => {
                    let errorMessage = error.message;
                    dispatch(loginWithGoogleFail(errorMessage));
                });
            
        } catch {
            dispatch(loginWithGoogleFail('Something bad happend.'));
        };
    };
};

export const loginWithGoogleSuccess = (user) => ({
    type: LOGIN_WITH_GOOGLE_SUCCESS,
    user,
});

export const loginWithGoogleFail = (error) => ({
    type: LOGIN_WITH_GOOGLE_FAIL,
    error,
});
