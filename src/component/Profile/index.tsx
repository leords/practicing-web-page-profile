import React from "react";

import styles from './styles.module.scss'

import profileImage from '../../assets/larissa2.png' 

export function Profile() {
    return(
        <div className={styles.container}>
            <div className={styles.profile}>
                <div className={styles.image}>
                    <img src={profileImage} alt="" className={styles.imgProfile}/>
                </div>

                <div className={styles.description}>
                    <h1>Larissa Stephen Vitt</h1>
                    <p 
                        className={styles.text}>
                            Olá, sou arquiteta e urbanista recém formada e atualmente trabalho como autônoma desenvolvendo projetos de arquitetura e interiores. 
                            E recentemente criei a LV Studio 3D, um studio de renderização para arquitetos, designers e profissionais da área, que tem como objetivo facilitar a rotina de trabalho e destacar a marca do profissional no mercado.
                    </p>
                    <h3>Transformando seus projetos em imagens realistas</h3>            
                </div>
            </div>
        </div>  
    )
}