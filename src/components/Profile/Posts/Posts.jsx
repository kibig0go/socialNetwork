import React, {createRef} from "react";
import s from "./Posts.module.css";
import Post from "./Post/Post";
import {createActionHandleTextAreaChange, createActionAddPost} from "../../../redux/reducer/profile_reducer";


function Posts(props) {

    const postsElements = props.profilePageData.postsData.map(p => <Post text={p.text}/>)

    const newPostElement = React.createRef();


    function addPost() {
        props.dispatch(createActionAddPost());
    }

    function handleTextAreaChange() {
        const newText = newPostElement.current.value;
        props.dispatch(createActionHandleTextAreaChange(newText));
    }

    return (
        <div className={s.posts}>
            <h2>My posts</h2>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={handleTextAreaChange}
                              value={props.profilePageData.textAreaNewText}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts__list}>
                {postsElements}
            </div>
        </div>
    )
}

export default Posts;