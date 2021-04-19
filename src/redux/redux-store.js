import {combineReducers, createStore} from "redux";
import headerReducer from "./header-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navigationReducer from "./navigation-reducer";
let reducers = combineReducers({
    headerElement: headerReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navigation: navigationReducer
})
let store = createStore(reducers)

export default  store