import {ARE_THERE_PROJECT_TRUE, ARE_THERE_PROJECT_FALSE} from '../actions/action-types';

const initState = {
    areThere: false,
}

const areThereProjectReducer = (state = initState, action) => {
    switch(action.type) {
        case ARE_THERE_PROJECT_TRUE:
            return Object.assign({}, state, {
                areThere: true,
            });
        case ARE_THERE_PROJECT_FALSE:
            return Object.assign({}, state, {
                areThere: false,
            });
        default:
            return state;
    };
};

export default areThereProjectReducer;