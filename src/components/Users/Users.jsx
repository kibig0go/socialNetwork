import React from "react";
import axios from "axios";
import styles from "./Users.module.css";
import ava from "./../../assets/images/ava.png"

class Users extends React.Component {
    constructor(props) {
        super(props);
        // this.getUsers = this.getUsers.bind(this);
        // alert('new')

    }

    componentDidMount() {
        // alert('did mount');
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`)
            .then(response => {
                console.log(response);
                this.props.setUsers(response.data.items);
                this.props.setTotal(response.data.totalCount)
            })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // alert('updete')
    }

    onPageChange(pageNumber) {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`)
            .then(response => {
                console.log(response);
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        // debugger
        let pagesNumber = Math.ceil(this.props.total / this.props.count);
        pagesNumber = pagesNumber > 20 ? 20 : pagesNumber;
        let pages = [];
        for (let i = 1; i <= pagesNumber; i++) {
            pages.push(i)
        }
        // debugger
        return (
            <div className={styles.pages_number_holder}>
                <div>
                    {pages.map((p) => {
                        return <button
                            className={`${(p === this.props.currentPage) && styles.selected} ${styles.pagesButton}`}
                            onClick={(event) => {
                                this.onPageChange(p);
                            }}>{p}</button>
                    })}
                </div>
                <div className={styles.users__holder}>
                    {
                        this.props.users.map(u => (
                            <div key={u.id} className={styles.user__holder}>
                                <div>
                                    <img src={u.photos.small || ava} className={styles.user__avatar} alt=""/>
                                </div>
                                <div className={styles.name__holder}>
                                    {u.name}
                                </div>
                                <div>
                                    {u.followed ?
                                        <button onClick={() => {
                                            this.props.unfollow(u.id)
                                        }} className={styles.unfollowButton}>Unfollow</button> :
                                        <button onClick={() => {
                                            this.props.folllow(u.id)
                                        }} className={styles.followButton}>Follow</button>}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        )
    }
}

// const Users = (props) => {
//
//
//
//     function getUsers() {
//         if (props.users.length === 0) {
//             axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
//                 console.log(response);
//                 props.setUsers(response.data.items)
//             })
//         }
//     }
//
//     // debugger
//     return (
//         // <div>
//         //     <button onClick={getUsers}>get users</button>
//         //     {
//         //         props.users.map( u => (
//         //             <div key={u.id}>
//         //                 <div>
//         //                     {u.name}
//         //                 </div>
//         //                 <div>
//         //                     {u.followed ?
//         //                         <button onClick={() => {
//         //                             props.unfollow(u.id)
//         //                         }}>Unfollow</button> :
//         //                         <button onClick={() => {
//         //                             props.folllow(u.id)
//         //                         }}>Follow</button>}
//         //                 </div>
//         //             </div>
//         //         ))
//         //     }
//         // </div>
//     )
// }

export default Users;