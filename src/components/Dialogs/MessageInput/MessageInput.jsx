import React from "react";
import s from './MessageInput.module.css'


function MessageInput(props) {

    const newMessageText = React.createRef();

    function sendMessage() {
        const text = newMessageText.current.value;
        alert(text);
    }

    return (
        <div className={s.message__input_wrapper}>
            <input type='text' className={s.message__input} placeholder='Сообщение' ref={newMessageText}/>
            <input type='submit' className={s.submit} value='' onClick={ sendMessage }/>
        </div>
    )
}

export default MessageInput;