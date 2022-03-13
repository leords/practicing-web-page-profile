import React from "react";

import interno from "../../assets/interno.png";
import externo from "../../assets/externo.png";

import styles from "./styles.module.scss";

export function TypeProject() {
    return(
        <div className={styles.container}>
            <h1>PROJETOS</h1>
            <div className={styles.images}>
                <div className={styles.image}>
                    <img src={interno} alt="Projeto render interno" />
                    <p>PROJETOS INTERNOS</p>
                    <div className={styles.visibleLegend}>
                        <h1>PROJETOS INTERNOS</h1>
                    </div>
                </div>
                <div className={styles.image}>
                    <img src={externo} alt="Projeto render externo" />
                    <p>PROJETOS EXTERNOS</p>
                    <div className={styles.visibleLegend}>
                        <h1>PROJETOS EXTERNOS</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}