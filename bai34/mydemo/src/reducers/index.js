import { counterReducer } from "./counter";
import { combineReducers } from "redux"
import { todosReducer } from "./todos";

export const allReducers = combineReducers({
    counterReducer,
    todosReducer
    // thêm các reducer vào đây
})