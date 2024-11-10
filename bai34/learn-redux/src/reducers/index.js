import { counterReducer } from "./counter";
import { combineReducers } from "redux";
import { todosReducer } from "./todos";

const allReducers = combineReducers({
    counterReducer,
    todosReducer
    // thêm các reducer ở đây
})

export default allReducers;