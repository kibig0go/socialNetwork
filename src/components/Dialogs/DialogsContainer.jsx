import React from "react";
import Dialogs from "./Dialogs";
import {createActionHandleMessageTextChange, createActionSendMessage} from "../../redux/reducer/dialogs_reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


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
        messageText: state.dialogsPage.textAreaText,
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



const AuthRedirectContainer = withAuthRedirect(Dialogs);



// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectContainer);

const DialogsContainer = compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

export default DialogsContainer;