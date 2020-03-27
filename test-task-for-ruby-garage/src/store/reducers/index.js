import {combineReducers} from 'redux';
import loginWithGoogleReducer from './loginWithGoogleReducer';
import getCurrSignedInUserReducer from './getCurrSignedInUserReducer';
const rootReducer = combineReducers({
    loginWithGoogleReducer,
    getCurrSignedInUserReducer,
});

export default rootReducer;