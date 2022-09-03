import { createStore, combineReducers, applyMiddleware } from "redux";
import loginreducer from "./login/loginreducer";
import signupreducer from "./signup/signupreducer";
import thunk from "redux-thunk";
const rootreducer = combineReducers({ signupreducer, loginreducer })
const store = createStore(rootreducer, applyMiddleware(thunk));
export default store