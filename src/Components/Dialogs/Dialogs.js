import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {IoMdSend} from "react-icons/all";
import React from "react";



const Dialogs = (props) => {

    let state = props.dialogsPage
    let dialogsElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id}/>)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageElement = state.newMessageText

    let onAddMessage = () => {
        props.addMessage()
    }
    let onMessageChange = (e) => {
        let text = e.target.value
        props.updateNewMessageText(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className="chat">{messagesElements}</div>
                <div className={s.messages__form}>
                    <div className={s.textAreaWrapper}>
                        <textarea className={s.newMessage}
                                  onChange={onMessageChange}
                                  value={newMessageElement}/>
                    </div>
                    <button onClick={onAddMessage}><IoMdSend/></button>
                </div>


            </div>
        </div>
    );
}


export default Dialogs;

