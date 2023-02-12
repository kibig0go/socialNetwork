import React from "react";
import axios from "axios";

const Users = (props) => {
    // axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
    //     console.log(response)
    // })
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: '1',
                fullName: 'Boris Kitaev',
                isFollowed: true,
                status: `I'm a boss`,
                country: 'Russia',
                city: 'Moscow'
            },
            {
                id: '2',
                fullName: 'Andrew Kuler',
                isFollowed: false,
                status: `I'm a looser`,
                country: 'Russia',
                city: 'Moscow'
            },
            {
                id: '3',
                fullName: 'Igor Caene',
                isFollowed: true,
                status: `I like porshe`,
                country: 'Russia',
                city: 'Moscow'
            },
        ])
    }

    // debugger
    return (
        <div>
            {
                props.users.map( u => (
                    <div key={u.id}>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.isFollowed ?
                                <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button> :
                                <button onClick={() => {
                                    props.folllow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Users;