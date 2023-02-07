import React from "react";
import s from "./Profile.module.css"
import Posts from "./Posts/Posts";
import ProfileDescription from "./ProfileDescription/ProfileDescription";


function Profile(props) {

    return (
        <div className={s.content}>
            <div className={s.content__img}>
                <img src='https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000'/>
            </div>
            <ProfileDescription/>
            <Posts profilePageData={props.profilePageData} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;