import React from 'react'
import s from './MyPosts.module.scss'
import Post from "./Post/Post"
import avatar from './../../../images/avatar.jpg'

const MyPosts = () => {
    let posts = [
        {id: 1, message: 'hi, guys. I\'m a new user'},
        {id: 2, message: 'I will share my life'},
        {id: 3, message: 'share my life'},
        {id: 4, message: 'Danya'},
        {id: 5, message: 'Egor'},
        {id: 6, message: 'Maksym'}
    ]
    let  postsElements = posts.map( p => <Post message={p.message} />).reverse()
    return (
        <div className={s.wrapper}>
            <div className={s.newPost}>
                <img className={s.avatar} src={avatar} alt='/'/>
                <textarea className={s.content}/>
                <button className={s.button}>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}
export default MyPosts;