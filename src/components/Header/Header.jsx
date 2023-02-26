import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

function Header(props) {
    // debugger
    return (
        <header className={s.header}>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png' />

            <div className={s.auth__wrapper}>
                {props.isAuth ? props.login : <NavLink to='/login' className={s.login}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;