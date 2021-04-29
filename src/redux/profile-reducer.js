const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
let initialState = {

    posts: [
        {id: 1, message: 'hi, guys. I\'m a new user'},
        {id: 2, message: 'I will share my life'},
        {id: 3, message: 'share my life'},
        {id: 4, message: 'Danya'},
        {id: 5, message: 'Egor'},
        {id: 6, message: 'Maksym'}
    ],
    newPostText: ''


}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {id: Math.random(), message: state.newPostText}],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export default profileReducer