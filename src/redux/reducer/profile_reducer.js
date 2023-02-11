const initialState = {
    postsData: [
        {id: 0, text: `It's my first post`, likesCount: 5},
        {id: 1, text: `It's my second post`, likesCount: 2},
        {id: 2, text: `It's my third post`, likesCount: 4}
    ],
    textAreaNewText: '',
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_POST': {
            const newPost = {
                id: 3,
                text: state.textAreaNewText,
                likesCount: 0
            }
            return {
                ...state,
                postsData: [
                    ...state.postsData,
                    newPost
                ],
                textAreaNewText: ''
            };
                    }
        case 'HANDLE_TEXT_AREA_CHANGE': {
            return  {
                ...state,
                textAreaNewText: action.text
            };
        }
        default:
            return state;
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