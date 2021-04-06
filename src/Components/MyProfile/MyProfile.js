import React from 'react';
import s from './MyProfile.module.scss'
import avatar from '../../images/avatar.jpg'
import MyPosts from "./MyPosts/MyPosts"



const СontentRow = (props) => {
    return (
        <div className={s.information__contentLine}>
            <div className={s.information__contentProperty}>{props.contentProperty}</div>
            <span className={s.information__contentValue}>{props.contentValue}</span>
        </div>
    )
}

class MyProfile extends React.Component {


    constructor(props) {
        super(props);
        this.state = {showMore: false};
    }

    openFunction = () => {
        this.setState({showMore: !this.state.showMore})
    }

    hideMore = (event) => {
        this.setState({showMore: 'false'})
    }

    render() {


        return (

            <div className={s.myProfile}>

                <div className={s.myProfile__inner}>

                    <div className={s.firstColumn}>
                        <div className={s.myProfile__avatar}>
                            <img className={s.myProfile__avatarImg} src={avatar} alt='/'/>
                            <button className={s.myProfile__edit}>Edit</button>
                        </div>
                    </div>
                    <div className={s.secondColumn}>
                        <div className={s.myProfile__information}>
                            <h3 className={s.information__name}>Kirill Usichenko</h3>
                            <p className={s.information__status}>my clever status</p>
                            <div className={s.information__content}>
                                <СontentRow contentProperty='Birthday:' contentValue='10.12.2001'/>
                                <СontentRow contentProperty='Current city:' contentValue='Kyiv'/>
                                <div className={s.information__showMore} onClick={this.openFunction}>
                                    {
                                        !this.state.showMore
                                            ? <div>Show full information</div>
                                            : <div>Hide full information</div>
                                    }</div>
                                {
                                    !this.state.showMore
                                        ? null
                                        : <div className={s.information__full}>
                                            <div className={s.information__title}>main information</div>
                                            <СontentRow contentProperty='Hometown:' contentValue='Cherkasy'/>
                                            <СontentRow contentProperty='Languages:'
                                                        contentValue='Russian, English, Ukrainian'/>

                                            <div className={s.information__title}>Personal information</div>
                                            <СontentRow contentProperty='Favorite quotes:'
                                                        contentValue="”Programming isn't about what you know; it's about what you can figure out.”"/>
                                            <СontentRow contentProperty='Groups:'
                                                        contentValue="PiterJS,Flickr,Piter Css,Meduza"/>
                                        </div>
                                }


                            </div>
                        </div>
                        <div className='myProfile__my-photos'>my-photos</div>

                        <MyPosts posts={this.props.profilePage.posts}
                                 newPostText={this.props.profilePage.newPostText}
                                 updateNewPostText={this.props.updateNewPostText}
                                 addPost={this.props.addPost} />

                    </div>
                </div>

            </div>
        )
    }
}


export default MyProfile;
