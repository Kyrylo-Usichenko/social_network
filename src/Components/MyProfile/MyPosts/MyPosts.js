import React from 'react'
import s from './MyPosts.module.scss'
import Post from "./Post/Post"
import avatar from './../../../images/avatar.jpg'

const MyPosts = () => {
    let postData = [
        {id: 1, message: 'I will share my life'},
        {id: 2, message: 'hi, guys. I\'m a new user'},
        {id: 3, message: 'Sanya'},
        {id: 4, message: 'Danya'},
        {id: 5, message: 'Egor'},
        {id: 6, message: 'Maksym'}
    ]
    return (
        <div className={s.wrapper}>
            <div className={s.newPost}>
                <img className={s.avatar} src={avatar} alt='/'/>
                <textarea className={s.content}/>
                <button className={s.button}>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message={postData[0].message} />
                <Post message={postData[1].message} />
                <Post message={postData[2].message} />
                <Post message={postData[3].message} />
                <Post message={postData[4].message} />
            </div>
        </div>
    )
}
export default MyPosts;