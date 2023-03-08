import React from "react";
import {Navigate} from "react-router-dom";
import {connect} from "react-redux";
import Preloader from "../components/common/Preloader/Preloader";

const mapStateToPropsForRedirect = (state) => {
    return {
        isAuth: state.auth.isAuth,
        isFetching: state.auth.isFetching
    }
}
export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {

        render() {
            // debugger
            // console.log(this.props)
            // alert(this.props.isAuth)
            // if (this.props.isFetching) return <Preloader/>
            if (!this.props.isAuth) return <Navigate to='/login'/>
            return <Component {...this.props}/>
            // if (this.props.isAuth) return <Navigate to={'profile'} />
        }
    }
    // debugger

    RedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return RedirectComponent;
}