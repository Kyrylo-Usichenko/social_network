import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {
    let dialogsData = [
        {id: 1, name: 'Roma'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sanya'},
        {id: 4, name: 'Danya'},
        {id: 5, name: 'Egor'},
        {id: 6, name: 'Maksym'}
    ]

    let messages = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hi'},
        {id: 3, message: 'hi'},
        {id: 4, message: 'hi'},
        {id: 5, message: 'hi'},
        {id: 6, message: 'hi'}
    ]

    let dialogsElements = dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messagesElements = messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}


export default Dialogs;

