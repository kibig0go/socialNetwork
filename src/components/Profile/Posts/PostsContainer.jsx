import React from "react";
import {createActionHandleTextAreaChange, createActionAddPost} from "../../../redux/reducer/profile_reducer";
import Posts from "./Posts";
import StoreContext from "../../../MyContext";
import {connect} from "react-redux";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {mapDispatchToPropsFactory} from "react-redux/es/connect/mapDispatchToProps";

// function PostsContainer(props) {
//
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     function addPost() {
//                         store.dispatch(createActionAddPost());
//                     }
//                     function handleTextAreaChange(newText) {
//                         store.dispatch(createActionHandleTextAreaChange(newText));
//                     }
//                     return <Posts handleTextAreaChange={handleTextAreaChange}
//                            addPost={addPost}
//                            postsData={store.getState().profilePage.postsData}
//                            textAreaNewText={store.getState().profilePage.textAreaNewText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        textAreaNewText: state.profilePage.textAreaNewText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleTextAreaChange: (newText) => {
            dispatch(createActionHandleTextAreaChange(newText));
        },
        addPost: () => {
            dispatch(createActionAddPost());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;