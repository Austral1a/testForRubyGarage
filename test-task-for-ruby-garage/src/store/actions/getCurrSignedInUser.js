import {GET_CURRENT_SIGNED_IN_USER_SUCCESS, GET_CURRENT_SIGNED_IN_USER_FAIL} from './action-types';
import firebase from 'firebase';
const getCurrSignedInUser = () => {
    return (dispatch) => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                dispatch(getCurrSignedInUserSuccess(user));
            } else {
                dispatch(getCurrSignedInUserFail("Can't get current user."));
            };
          });
    };
};

export const getCurrSignedInUserSuccess = (currUser) => ({
    type: GET_CURRENT_SIGNED_IN_USER_SUCCESS,
    currUser,
});

export const getCurrSignedInUserFail = (error) => ({
    type: GET_CURRENT_SIGNED_IN_USER_FAIL,
    error,
});

export default getCurrSignedInUser;