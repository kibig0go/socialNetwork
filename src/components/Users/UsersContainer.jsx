import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow,
    setCurrentPage,
    setTotal,
    setUsers,
    toggleToggleIsFetching,
    unfollow
} from "../../redux/reducer/users_reducer";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";


class UsersApiContainer extends React.Component {

    componentDidMount() {
        // alert('did mount');
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.count}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                // console.log(response);
                this.props.setUsers(response.data.items);
                this.props.setTotal(response.data.totalCount)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.count}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.toggleIsFetching(false)
                // console.log(response);
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users} total={this.props.total} count={this.props.count}
                       currentPage={this.props.currentPage} onPageChange={this.onPageChange}
                       unfollow={this.props.unfollow} follow={this.props.follow}/>
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow: follow,
    unfollow: unfollow,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setTotal: setTotal,
    toggleIsFetching: toggleToggleIsFetching,
})(UsersApiContainer);