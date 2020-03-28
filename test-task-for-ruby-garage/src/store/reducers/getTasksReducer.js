import {GET_TASKS_SUCCESS, GET_TASKS_FAIL} from '../actions/action-types';

const initState = {
    tasks: {},
    error: false,
};

const getTasksReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_TASKS_SUCCESS:
            return Object.assign({}, state, {
                tasks: action.tasks,
                error: false,
            });
        case GET_TASKS_FAIL:
            return Object.assign({}, state, {
                error: true,
            });
        default:
            return state;
    };
};

export default getTasksReducer;