import { combineReducers } from 'redux';
import feeds from './feedsReducers';
import loggedReducer from './isLogged';
import tokenReducer from './tokenReducer';

const rootReducer = combineReducers({
    token_details: tokenReducer,
    login_details: loggedReducer
});

export default rootReducer;