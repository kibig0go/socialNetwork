import React from "react";
import s from './MessageInput.module.css'
import {createActionHandleMessageTextChange, createActionSendMessage} from "../../../redux/reducer/dialogs_reducer";


function MessageInput(props) {

    // const newMessageText = React.createRef();

    function sendMessage() {
        props.onSendMessage();
        // alert(text);
    }

    function handleMessageInputChange(e) {
        const newText = e.target.value;
        props.onHandleMessageInputChangedispatch(newText);
    }


    return (
        <div className={s.message__input_wrapper}>
            <input onChange={ handleMessageInputChange } value={props.messageText} type='text' className={s.message__input} placeholder='Сообщение' />
            <input type='submit' className={s.submit} value='' onClick={ sendMessage }/>
        </div>
    )
}

export default MessageInput;