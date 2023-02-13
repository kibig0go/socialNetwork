import React from "react";
import styles from "./Users.module.css";
import ava from "./../../assets/images/ava.png"


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
                                <img src={u.photos.small || ava} className={styles.user__avatar} alt=""/>
                            </div>
                            <div className={styles.name__holder}>
                                {u.name}
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {
                                        props.unfollow(u.id)
                                    }} className={styles.unfollowButton}>Unfollow</button> :
                                    <button onClick={() => {
                                        props.follow(u.id)
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