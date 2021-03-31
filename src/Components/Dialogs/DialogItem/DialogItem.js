import {NavLink} from "react-router-dom";
import s from './DialogItem.module.scss'

const DialogItem = ({id, name}) => {
    let path = '/dialogs/' + id
    return (

        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem