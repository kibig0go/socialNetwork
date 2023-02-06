import React from "react";
import s from './../Dialogs.module.css'

function Message(props) {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

export default Message;