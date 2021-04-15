import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import navigationReducer from "./navigationReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi, guys. I\'m a new user'},
                {id: 2, message: 'I will share my life'},
                {id: 3, message: 'share my life'},
                {id: 4, message: 'Danya'},
                {id: 5, message: 'Egor'},
                {id: 6, message: 'Maksym'}
            ],
            newPostText: ''

        },
        dialogsPage: {
            messages: [],
            dialogsData: [
                {id: 1, name: 'Roma'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sanya'},
                {id: 4, name: 'Danya'},
                {id: 5, name: 'Egor'},
                {id: 6, name: 'Maksym'}
            ],
            newMessageText: ''
        },
        navigation: {}
    },
    _callSubscriber() {

    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navigation = navigationReducer(this._state.navigation, action)
        this._callSubscriber(this._state)
    }
}



export default store