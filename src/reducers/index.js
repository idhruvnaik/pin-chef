import { combineReducers } from 'redux';
import feeds from './feedsReducers';

const rootReducer = combineReducers({feeds});
export default rootReducer;