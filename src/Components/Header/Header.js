import React from 'react';
import {FaReact, FaSearch, FaBell, FaRegArrowAltCircleDown} from "react-icons/fa";
import avatar from '../../images/2.jpg'
const Header = () => {


    return (
        <div className='header'>
            <div className="container">
                <div className="header__inner">

                        <div className="logo__wrapper">
                            <a className='logo__link' href="/">
                            <FaReact className='logo__img' />
                            </a>
                        </div>
                    <div className="search__wrapper">
                        <input className='search' placeholder='search'/>
                        <FaSearch className='search__icon'/>
                    </div>
                    <div className='notification'>
                        <FaBell className='notification__bell'/>
                    </div>
                    <div className='profile'>
                        <span>Kirill</span>
                        <img className='profile__avatar' src={avatar} alt=""/>
                       

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
