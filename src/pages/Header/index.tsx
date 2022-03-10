import React from "react";

import styles from './styles.module.scss'



import logo from '../../assets/logo1.png'

export function Header() {
    return(
        <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.options}>
                    <p>Inicio</p>
                    <p>Serviços</p>
                </div>
                <div className={styles.logo}>
                    <img src={logo} alt="" />
                </div>
                <div className={styles.options}>
                    <p>Quem sou</p>
                    <p>Contatos</p>
                </div>
            </div>
        </div>
    )
}