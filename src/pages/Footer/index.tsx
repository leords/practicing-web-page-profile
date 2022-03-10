import React from "react";
import logo from "../../assets/logo-escuro.png";

import styles from './styles.module.scss';


export function Footer() {
    return(
        <div className={styles.container}>
            <div className={styles.containerUser}>
                <div className={styles.logo}>
                    <img src={logo} alt="" />

                </div>
                <div className={styles.infoClient}>
                    <p>Larissa Stephen Vitt</p>
                    <p>Arquitetura de Interiores</p>
                    <p>Canoinhas - Santa Catarina</p>

                </div>
                <div className={styles.menu}>
                    <h1>Menu</h1>
                    <ul>
                        <li>
                            <a href="">Inicio</a>
                            <p></p>
                        </li>
                        <li>
                            <a href="">Serviços</a>
                            <p></p>
                        </li>
                        <li>
                            <a href="">Quem sou</a>
                            <p></p>
                        </li>
                        <li>
                            <a href="">Contatos</a>
                            <p></p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.containerDev}>
                <p>Larissa Stephen Vitt  © Copyright 2022. Todos Os Direitos Reservados Aos Proprietários. Desenvolvido por Leords</p>
            </div>

        </div>
    )
}