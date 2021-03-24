import React from 'react';

class Navigation extends React.Component {

    render() {
        return (
            <div className='navigation'>
                <ul className='navigation__list'>
                    <li className='navigation__item'><a href='/' className='navigation__link'> My profile </a></li>
                    <li className='navigation__item'><a href='/' className='navigation__link'>News</a></li>
                    <li className='navigation__item'><a href='/' className='navigation__link'>Messages</a></li>
                    <li className='navigation__item'><a href='/' className='navigation__link'>Friends</a></li>
                    <li className='navigation__item'><a href='/' className='navigation__link'>Communities</a></li>
                    <li className='navigation__item'><a href='/' className='navigation__link'>Photos</a></li>
                    <li className='navigation__item'><a href='/' className='navigation__link'>Music</a></li>
                    <li className='navigation__item'><a href='/' className='navigation__link'>Videos</a></li>
                </ul>
            </div>
        );
    }
}


export default Navigation;
