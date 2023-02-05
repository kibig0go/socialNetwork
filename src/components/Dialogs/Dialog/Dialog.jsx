import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialog(props) {
    return (
        <div className={s.dialog}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return (
        <div className={s.message}>{props.text}</div>
    )
}

function Dialogs(props) {

    const dialogsData = [
        {id: 0, name: 'Andrey'},
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Nekit'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Apollon'},
    ]
    const dialogsElements = dialogsData.map(d => <Dialog name={d.name} id={d.id}/>);

    const messagesData = [
        {id: 0, text: 'Hi'},
        {id: 1, text: 'HHiii'},
        {id: 2, text: 'Yo'},
        {id: 3, text: 'Hey'},
        {id: 4, text: 'Hello'},
        {id: 5, text: 'Hello'},
    ]
    const messageElements = messagesData.map(m => <Message text={m.text}/>);

    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                { messageElements }
            </div>
        </div>
    )
}

export default Dialogs;