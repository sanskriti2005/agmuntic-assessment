import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({})

export const store = createStore(rootReducer, applyMiddleware(thunk))