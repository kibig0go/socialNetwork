import React from "react";
import Dialogs from "./Dialogs";
import {createActionHandleMessageTextChange, createActionSendMessage} from "../../redux/reducer/dialogs_reducer";
import StoreContext from "../../MyContext";
import {connect} from "react-redux";


// function DialogsContainer(props) {
// // debugger
//     return (
//         <StoreContext.Consumer>
//             {
//                 store => {
//                     const state = store.getState();
//
//                     const onHandleMessageInputChange = (newText) => {
//                         store.dispatch(createActionHandleMessageTextChange(newText))
//                     }
//                     const onSendMessage = () => {
//                         store.dispatch(createActionSendMessage());
//                     }
//
//                     return <Dialogs dialogsData={state.dialogsPage.dialogsData}
//                                     messagesData={state.dialogsPage.messagesData}
//                                     messageText={state.dialogsPage.textAreaText}
//                                     onHandleMessageInputChange={onHandleMessageInputChange}
//                                     onSendMessage={onSendMessage}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        messageText: state.dialogsPage.textAreaText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onHandleMessageInputChange: (newText) => {
            dispatch(createActionHandleMessageTextChange(newText))
        },
        onSendMessage: () => {
            dispatch(createActionSendMessage());
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;