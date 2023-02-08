export function createActionAddPost() {
    const action = {
        type: 'ADD_POST'
    };
    return action;
}

export function createActionHandleTextAreaChange(newText) {
    const action = {
        type: 'HANDLE_TEXT_AREA_CHANGE',
        text: newText,
    }
    return action;
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

const store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            postsData: [
                {id: 0, text: `It's my first post`, likesCount: 5},
                {id: 1, text: `It's my second post`, likesCount: 2},
                {id: 2, text: `It's my third post`, likesCount: 4}
            ],
            textAreaNewText: '',
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        alert('da');
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        switch (action.type) {
            case 'ADD_POST':
                const newPost = {
                    id: 3,
                    text: this._state.profilePage.textAreaNewText,
                    likesCount: 0
                }
                this._state.profilePage.postsData.push(newPost);
                this._state.profilePage.textAreaNewText = '';
                this._callSubscriber(this._state);
                break;
            case 'HANDLE_TEXT_AREA_CHANGE':
                this._state.profilePage.textAreaNewText = action.text;
                this._callSubscriber(this._state);
                break;
            case 'HANDLE_MESSAGE_TEXT_CHANGE':
                this._state.dialogsPage.textAreaText = action.messageText;
                this._callSubscriber(this._state);
                break;
            case 'SEND_MESSAGE':
                const newMessage = {
                    id: 0,
                    text: this._state.dialogsPage.textAreaText
                };
                this._state.dialogsPage.messagesData.push(newMessage);
                this._state.dialogsPage.textAreaText = '';
                this._callSubscriber(this._state);
        }
    }
}

window.store = store;
export default store;
