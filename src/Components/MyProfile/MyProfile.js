import React from 'react';
import Navigation from "../Navigation/Navigation";
import avatar from '../../images/2.jpg'

class MyProfile extends React.Component {
    render() {
        return (
            <div className='my-profile'>
                <div className='container'>
                    <div className='my-profile__inner'>
                        <Navigation  />
                        <div className='first-column'>
                            <div className='my-profile__avatar'>
                                <img className='my-profile__avatar-img' src={avatar} alt='/'/>
                                <button className='my-profile__edit'>Edit</button>
                            </div>
                        </div>
                        <div className='second-column' >
                            <div className='my-profile__information'>information</div>
                            <div className='my-profile__my-photos'>my-photos</div>
                            <div className='my-profile__new-post'>new-post</div>
                            <div className='my-profile__posts'>posts</div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default MyProfile;
