import React from "react";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {connect} from "react-redux";
import state from "../../redux/state";
import ProfileContainer from "../Profile/ProfileContainer";
import {Navigate} from "react-router-dom";

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

const Login = (props) => {
    console.log(props)

    if (props.isAuth) {
        return <Navigate to='/profile'/>
    }

    return (
        <>
            {/*{props.isAuth ? <ProfileContainer  /> : <h1>Login</h1>} //parasha*/}
            <h1>Login</h1>
        </>

    )
}

export default compose(connect(mapStateToProps))(Login);