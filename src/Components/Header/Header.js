import React from 'react';
import {FaReact, FaSearch, FaBell, FaTimes} from "react-icons/fa";
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
            <div className='header'>
                <div className="container">
                    <div className="header__inner">

                        <div className="logo__wrapper">
                            <a className='logo__link' href="/">
                                <FaReact className='logo__img'/>
                            </a>
                        </div>
                        <div className="search__wrapper">
                            <input className='search' placeholder='search' value={this.state.searchInputValue}
                                   onChange={this.updateInputValue}/>
                            <FaSearch className='search__icon'/>
                            <FaTimes className='search__clear' onClick={this.clearInputValue}/>
                        </div>
                        <div className='notification'>
                            <FaBell className='notification__bell'/>

                        </div>
                        <div className='profile'>
                            <span className='profile__name'>Kirill</span>
                            <img className='profile__avatar' src={avatar} alt=""/>


                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Header;
