import React from "react";
import s from './Post.module.css'

function Post(props) {
    return (
        <div>
            post 1
            {props.text}
        </div>
    )
}

export default Post;