import React from "react";
import preloader from "../../../assets/images/hug.gif";
import styles from './Preloader.module.css'

const Preloader = (props) => {
    return (
        <div>
            <img src={preloader} />
        </div>
    )
}

export default Preloader;