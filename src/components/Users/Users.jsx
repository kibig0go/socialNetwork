import React from "react";
import styles from "./Users.module.css";
import ava from "./../../assets/images/ava.png"
import {NavLink} from "react-router-dom";
import axios from "axios";


const Users = (props) => {
    let pagesNumber = Math.ceil(props.total / props.count);
    pagesNumber = pagesNumber > 20 ? 20 : pagesNumber;
    let pages = [];
    for (let i = 1; i <= pagesNumber; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.pages_number_holder}>
            <div>
                {pages.map((p) => {
                    return <button key={p}
                                   className={`${(p === props.currentPage) && styles.selected} ${styles.pagesButton}`}
                                   onClick={(event) => {
                                       props.onPageChange(p);
                                   }}>{p}</button>
                })}
            </div>
            <div className={styles.users__holder}>
                {
                    props.users.map(u => (
                        <div key={u.id} className={styles.user__holder}>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img src={u.photos.small || ava} className={styles.user__avatar}/>
                                </NavLink>
                            </div>
                            <div className={styles.name__holder}>
                                {u.name}
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            'API-KEY': '8f36c27d-c62b-4873-a4aa-af81d0e7d3b3'
                                        })
                                            .then(response => {
                                                // debugger
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id);

                                                }
                                            })

                                    }} className={styles.unfollowButton}>Unfollow</button> :
                                    <button onClick={() => {
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                            withCredentials: true,
                                            'API-KEY': '8f36c27d-c62b-4873-a4aa-af81d0e7d3b3'
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(u.id);
                                                }
                                            })
                                    }} className={styles.followButton}>Follow</button>}
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}


export default Users;