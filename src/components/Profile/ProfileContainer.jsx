import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {getProfileInfo, setUser} from "../../redux/reducer/profile_reducer";
import {useParams} from 'react-router-dom';
import {toggleIsFetching} from "../../redux/reducer/users_reducer";
import {api} from "../../api/api";

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
    }

    render() {
        return (
            <Profile {...this.props} userData={this.props.userData}/>
        )
    }
}

function mapStateToProps(state) {
    return {
        userData: state.profilePage.userData,
        isFetching: state.profilePage.isFetching,
        me: state.auth.userId
    }
}

const ProfileURLContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUser: setUser,
    toggleIsFetching: toggleIsFetching,
    getProfileInfo
})(ProfileURLContainer)