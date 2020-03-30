import {GET_TASKS_STATUSES} from '../actions/action-types';

const initState = {
    map: {},
};

const getTasksStatusesReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_TASKS_STATUSES:
            return Object.assign({}, state, {
                map: action.map
            });
        default:
            return state;
    };
};

export default getTasksStatusesReducer;