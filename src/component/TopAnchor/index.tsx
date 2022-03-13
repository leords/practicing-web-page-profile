import React from "react";

import styles from "./styles.module.scss";

import {FaArrowCircleUp} from 'react-icons/fa'

export function TopAnchor() {
    return(
        <div className={styles.container}>  
             <a href="#Home">
                <FaArrowCircleUp 
                    size={50}
                    color="#494949"
                />
            </a>
        </div>
    )
}