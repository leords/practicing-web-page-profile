import { 
    DeviceMobile, 
    EnvelopeSimple, 
    MapPinLine } from "phosphor-react";

import styles from './styles.module.scss'

export function Contact() {

    return(
        <div className={styles.container} >
                <div className={styles.titleContainer}>
                    <h1>Entre em Contato</h1>
                </div>
                <div className={styles.containerLogoSocialNetworking}>
                    <div className={styles.containerDeviceContact}>
                        <DeviceMobile 
                            size={28} 
                        />
                        <div className={styles.informationForLogo}>
                            <p>47 - 98412-6073 </p>
                            <p>47 - 3622-4652</p>
                        </div>
                    </div>
                    <div className={styles.containerEmailContact}>
                        <EnvelopeSimple 
                            size={28} 
                        />
                        <div className={styles.informationForLogo}>
                            <p>47 - 98412-6073 </p>
                            <p>47 - 3622-4652 </p>
                        </div>
                    </div>
                    <div className={styles.containerMapContact}>
                        <MapPinLine 
                            size={28}
                        />
                        <div className={styles.informationForLogo}>
                            <p>47 - 98412-6073 </p>
                            <p>47 - 3622-4652</p>
                        </div>
                    </div>
                </div>

                <form 
                    action="https://formsubmit.co/leo.ro.drigues@hotmail.com" 
                    method="POST"
                    className={styles.containerForm}
                >
                    <h1>Nos envie uma mensagem!</h1>
                    <input 
                        type="hidden" 
                        name="_autoresponse" 
                        value="Recebemos sua mensagem, agradeçemos o contato e logo entraremos em contato!"
                    />
                    <input 
                        type="hidden"
                        name="_captcha"
                        value="false" 
                    />
                    <div className={styles.containerSubmitEmail}>
                        <input type="text" name="name" placeholder="Nome" />
                        <input type="email" name="email" placeholder="Email" />
                        <input type="text" name="name" placeholder="Telefone" />
                        <textarea name="message" placeholder="Mensagem"></textarea>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
        </div>
    )
}