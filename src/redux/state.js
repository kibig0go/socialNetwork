import {profileReducer} from "./reducer/profile_reducer";
import {dialogsReducer} from "./reducer/dialogs_reducer";

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
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    }
}

window.store = store;
export default store;
