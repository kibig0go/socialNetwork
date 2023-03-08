import {api, loginApi} from "../../api/api";

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

export const setAuthUserData = (userId, email, login, isAuth) => {
    // console.log('fff')
    return {type: SET_USER_DATA, data: {userId, email, login, isAuth}}
}

export const setIsFetching = (isFetching) => {
    return {type: 'SET_IS_FETCHING', isFetching}
}


export const me = () => (dispatch) => {
    setIsFetching(true);
    return api.isLoggedIn()
        .then(data => {
            if (data.resultCode === 0) {
                // debugger
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
                // console.log('sss')
            }
            setIsFetching(false);
        })
}

export const login = (email, password, rememberMe) => (dispatch) => {
    // setIsFetching(true);
    loginApi.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                // debugger
                dispatch(me());
                // console.log('sss')
            }

            // setIsFetching(false);
        })
}

export const logout = () => (dispatch) => {
    loginApi.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
}