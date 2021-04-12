import s from './Dialogs.module.scss'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {IoMdSend} from "react-icons/all";
import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";


const Dialogs = (props) => {

    let newMessageElement = React.createRef()
    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} key={d.id}/>)
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id}/>)
    let addMessage = () => {
        if (newMessageElement.current.value.length){
            props.dispatch(addMessageActionCreator())
        } else {
            alert('You didn’t write anything')
        }
    }
    let onMessageChange = () => {
        let text = newMessageElement.current.value
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className="chat">{messagesElements}</div>
                <div className={s.messages__form} >
                    <div className={s.textAreaWrapper}>
                        <textarea className={s.newMessage}
                                  onChange={onMessageChange}
                                  ref={newMessageElement}
                                  value={props.dialogsPage.newMessageText}/>
                    </div>
                    <button onClick={addMessage}><IoMdSend/></button>
                </div>


            </div>
        </div>
    );
}


export default Dialogs;

