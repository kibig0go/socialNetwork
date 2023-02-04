import React from "react";
import s from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

function Sidebar() {
    return (
        <div className={s.sidebar}>
            <ul>
                <li className={s.item}>
                    <NavLink to='/profile' className={
                        ({isActive}) => isActive ? s.active : undefined
                    }
                    >Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/messages' className={
                        ({isActive}) => isActive ? s.active : undefined
                    }
                    >Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/feed' className={
                        ({isActive}) => isActive ? s.active : undefined
                    }
                    >News</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/music' className={
                        ({isActive}) => isActive ? s.active : undefined
                    }
                    >Music</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/settings' className={
                        ({isActive}) => isActive ? s.active : undefined
                    }
                    >Settings</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;