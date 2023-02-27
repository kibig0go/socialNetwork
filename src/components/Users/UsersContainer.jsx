import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, getUsers,
    setCurrentPage,
    setTotal,
    setUsers, toggleFollowing,
    toggleIsFetching,
    unfollow
} from "../../redux/reducer/users_reducer";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersApiContainer extends React.Component {

    componentDidMount() {
        console.log('mount')
        this.props.getUsers(this.props.currentPage, this.props.count);

    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.count);
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

const UsersContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow: follow,
        unfollow: unfollow,
        setUsers: setUsers,
        setCurrentPage: setCurrentPage,
        setTotal: setTotal,
        toggleIsFetching: toggleIsFetching,
        toggleFollowing: toggleFollowing,
        getUsers
    })
)(UsersApiContainer)

export default UsersContainer
// export default withAuthRedirect(connect(mapStateToProps, {
//     follow: follow,
//     unfollow: unfollow,
//     setUsers: setUsers,
//     setCurrentPage: setCurrentPage,
//     setTotal: setTotal,
//     toggleIsFetching: toggleIsFetching,
//     toggleFollowing: toggleFollowing,
//     getUsers
// })(UsersApiContainer));