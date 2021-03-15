import { createStore, applyMiddleware } from "redux";
import tokenReducer from "../reducers/tokenReducer";
import rootReducer from '../reducers'
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default configureStore;