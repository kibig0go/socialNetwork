import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAc} from "../../redux/reducer/users_reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        folllow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAc(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;