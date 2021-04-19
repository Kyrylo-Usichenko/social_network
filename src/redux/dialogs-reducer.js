const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
let initialState = {
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
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: Math.random(),
                message: state.newMessageText
            }
            state.newMessageText = ''
            state.messages.push(newMessage)
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export default dialogsReducer