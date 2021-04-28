const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'
let initialState = {
    messages: [
        {id: 1, name: 'message 1'},
        {id: 2, name: 'message 2'},
        {id: 3, name: 'message 3'},
        {id: 4, name: 'message 4'},
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
const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: Math.random(), message: state.newMessageText}]
            };

        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export default dialogsReducer