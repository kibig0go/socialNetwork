const initialState = {
    dialogsData: [
        {id: 0, name: 'Andrey'},
        {id: 1, name: 'Igor'},
        {id: 2, name: 'Nekit'},
        {id: 3, name: 'Nastya'},
        {id: 4, name: 'Apollon'},
    ],
    messagesData: [
        {id: 0, text: 'Hi'},
        {id: 1, text: 'HHiii'},
        {id: 2, text: 'Yo'},
        {id: 3, text: 'Hey'},
        {id: 4, text: 'Hello'},
        {id: 5, text: 'Hello'},
    ],
    textAreaText: ''
}

export const dialogsReducer = (state = initialState, action) => {
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
        default:
            return state;
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