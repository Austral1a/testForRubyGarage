import {ARE_THERE_TASKS_TRUE, ARE_THERE_TASKS_FALSE} from '../actions/action-types';

const initState = {
    areThere: false,
}

const areThereTasksReducer = (state = initState, action) => {
    switch(action.type) {
        case ARE_THERE_TASKS_TRUE:
            return Object.assign({}, state, {
                areThere: true,
            });
        case ARE_THERE_TASKS_FALSE:
            return Object.assign({}, state, {
                areThere: false,
            });
        default:
            return state;
    };
};

export default areThereTasksReducer;
