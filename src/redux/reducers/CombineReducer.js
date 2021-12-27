import { combineReducers } from 'redux'
import MainReducer from "./MainReducer";
import RenderCountReducer from "./RenderCountReducer";
import FilterReducer from "./FilterReducer";

const todoApp = combineReducers({
    MainReducer,
    RenderCountReducer,
    FilterReducer
})

export default todoApp