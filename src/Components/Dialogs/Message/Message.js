import s from './Message.module.scss'



const Message = ({message}) => {
    return (
        <div className={s.dialog}>{message}</div>
    )
}

export default Message;