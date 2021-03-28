import React from 'react'
import s from './Post.module.scss'
import avatar from './../../../../images/avatar.jpg'
import {AiOutlineLike} from 'react-icons/ai';

const Post = (props) => {

    return (
        <div className={s.item}>
            <div className={s.profile}>
                <img className={s.avatar} src={avatar} alt='/'/>
                <a className={s.name} href='/'>Kirill Usichenko</a>
            </div>
            <div className={s.content__wrapper}>
                <p className={s.content}>{props.message}</p>
            </div>
            <div className={s.like__wrapper}>
                <AiOutlineLike className={s.like}/>
            </div>
        </div>
    )
}
export default Post;