import React from 'react';
import Navigation from "../Navigation/Navigation";
import avatar from '../../images/avatar.jpg'

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
            <div className='my-profile'>
                <div className='container'>
                    <div className='my-profile__inner'>
                        <Navigation/>
                        <div className='first-column'>
                            <div className='my-profile__avatar'>
                                <img className='my-profile__avatar-img' src={avatar} alt='/'/>
                                <button className='my-profile__edit'>Edit</button>
                            </div>
                        </div>
                        <div className='second-column'>
                            <div className='my-profile__information'>
                                <h3 className='information__name'>Kirill Usichenko</h3>
                                <p className='information__status'>my clever status</p>
                                <div className='information__content'>
                                    <div className='information__content-line'>
                                        <div className='information__content-property'>Birthday:</div>
                                        <span className='information__content-value'>10.12.2001</span>
                                    </div>
                                    <div className='information__content-line'>
                                        <div className='information__content-property'>Current city:</div>
                                        <span className='information__content-value'>Kyiv</span>
                                    </div>
                                    <div className='information__show-more' onClick={this.openFunction}>
                                        {
                                            !this.state.showMore
                                                ? <div>Show full information</div>
                                                : <div>Hide full information</div>
                                        }</div>
                                    {
                                        !this.state.showMore
                                            ? null
                                            : <div className='information__full'>
                                                <div className='information__title'>main information</div>
                                                <div className='information__content-line'>
                                                    <div className='information__content-property'>Hometown:</div>
                                                    <span className='information__content-value'>Cherkasy</span>
                                                </div>
                                                <div className='information__content-line'>
                                                    <div className='information__content-property'>Languages:</div>
                                                    <span className='information__content-value'>Russian</span>
                                                </div>
                                                <div className='information__title'>Personal information</div>
                                                <div className='information__content-line'>
                                                    <div className='information__content-property'>Favorite quotes:</div>
                                                    <span className='information__content-value'>"Programming isn't about what you know; it's about what you can figure out.” </span>
                                                </div>
                                                <div className='information__content-line'>
                                                    <div className='information__content-property'>Groups:</div>
                                                    <span className='information__content-value'>PiterJS,Flickr,Piter Css,Meduza</span>
                                                </div>
                                            </div>
                                    }


                                </div>
                            </div>
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
