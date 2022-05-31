import React from "react";

import styles from './styles.module.scss'

import logo from '../../assets/logo1.png'


export function Header() {
    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <img src={logo} alt="" />
            </div>

            <div className={styles.options}>
                    <a href="#Home"> Inicio</a>
                    <a href="#Project"> Serviços</a>
                    <a href="#Profile"> Quem sou</a>
                    <a href="#Contact"> Contatos</a>
            </div>
        </div>
    )
}