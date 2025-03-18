import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import productReducer from "./reducers/productReducers";

const rootReducer = combineReducers({
    product: productReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))