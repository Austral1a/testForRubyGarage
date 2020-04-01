import {GET_IS_CHANGE_NAME_OPEN_PROJECTS} from '../actions/action-types';

const initState = {
    map: {},
};

const getProjectChangeNameOpenReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_IS_CHANGE_NAME_OPEN_PROJECTS:
            return Object.assign({}, state, {
                map: action.map,
            });
        default:
            return state;
    };
};

export default getProjectChangeNameOpenReducer;
