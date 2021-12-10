import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk";
import {loginReducer} from "./login-reducer";
import { registrationReducer } from "./registration-reducer";

const reducers = combineReducers({
    loginPage: loginReducer,
    registrationPage: registrationReducer,

});

export type AppRootStateType = ReturnType<typeof reducers>
export const store = createStore(reducers, applyMiddleware(thunk))

//@ts-ignore
window.store = store