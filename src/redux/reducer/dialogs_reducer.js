
export const dialogsReducer = (state, action) => {
    switch (action.type) {
        case 'HANDLE_MESSAGE_TEXT_CHANGE':
            state.textAreaText = action.messageText;
            return state;
        case 'SEND_MESSAGE':
            const newMessage = {
                id: 0,
                text: state.textAreaText
            };
            state.messagesData.push(newMessage);
            state.textAreaText = '';
            return state;
        default: return state;
    }
}

export function createActionHandleMessageTextChange(newText) {
    const action = {
        type: 'HANDLE_MESSAGE_TEXT_CHANGE',
        messageText: newText,
    }
    return action;
}

export function createActionSendMessage() {
    const action = {
        type: 'SEND_MESSAGE'
    };
    return action;
}