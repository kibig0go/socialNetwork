import {api} from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

export const headerReducer = (state = initialState, action) => {
    // console.log(state)
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case 'SET_IS_FETCHING':
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId, email, login) => {
    console.log('fff')
    return {type: SET_USER_DATA, data: {userId, email, login}}
}

export const setIsFetching = (isFetching) => {
    return {type: 'SET_IS_FETCHING', isFetching}
}


export const me = () => (dispatch) => {
    setIsFetching(true);
    api.isLoggedIn()
        .then(data => {
            if (data.resultCode === 0) {
                // debugger
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login));
                // console.log('sss')
            }
            setIsFetching(false);
        })
}