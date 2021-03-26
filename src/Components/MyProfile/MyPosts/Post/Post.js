import React from 'react'
import s from './Post.module.scss'
import avatar from './../../../../images/avatar.jpg'

const Post = (props) => {

    return (
        <div className={s.item}>
            <div className={s.profile}>
                <img className={s.avatar} src={avatar} alt='/'/>
                <a className={s.name} href='/' >Kirill Usichenko</a>
            </div>
            post 1
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;