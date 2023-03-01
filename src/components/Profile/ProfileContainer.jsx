import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfileInfo, getUserStatus, setUser, updateStatus} from "../../redux/reducer/profile_reducer";
import {Navigate, useParams} from 'react-router-dom';
import {toggleIsFetching} from "../../redux/reducer/users_reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export function withRouter(Children) {
    return (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!this.props.match.params.userId) {
            userId = this.props.me ? this.props.me : 2;
        }
        this.props.getProfileInfo(userId);
        this.props.getUserStatus(userId)
    }

    render() {
        // alert(this.props.isAuth)
        // console.log(this.props)
        return (
            <Profile {...this.props} userData={this.props.userData} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }
}

// const AuthRedirectContainer = withAuthRedirect(ProfileContainer)
//
// const ProfileURLContainer = withRouter(AuthRedirectContainer);

function mapStateToProps(state) {
    return {
        userData: state.profilePage.userData,
        isFetching: state.profilePage.isFetching,
        me: state.auth.userId,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}


// export default connect(mapStateToProps, {
//     setUser: setUser,
//     toggleIsFetching: toggleIsFetching,
//     getProfileInfo
// })(ProfileURLContainer)

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        setUser: setUser,
        toggleIsFetching: toggleIsFetching,
        getProfileInfo,
        getUserStatus,
        updateStatus
    }),
    withRouter,
)(ProfileContainer)