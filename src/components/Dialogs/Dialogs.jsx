import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import MessageInput from "./MessageInput/MessageInput";


function Dialogs(props) {

    const dialogsElements = props.state.dialogsData.map(d => <Dialog name={d.name} id={d.id}/>);

    const messageElements = props.state.messagesData.map(m => <Message text={m.text}/>);

    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                { messageElements }
                <MessageInput/>
            </div>
        </div>
    )
}

export default Dialogs;