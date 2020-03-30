import {GET_TASKS_PRIORITY} from '../actions/action-types';

const initState = {
    map: {},
};

const getTasksPriorityReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_TASKS_PRIORITY:
            return Object.assign({}, state, {
                map: action.map,
            });
        default:
            return state;
    }
};

export default getTasksPriorityReducer;
