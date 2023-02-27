import React from "react";
import s from './Dialogs.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import MessageInput from "./MessageInput/MessageInput";
import {Navigate} from "react-router-dom";


function Dialogs(props) {
    // if (!props.isAuth) return <Navigate to='/login'/>

    const dialogsElements = props.dialogsData.map(d => <Dialog name={d.name} key={d.id}/>);

    const messageElements = props.messagesData.map(m => <Message key={m.id} text={m.text}/>);
    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                { messageElements }
                <MessageInput messageText={props.messageText} onHandleMessageInputChangedispatch={props.onHandleMessageInputChange} onSendMessage={props.onSendMessage}/>
            </div>
        </div>
    )
}

export default Dialogs;