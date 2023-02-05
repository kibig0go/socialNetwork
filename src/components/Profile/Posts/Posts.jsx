import React from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

function Posts() {

    const postsData = [
        {id: 0, text: `It's my first post`, likesCount: 5},
        {id: 1, text: `It's my second post`, likesCount: 2},
        {id: 2, text: `It's my third post`, likesCount: 4}
    ]

    const postsElements = postsData.map( p => <Post text={p.text}/>)

    return (
        <div className={s.posts}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts__list}>
                { postsElements }
            </div>
        </div>
    )
}

export default Posts;