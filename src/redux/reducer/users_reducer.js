const initialState = {
    users: [
        // {
        //     id: '1',
        //     fullName: 'Boris Kitaev',
        //     isFollowed: true,
        //     status: `I'm a boss`,
        //     country: 'Russia',
        //     city: 'Moscow'
        // },
        // {
        //     id: '2',
        //     fullName: 'Andrew Kuler',
        //     isFollowed: false,
        //     status: `I'm a looser`,
        //     country: 'Russia',
        //     city: 'Moscow'
        // },
        // {
        //     id: '3',
        //     fullName: 'Igor Caene',
        //     isFollowed: true,
        //     status: `I like porshe`,
        //     country: 'Russia',
        //     city: 'Moscow'
        // },
    ],
    currentPage: 1,
    count: 10,
    total: 5,
    isFetching: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: true} : u;
                })
            }
        }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, followed: false} : u;
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...action.users]
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.number
            }
        case 'SET_TOTAL':
            return {
                ...state, total: action.total
            }
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state;
    }
}

export function follow(userId) {
    const action = {
        type: 'FOLLOW',
        userId,
    }
    return action;
}

export function unfollow(userId) {
    const action = {
        type: 'UNFOLLOW',
        userId
    };
    return action;
}

export function setUsers(users) {
    return {
        type: 'SET_USERS',
        users: users
    }
}

export function setCurrentPage(number) {
    return {
        type: 'SET_CURRENT_PAGE',
        number
    }
}

export function setTotal(total) {
    return {
        type: 'SET_TOTAL',
        total
    }
}

export function toggleToggleIsFetching(isFetching) {
    return {
        type: 'TOGGLE_IS_FETCHING',
        isFetching
    }
}

