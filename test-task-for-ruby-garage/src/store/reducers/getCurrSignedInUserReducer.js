import {GET_CURRENT_SIGNED_IN_USER_SUCCESS, GET_CURRENT_SIGNED_IN_USER_FAIL} from '../actions/action-types';

const initState = {
    isCurrUserHolds: false,
    currUser: {},
    error: ''
};

const getCurrSignedInUserReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_CURRENT_SIGNED_IN_USER_SUCCESS:
            return Object.assign({}, state, {
                isCurrUserHolds: true,
                currUser: action.currUser,
            });
        case GET_CURRENT_SIGNED_IN_USER_FAIL:
            return Object.assign({}, state, {
                isCurrUserHolds: false,
                error: action.error,
            });
        default:
            return state;
    };
};

export default getCurrSignedInUserReducer;