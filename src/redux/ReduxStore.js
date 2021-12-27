import { createStore } from 'redux'
import todoApp from "./reducers/CombineReducer";
import {composeWithDevTools} from "redux-devtools-extension";
const store = createStore(todoApp, composeWithDevTools())

export default store