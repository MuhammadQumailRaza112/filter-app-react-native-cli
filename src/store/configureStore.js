import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import Users from "./reducers/users";

const reducers = combineReducers({
  users: Users
});

export const initStore = (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};