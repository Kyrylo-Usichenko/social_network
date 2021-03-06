import React from 'react'
import s from './MyPosts.module.scss'
import Post from "./Post/Post"
import avatar from './../../../images/avatar.jpg'



const MyPosts = (props) => {
    let newPostElement = React.createRef()
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id}/>).reverse()
    let onAddPost = () => {
        if (newPostElement.current.value.length) {
            props.addPost()
        } else {
            alert('You didn’t write anything')
        }
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)

    }

    return (
        <div className={s.wrapper}>
            <div className={s.newPost}>
                <img className={s.avatar} src={avatar} alt='/'/>
                <textarea className={s.content} onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                <button className={s.button} onClick={onAddPost}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;