import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotal,
    setUsers, toggleFollowingInProgress,
    toggleToggleIsFetching,
    unfollow
} from "../../redux/reducer/users_reducer";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import {api} from "../../api/api";


class UsersApiContainer extends React.Component {

    componentDidMount() {
        console.log('mount')
        this.props.toggleIsFetching(true)
        api.getUsers(this.props.currentPage, this.props.count)
            .then(data => {
                this.props.toggleIsFetching(false)
                // console.log(response);
                this.props.setUsers(data.items);
                this.props.setTotal(data.totalCount)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        api.getUsers(pageNumber, this.props.count)
            .then(data => {
                this.props.toggleIsFetching(false)
                // console.log(response);
                this.props.setUsers(data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users} total={this.props.total} count={this.props.count}
                       currentPage={this.props.currentPage} onPageChange={this.onPageChange}
                       unfollow={this.props.unfollow} follow={this.props.follow} toggleFollowing={this.props.toggleFollowing} followingInProgress={this.props.followingInProgress}/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        total: state.usersPage.total,
        count: state.usersPage.count,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setTotal: setTotal,
    toggleIsFetching: toggleToggleIsFetching,
    toggleFollowing: toggleFollowingInProgress
})(UsersApiContainer);