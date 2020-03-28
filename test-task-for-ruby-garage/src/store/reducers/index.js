import {combineReducers} from 'redux';
import loginWithGoogleReducer from './loginWithGoogleReducer';
import getCurrSignedInUserReducer from './getCurrSignedInUserReducer';
import areThereProjectReducer from './areThereProjectReducer';
import getProjectsReducer from './getProjectsReducer';
const rootReducer = combineReducers({
    loginWithGoogleReducer,
    getCurrSignedInUserReducer,
    areThereProjectReducer,
    getProjectsReducer
});

export default rootReducer;