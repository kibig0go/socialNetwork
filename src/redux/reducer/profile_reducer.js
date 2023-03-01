import {api, profileApi} from "../../api/api";
import {toggleIsFetching} from "./users_reducer";

const initialState = {
    postsData: [
        {id: 0, text: `It's my first post`, likesCount: 5},
        {id: 1, text: `It's my second post`, likesCount: 2},
        {id: 2, text: `It's my third post`, likesCount: 4}
    ],
    textAreaNewText: '',
    userData: null,
    isFetching: false,
    status: ''
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
            return {
                ...state,
                textAreaNewText: action.text
            };
        }
        case 'SET_PROFILE_DATA':
            return {
                ...state,
                userData: action.userData
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        case 'SET_STATUS':
            return {
                ...state, status: action.status
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

export function setUser(userData) {
    return {
        type: 'SET_PROFILE_DATA',
        userData
    }
}

export function setStatus(status) {
    return {
        type: 'SET_STATUS',
        status
    }
}

export const getProfileInfo = (userId) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    api.getProfile(userId)
        .then(data => {
            // console.log(response);
            dispatch(toggleIsFetching(false));
            dispatch(setUser(data))
        })
}

export const getUserStatus = (userId) => (dispatch) => {
    // dispatch(toggleIsFetching(true));
    profileApi.getStatus(userId)
        .then(status => {
            // console.log(response);
            // dispatch(toggleIsFetching(false));
            dispatch(setStatus(status))
        })
}

export const updateStatus = (status) => (dispatch) => {
    // dispatch(toggleIsFetching(true));
    profileApi.updateStatus(status)
        .then(data => {
            // console.log(response);
            // dispatch(toggleIsFetching(false));
            if (data.resultCode === 0) {
                dispatch(setStatus(status))
            } else {
                console.log('status error')
            }
        })
}