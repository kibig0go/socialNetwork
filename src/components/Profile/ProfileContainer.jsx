import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUser} from "../../redux/reducer/profile_reducer";
import {useParams} from 'react-router-dom';
import {toggleToggleIsFetching} from "../../redux/reducer/users_reducer";
import {api} from "../../api/api";

export function withRouter(Children) {
    return (props) => {

        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        console.log('mount')
        // debugger
        let userId = this.props.match.params.userId
        if (this.props.match.params.userId === undefined) {
            userId = 2
        }
        this.props.toggleIsFetching(true)
        api.getProfile(userId)
            .then(data => {
                // console.log(response);
                this.props.toggleIsFetching(false)
                this.props.setUser(data)
            })
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
        isFetching: state.profilePage.isFetching
    }
}

const ProfileURLContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {
    setUser: setUser,
    toggleIsFetching: toggleToggleIsFetching,
})(ProfileURLContainer)