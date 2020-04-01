import {GET_IS_CHANGE_NAME_OPEN_TASKS} from '../actions/action-types';

const initState = {
    map: {},
};

const getTasksChangeNameOpenReducer = (state = initState, action) => {
    switch(action.type) {
        case GET_IS_CHANGE_NAME_OPEN_TASKS:
            return Object.assign({}, state, {
                map: action.map,
            });
        default:
            return state;
    };
};

export default getTasksChangeNameOpenReducer;
