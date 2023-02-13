import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setCurrentPageAC, setTotalAC, setUsersAC, unfollowAc} from "../../redux/reducer/users_reducer";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        total: state.usersPage.total,
        count: state.usersPage.count
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
        setCurrentPage: (number) => {
            dispatch(setCurrentPageAC(number))
        },
        setTotal: (total) => {
            dispatch(setTotalAC(total))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;