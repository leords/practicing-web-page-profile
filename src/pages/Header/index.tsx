import React from "react";

import styles from './styles.module.scss'

import logo from '../../assets/logo1.png'


export function Header() {
    return(
        <div className={styles.container}>
            <div className={styles.options}>
                <a href="#Home"> Inicio</a>
            </div>
            <div className={styles.options}>
                <a href="#Project"> Serviços</a>
            </div>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>
            <div className={styles.options}>
                <a href="#Profile"> Quem sou</a>
            </div>
            <div className={styles.options}>
                <a href="#Contact"> Contatos</a>
            </div>
        </div>
    )
}