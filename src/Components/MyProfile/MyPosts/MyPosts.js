import React from 'react'
import s from './MyPosts.module.scss'
import Post from "./Post/Post"
import avatar from './../../../images/avatar.jpg'
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";



const MyPosts = (props) => {
    let newPostElement = React.createRef()
    let addPost = () => {
        if (newPostElement.current.value.length){
            props.dispatch(addPostActionCreator())
        } else {
            alert('You didn’t write anything')
        }
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action)
    }

    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id}/>).reverse()
    return (
        <div className={s.wrapper}>
            <div className={s.newPost}>
                <img className={s.avatar} src={avatar} alt='/'/>
                <textarea className={s.content} onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button className={s.button} onClick={addPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;