import s from './Dialogs.module.scss'
import {NavLink} from "react-router-dom";

const DialogItem = ({id, name}) => {
    let path = '/dialogs/' + id
    return (

        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}
const Message = ({message}) => {
    return (
        <div className={s.dialog}>{message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Roma'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sanya'},
        {id: 4, name: 'Danya'},
        {id: 5, name: 'Egor'},
        {id: 6, name: 'Maksym'}
    ]
    let messageData = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hi'},
        {id: 3, message: 'hi'},
        {id: 4, message: 'hi'},
        {id: 5, message: 'hi'},
        {id: 6, message: 'hi'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
                <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
                <DialogItem name={dialogsData[5].name} id={dialogsData[5].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messageData[0].message}/>
                <Message message={messageData[1].message}/>
                <Message message={messageData[2].message}/>
                <Message message={messageData[3].message}/>
                <Message message={messageData[4].message}/>
                <Message message={messageData[5].message}/>
            </div>
        </div>
    );
}


export default Dialogs;

