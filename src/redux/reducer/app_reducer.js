import {api, loginApi} from "../../api/api";
import {me, setIsFetching} from "./header_reducer";

const SET_IS_INITIALIZED = 'SET_IS_INITIALIZED';

const initialState = {
    isInitialized: false
}

export const appReducer = (state = initialState, action) => {
    // console.log(state)
    switch (action.type) {
        case SET_IS_INITIALIZED:
            return {
                ...state,
                isInitialized: true,
            }
        default:
            return state
    }
}

export const setIsInitialized = () => {
    return {type: SET_IS_INITIALIZED}
}

export const initializeApp = () => (dispatch) => {
    const promise = dispatch(me());
    // debugger
    Promise.all([promise])
        .then(() => {
                dispatch(setIsInitialized())
            }
        )
}

