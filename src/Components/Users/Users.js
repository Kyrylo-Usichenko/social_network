import React from 'react'
import s from './Users.module.scss'

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/5/46/756038770746465.jpg',
                    followed: false,
                    fullName: 'Kirill',
                    status: 'i am a boss',
                    location: {city: 'Kyiv', country: 'Ukraine'}
                },
                {
                    id: 2,
                    photoUrl: 'https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/5/46/756038770746465.jpg',
                    followed: true,
                    fullName: 'Roman',
                    status: 'i am a boss',
                    location: {city: 'Kharkiv', country: 'Ukraine'}
                },
                {
                    id: 3,
                    photoUrl: 'https://s0.rbk.ru/v6_top_pics/resized/1200xH/media/img/5/46/756038770746465.jpg',
                    followed: false,
                    fullName: 'Andrey',
                    status: 'i am a boss',
                    location: {city: 'Lvyv', country: 'Ukraine'}
                }
            ]
        )
        console.log(props.users.length)
    }

    return (
        <div>
            {
                props.users.map(user =>
                    <div key={user.id}>
                        <div className={s.userWindow}>
                            <img src={user.photoUrl} alt="img" className={s.userImg}/>
                            {user.followed
                                ? <button onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>
                            }
                            <div className={s.userInfo}>
                                {user.fullName}
                                {user.status}
                                {user.location.city}
                                {user.location.country}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Users;


