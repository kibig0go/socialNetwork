import React from "react";
import s from "./ProfileDescription.module.css";

function ProfileDescription(props) {
    return (

        <div className={s.profile}>
            <div className={s.profile__ava}>
                <img src='https://flxt.tmsimg.com/assets/258_v9_bb.jpg'/>
            </div>
            <div className={s.profile__descr}>
                <div>
                    <h3>Name</h3>
                </div>
                <div>
                    <h3>date</h3>
                </div>
            </div>
        </div>
    )
}

export default ProfileDescription;