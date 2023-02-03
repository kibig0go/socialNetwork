import React from "react";

function Profile() {
  return (
    <div className='content'>
      <div className='content__img'>
        <img src='https://img.freepik.com/free-photo/grunge-paint-background_1409-1337.jpg?w=2000' />
      </div>
      <div className='profile'>
        <div className='profile__ava'>
          <img src='https://flxt.tmsimg.com/assets/258_v9_bb.jpg' />
        </div>
        <div className='profile__descr'>
          <div>
            <h3>Name</h3>
          </div>
          <div>
            <h3>date</h3>
          </div>
        </div>
      </div>
      <div className='posts'>
        <h2>My posts</h2>
      </div>
    </div>
  )
}

export default Profile;