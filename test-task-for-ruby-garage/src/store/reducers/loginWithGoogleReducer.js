import {LOGIN_WITH_GOOGLE_SUCCESS, LOGIN_WITH_GOOGLE_FAIL} from '../actions/action-types';

const initState = {
    isAuth: false,
    userInfo: {},
};

const loginWithGoogleReducer = (state = initState, action) => {
    switch(action.type) {
        case LOGIN_WITH_GOOGLE_SUCCESS:
            return Object.assign({}, state, {
                isAuth: true,
                userInfo: action.user,
            });
        case LOGIN_WITH_GOOGLE_FAIL:
            return Object.assign({}, state, {
                isAuth: false,
                error: action.error,
            })
        default:
            return state;
    };
};

export default loginWithGoogleReducer;