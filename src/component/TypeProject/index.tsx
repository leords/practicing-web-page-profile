import React from "react";

import interno from "../../assets/interno.png";
import externo from "../../assets/externo.png";

import styles from "./styles.module.scss";

export function TypeProject() {
    return(
        <div className={styles.container}>

            <div className={styles.containerProjectTypes}>
                <div className={styles.containerTitle}>
                    <h1>Projetos</h1>
                </div>
                <div className={styles.imageContainer}>

                    <div className={styles.image}>
                        <img src={interno} alt="Projeto render interno" />
                        <p>Projetos Internos</p>
                    </div>

                    <div className={styles.image}>
                        <img src={externo} alt="Projeto render externo" />
                        <p>Projetos Externos</p>
                    </div>

                </div>
            </div>
        </div>
    )
}