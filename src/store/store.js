import { createStore } from "redux";
import tokenReducer from "../reducers/tokenReducer";

function configureStore(initialState = { token: "hamna_aapyu", user: null }) {
  return createStore(tokenReducer,initialState);
}

export default configureStore;