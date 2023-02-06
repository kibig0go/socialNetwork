let rerenderEntireTree = () => {}

const state = {
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
}
window.state = state;

export const addPost = () => {
    const newPost = {
        id: 3,
        text: state.profilePage.textAreaNewText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.textAreaNewText = '';
    rerenderEntireTree();
}

export const handleTextAreaChange = (newText) => {
    state.profilePage.textAreaNewText = newText;
    rerenderEntireTree();
}

export const subscriber = (observer) => {
    rerenderEntireTree = observer;
}
export default state;