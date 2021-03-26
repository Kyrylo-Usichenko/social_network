import React from 'react'
import s from './MyPosts.module.scss'
import Post from "./Post/Post"
import avatar from './../../../images/avatar.jpg'
const MyPosts = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.newPost}>
                <img className={s.avatar} src={avatar} alt='/' />
                <textarea className={s.content} />
                <button className={s.button}>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you' />
                <Post message="It's my first post" />
            </div>
        </div>
    )
}
export default MyPosts;