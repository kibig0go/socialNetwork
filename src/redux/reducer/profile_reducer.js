export const profileReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_POST':
            const newPost = {
                id: 3,
                text: state.textAreaNewText,
                likesCount: 0
            }
            state.postsData.push(newPost);
            state.textAreaNewText = '';
            return state;
        case 'HANDLE_TEXT_AREA_CHANGE':
            state.textAreaNewText = action.text;
            return state;
        default: return state;
    }

}

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