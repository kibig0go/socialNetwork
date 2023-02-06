import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

function Dialog(props) {
    return (
        <div className={s.dialog}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;