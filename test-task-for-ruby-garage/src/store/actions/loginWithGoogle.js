import firebase from 'firebase';
import {LOGIN_WITH_GOOGLE_SUCCESS, LOGIN_WITH_GOOGLE_FAIL} from './action-types';

export const loginWithGoogle = () => {
    return (dispatch) => {
        try {
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().languageCode = 'ru';
            firebase.auth().signInWithPopup(provider)
                .then((res) => {
                    dispatch(loginWithGoogleSuccess(res.user.uid));
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

export const loginWithGoogleSuccess = (userUid) => ({
    type: LOGIN_WITH_GOOGLE_SUCCESS,
    userUid,
});

export const loginWithGoogleFail = (error) => ({
    type: LOGIN_WITH_GOOGLE_FAIL,
    error,
});
