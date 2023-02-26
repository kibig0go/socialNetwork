import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {me, setAuthUserData} from "../../redux/reducer/header_reducer";
import {api} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.me()
    }

    render() {
        // debugger
        return (
            <Header {...this.props}/>
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default connect(mapStateToProps, {
    setAuthUserData,
    me
})(HeaderContainer)