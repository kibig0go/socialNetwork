import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

function Posts() {
  return (
    <div className='posts'>
      <h2>My posts</h2>
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts__list}>
        <Post text='hello'/>
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}

export default Posts;