import React from "react";
import s from './Post.module.css'

function Post(props) {
    return (
        <div>
            post
            {props.text}
        </div>
    )
}

export default Post;