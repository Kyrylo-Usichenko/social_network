import {rerenderEntireTree} from "../render";

let state = {
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
            {id: 1, message: 'hi'},
            {id: 2, message: 'hi'},
            {id: 3, message: 'hi'},
            {id: 4, message: 'hi'},
            {id: 5, message: 'hi'},
            {id: 6, message: 'hi'}
        ],
        dialogsData: [
            {id: 1, name: 'Roma'},
            {id: 2, name: 'Andrey'},
            {id: 3, name: 'Sanya'},
            {id: 4, name: 'Danya'},
            {id: 5, name: 'Egor'},
            {id: 6, name: 'Maksym'}
        ]

    }
}

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state;