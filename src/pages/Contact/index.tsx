import React from "react";
import {Map} from '../Map/index'

import styles from './styles.module.scss'

export function Contact() {

    return(
        <div className={styles.container} >
            <div className={styles.map}>
               <Map />
            </div>
            <div className={styles.info}>
                <div className={styles.information}>
                    <h1>Entre em Contato</h1>
                    <p>R. Roberto Elke, 237 - Centro</p>
                    <p>89460-000 - Canoinhas - Santa Catarina</p>
                    <p>Horário de atendimento de segunda a sexta</p>
                    <p>larissa.vitt@hotmail.com</p>
                    <p>(47) 98911-8694</p>
                </div>
                <div className={styles.icones}>

                </div>
            </div>

        </div>
    )
}