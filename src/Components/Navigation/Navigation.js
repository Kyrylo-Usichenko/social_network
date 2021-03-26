import React from 'react';
import s from './Navigation.module.scss'

class Navigation extends React.Component {

    render() {
        return (
            <div className={s.navigation}>
                <ul className={s.navigation__list}>
                    <li className={s.navigation__item}><a href='/' className={s.navigation__link}> My profile </a></li>
                    <li className={s.navigation__item}><a href='/' className={s.navigation__link}>News</a></li>
                    <li className={s.navigation__item}><a href='/' className={s.navigation__link}>Messages</a></li>
                    <li className={s.navigation__item}><a href='/' className={s.navigation__link}>Friends</a></li>
                    <li className={s.navigation__item}><a href='/' className={s.navigation__link}>Communities</a></li>
                    <li className={s.navigation__item}><a href='/' className={s.navigation__link}>Photos</a></li>
                    <li className={s.navigation__item}><a href='/' className={s.navigation__link}>Music</a></li>
                    <li className={s.navigation__item}><a href='/' className={s.navigation__link}>Videos</a></li>
                </ul>
            </div>
        );
    }
}


export default Navigation;
