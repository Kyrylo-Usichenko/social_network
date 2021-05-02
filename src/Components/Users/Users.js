import React from 'react'
import s from './Users.module.scss'
import * as axios from 'axios'

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network-6bc28-default-rtdb.europe-west1.firebasedatabase.app/.json').then(response => {
                props.setUsers(response.data.items)
            }
        )
    }

    return (
        <div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <div className={s.userWindow}>
                            <img src={user.photos.small} alt="img" className={s.userImg}/>
                            <div className={s.userInfo}>
                                <h1 className={s.userName}>{user.name}</h1>
                                <div className={s.userLocation}>
                                    {user.city && `${user.city},`}
                                    {user.country}
                                </div>
                                <div className={s.userStatus}>{user.status}</div>
                                {user.followed
                                    ? <button className={s.unfollowButton} onClick={() => {
                                        props.unfollow(user.id)
                                    }}>Unfollow</button>
                                    : <button className={s.followButton} onClick={() => {
                                        props.follow(user.id)
                                    }}>Follow</button>
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;


