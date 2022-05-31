import React from "react";

import styles from './styles.module.scss';

export function Phrase() {
    return(
        <div className={styles.container}>
            <div className={styles.phraseContainer}>
                <h1 className={styles.phrase}>"Arquitetura é um estado de espírito e não uma profissão."</h1>
                <p className={styles.author}>Le Corbusier</p>
            </div>
        </div>
    )
}