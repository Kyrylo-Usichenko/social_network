const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
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
            messages: [
            ],
            dialogsData: [
                {id: 1, name: 'Roma'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sanya'},
                {id: 4, name: 'Danya'},
                {id: 5, name: 'Egor'},
                {id: 6, name: 'Maksym'}
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {

    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },



    dispatch(action){
        if (action.type === 'ADD-POST'){
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText
            }
            this._state.profilePage.posts.push(newPost)
            this._callSubscriber(this._state)
            this._state.profilePage.newPostText = ''

        } else if (action.type === 'UPDATE-NEW-POST-TEXT' ){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        } else if (action.type === 'ADD-MESSAGE'){
            let newMessage = {
                id: 7,
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage)
            this._callSubscriber(this._state)
            this._state.dialogsPage.newMessageText = ''

        }else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT' ){
            this._state.dialogsPage.newMessageText = action.newText
            this._callSubscriber(this._state)
        }

    }

}
export const addPostActionCreator = () => ({type: ADD_POST})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default store