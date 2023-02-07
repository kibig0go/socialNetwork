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
    addPost() {
        const newPost = {
            id: 3,
            text: this._state.profilePage.textAreaNewText,
            likesCount: 0
        }
        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.textAreaNewText = '';
        this._callSubscriber(this._state);
    },
    handleTextAreaChange(newText) {
        this._state.profilePage.textAreaNewText = newText;
        this._callSubscriber(this._state);
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },

}

window.store = store;
export default store;