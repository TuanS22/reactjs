import { combineReducers } from 'redux';
import { cartReducers } from "./cart";

export const allReducers = combineReducers({
    cartReducers,
})