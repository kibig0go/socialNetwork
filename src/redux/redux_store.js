import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import {dialogsReducer} from "./reducer/dialogs_reducer";
import {profileReducer} from "./reducer/profile_reducer";
import {usersReducer} from "./reducer/users_reducer";
import {headerReducer} from "./reducer/header_reducer";
import thunkMiddleware from "redux-thunk"
import {appReducer} from "./reducer/app_reducer";

const reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: headerReducer,
    app: appReducer
})

const store = createStore(reducers,
    compose(applyMiddleware(thunkMiddleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
     )

window.store = store;
export default store;