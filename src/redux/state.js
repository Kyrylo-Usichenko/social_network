let rerenderEntireTree = () => {
    console.log('asd')
}
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
            {id: 12, message: 'hi'},
            {id: 22, message: 'hi'},
            {id: 32, message: 'hi'},
            {id: 42, message: 'hi'},
            {id: 52, message: 'hi'},
            {id: 62, message: 'hi'}
        ],
        dialogsData: [
            {id: 13, name: 'Roma'},
            {id: 23, name: 'Andrey'},
            {id: 33, name: 'Sanya'},
            {id: 43, name: 'Danya'},
            {id: 53, name: 'Egor'},
            {id: 63, name: 'Maksym'}
        ]

    }
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree()
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree()
}
export const subscribe = (observer) =>{
    rerenderEntireTree = observer
}
export default state;