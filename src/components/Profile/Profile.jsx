import React from "react";
import s from "./Profile.module.css"
import ProfileDescription from "./ProfileDescription/ProfileDescription";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";


function Profile(props) {

    return (

        <div className={s.content}>
            <div className={s.content__img}>
                <img src='https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000'/>
            </div>
            {props.isFetching ? <Preloader/> : <ProfileDescription userData={props.userData} status={props.status}  updateStatus={props.updateStatus}/>}

            <PostsContainer />
        </div>
    )
}

export default Profile;