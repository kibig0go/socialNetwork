import React from "react";
import  s from "./ProfileDescription.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ava from "../../../assets/images/ava.png";

function ProfileDescription(props) {
    if (!props.userData) {
        return <Preloader/>
    }
    // debugger
    console.log(props)

    return (

        <div className={s.profile}>
            <div className={s.profile__ava}>
                {/*<img src='https://flxt.tmsimg.com/assets/258_v9_bb.jpg'/>*/}
                <img src={props.userData.photos.large || ava}/>
            </div>
            <div className={s.profile__descr}>
                <div>
                    <h3>{props.userData.fullName}</h3>
                </div>
                <div>
                    {/*<h3>date</h3>*/}
                </div>
            </div>
        </div>
    )
}

export default ProfileDescription;