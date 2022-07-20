import { combineReducers, legacy_createStore } from "redux";
import DialogsReduser from "./Dialogs-reducer";
import ProfileReduser from "./Profile-reducer";
import NavbarReducer from './Navbar-reducer'
let reducers = combineReducers({
    Dialog: DialogsReduser,
    Profile: ProfileReduser,
    Navbar: NavbarReducer
})
let store = legacy_createStore(reducers);

export default store