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
    ]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW': {
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, isFollowed: true} : u;
                })
            }
        }
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    return u.id === action.userId ? {...u, isFollowed: false} : u;
                })
            }
        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export function followAC(userId) {
    const action = {
        type: 'FOLLOW',
        userId,
    }
    return action;
}

export function unfollowAc(userId) {
    const action = {
        type: 'UNFOLLOW',
        userId
    };
    return action;
}

export function setUsersAC(users) {
    return {
        type: 'SET_USERS',
        users: users
    }
}