import {combineReducers} from 'redux';
import loginWithGoogleReducer from './loginWithGoogleReducer';
import getCurrSignedInUserReducer from './getCurrSignedInUserReducer';
import areThereProjectReducer from './areThereProjectReducer';
import getProjectsReducer from './getProjectsReducer';
import getTasksReducer from './getTasksReducer';
import areThereTasksReducer from './areThereTasksReducer';
const rootReducer = combineReducers({
    loginWithGoogleReducer,
    getCurrSignedInUserReducer,
    areThereProjectReducer,
    getProjectsReducer,
    getTasksReducer,
    areThereTasksReducer
});

export default rootReducer;