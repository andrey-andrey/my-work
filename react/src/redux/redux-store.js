import {combineReducers, applyMiddleware, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authreduser from "./auth-reduser";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar:sidebarReducer,
	usersPage: usersReducer,
    auth:authreduser,	
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
export default store;