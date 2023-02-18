import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUser} from "../../redux/reducer/profile_reducer";
import {useParams} from 'react-router-dom';
import {toggleToggleIsFetching} from "../../redux/reducer/users_reducer";

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
        axios.get(`https://social-network.samuraijs.com/api/1.0//profile/${userId}`)
            .then(response => {
                // console.log(response);
                this.props.toggleIsFetching(false)
                this.props.setUser(response.data)
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