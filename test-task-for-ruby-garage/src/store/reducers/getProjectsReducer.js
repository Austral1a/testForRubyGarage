import {GET_PROJECTS_SUCCESS, GET_PROJECTS_FAIL} from '../actions/action-types';

const initState = {
    projects: {},
    error: false,
}

const getProjectsReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_PROJECTS_SUCCESS:
            return Object.assign({}, state, {
                projects: action.projects,
                error: false,
            });
        case GET_PROJECTS_FAIL:
            return Object.assign({}, state, {
                error: true,
            });
        default:
            return state;
    };
};

export default getProjectsReducer;