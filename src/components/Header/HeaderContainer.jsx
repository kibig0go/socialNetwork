import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {logout, me, setAuthUserData} from "../../redux/reducer/header_reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.me();
        // console.log('запрос')
        // console.log('ddd')
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
    me,
    logout
})(HeaderContainer)