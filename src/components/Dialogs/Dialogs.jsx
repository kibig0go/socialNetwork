import React from "react";
import s from './Dialogs.module.css'
function Dialogs(props) {
    return (
        <div className={s.dialogs__wrapper}>
            <div className={s.dialogs}>
                <div className={s.dialog}>1</div>
                <div className={s.dialog}>2</div>
                <div className={s.dialog}>3</div>
                <div className={s.dialog}>4</div>
                <div className={s.dialog}>5</div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>asd</div>
                <div className={s.message}>sdf</div>
                <div className={s.message}>dfg</div>
                <div className={s.message}>fgh</div>
            </div>
        </div>
    )
}

export default Dialogs;