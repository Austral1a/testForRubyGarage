import {combineReducers} from 'redux';
import loginWithGoogleReducer from '../reducers/loginWithGoogleReducer';

const rootReducer = combineReducers({
    loginWithGoogleReducer,
});

export default rootReducer;