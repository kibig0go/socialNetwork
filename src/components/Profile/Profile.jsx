import React from "react";
import s from "./Profile.module.css"
import Posts from "./Posts/Posts";

function Profile() {
  return (
    <div className={s.content}>
      <div className={s.content__img}>
        <img src='https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000' />
      </div>
      <div className={s.profile}>
        <div className={s.profile__ava}>
          <img src='https://flxt.tmsimg.com/assets/258_v9_bb.jpg' />
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
      <Posts />
    </div>
  )
}

export default Profile;