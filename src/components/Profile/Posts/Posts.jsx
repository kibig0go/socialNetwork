import React, {createRef} from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";

function Posts(props) {

    const postsElements = props.postsData.map(p => <Post text={p.text}/>)

    const onHandleTextAreaChange = (e) => {
        const text = e.target.value;
        props.handleTextAreaChange(text);
    }

    const onAddPost = () => {
        props.addPost();
    }

    return (
        <div className={s.posts}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea onChange={onHandleTextAreaChange}
                              value={props.textAreaNewText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts__list}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts;