import { combineReducers } from "redux"
import { counterReducers } from "./counter"
import { todoReducer } from "./todo"

export const allReducers = combineReducers({
    counterReducers,
    todoReducer
    // Thêm các reducer ở đây
})