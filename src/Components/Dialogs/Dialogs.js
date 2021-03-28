import s from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";
const DialogItem = (props) =>{
    let path = '/dialogs/' + props.id
    return (

        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Dialogs = (props) => {
        return (
            <div className={s.dialogs}>
                <div className={s.dialogs__item}>
                    <DialogItem name='Roma' id='1'>
                        <div className={s.dialog}>
                            <NavLink to='/dialogs/2'>asdasdasdandrey</NavLink>
                        </div>
                    </DialogItem>
                </div>
            </div>
        );
    }



export default Dialogs;

