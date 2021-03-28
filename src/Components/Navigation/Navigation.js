import React from 'react';
import s from './Navigation.module.scss'
import {NavLink} from "react-router-dom";

class Navigation extends React.Component {

    render() {
        return (
            <div className={s.navigation}>
                <ul className={s.navigation__list}>
                    <li className={s.navigation__item}><NavLink to='/myProfile' className={s.navigation__link}> My profile </NavLink></li>
                    <li className={s.navigation__item}><NavLink to='/dialogs' className={s.navigation__link}  >Dialogs</NavLink></li>
                    {/*<li className={s.navigation__item}><NavLink href='/myprofile' className={s.navigation__link}>Messages</NavLink></li>*/}
                    {/*<li className={s.navigation__item}><NavLink href='/myprofile' className={s.navigation__link}>Friends</NavLink></li>*/}
                    {/*<li className={s.navigation__item}><NavLink href='/myprofile' className={s.navigation__link}>Communities</NavLink></li>*/}
                    {/*<li className={s.navigation__item}><NavLink href='/myprofile' className={s.navigation__link}>Photos</NavLink></li>*/}
                    {/*<li className={s.navigation__item}><NavLink href='/myprofile' className={s.navigation__link}>Music</NavLink></li>*/}
                    {/*<li className={s.navigation__item}><NavLink href='/myprofile' className={s.navigation__link}>Videos</NavLink></li>*/}
                </ul>
            </div>

        );
    }
}


export default Navigation;
