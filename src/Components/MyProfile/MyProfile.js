import React from 'react';
import s from './MyProfile.module.scss'
import avatar from '../../images/avatar.jpg'
import MyPosts from "./MyPosts/MyPosts"

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
                                    <div className={s.information__contentLine}>
                                        <div className={s.information__contentProperty}>Birthday:</div>
                                        <span className={s.information__contentValue}>10.12.2001</span>
                                    </div>
                                    <div className={s.information__contentLine}>
                                        <div className={s.information__contentProperty}>Current city:</div>
                                        <span className={s.information__contentValue}>Kyiv</span>
                                    </div>
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
                                                <div className={s.information__contentLine}>
                                                    <div className={s.information__contentProperty}>Hometown:</div>
                                                    <span className={s.information__contentValue}>Cherkasy</span>
                                                </div>
                                                <div className={s.information__contentLine}>
                                                    <div className={s.information__contentProperty}>Languages:</div>
                                                    <span className={s.information__contentValue}>Russian</span>
                                                </div>
                                                <div className={s.information__title}>Personal information</div>
                                                <div className={s.information__contentLine}>
                                                    <div className={s.information__contentProperty}>Favorite quotes:</div>
                                                    <span className={s.information__contentValue}>"Programming isn't about what you know; it's about what you can figure out.” </span>
                                                </div>
                                                <div className={s.information__contentLine}>
                                                    <div className={s.information__contentProperty}>Groups:</div>
                                                    <span className={s.information__contentValue}>PiterJS,Flickr,Piter Css,Meduza</span>
                                                </div>
                                            </div>
                                    }


                                </div>
                            </div>
                            <div className='myProfile__my-photos'>my-photos</div>
                            <div className='myProfile__new-post'>new-post</div>
                            <MyPosts/>

                        </div>
                    </div>

            </div>
        )
    }
}


export default MyProfile;
