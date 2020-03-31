import {GET_TASKS_DEADLINE} from '../actions/action-types';

const initState = {
    map: {},
};

const getTasksDeadlinesReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_TASKS_DEADLINE:
            return Object.assign({}, state, {
                map: action.map,
            });
        default:
            return state;
    };
};

export default getTasksDeadlinesReducer;
