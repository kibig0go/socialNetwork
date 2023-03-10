import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import {dialogsReducer} from "./reducer/dialogs_reducer";
import {profileReducer} from "./reducer/profile_reducer";
import {usersReducer} from "./reducer/users_reducer";
import {headerReducer} from "./reducer/header_reducer";
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: headerReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;
export default store;