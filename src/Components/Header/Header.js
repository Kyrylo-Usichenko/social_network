import React from 'react';
import {FaReact, FaSearch, FaBell, FaTimes} from "react-icons/fa";
import s from './Header.module.scss'
import avatar from '../../images/avatar.jpg'

class Header extends React.Component {


    constructor(props) {
        super(props);
        this.state = {searchInputValue: ''};
    }


    updateInputValue = (event) => {
        this.setState({searchInputValue: event.target.value})

    }

    clearInputValue = () => {
        this.setState({searchInputValue: ''})

    }

    render() {
        return (
            <div className={s.header}>
                <div className="container">
                    <div className={s.header__inner}>

                        <div className={s.logo__wrapper}>
                            <a className={s.logo__link} href="/">
                                <FaReact className={s.logo__img}/>
                            </a>
                        </div>
                        <div className={s.search__wrapper}>
                            <input className={s.search} placeholder='search' value={this.state.searchInputValue}
                                   onChange={this.updateInputValue}/>
                            <FaSearch className={s.search__icon}/>
                            <FaTimes className={s.search__clear} onClick={this.clearInputValue}/>
                        </div>
                        <div className={s.notification}>
                            <FaBell className={s.notification__bell}/>

                        </div>
                        <div className={s.profile}>
                            <span className={s.profile__name}>Kirill</span>
                            <img className={s.profile__avatar} src={avatar} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Header;
