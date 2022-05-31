import { 
    AddressBook, 
    ClipboardText, 
    FacebookLogo, 
    House, 
    InstagramLogo, 
    LinkedinLogo, 
    UserSquare } 
    from "phosphor-react";

import logo from "../../assets/logo-escuro.png";

import styles from './styles.module.scss';

export function Footer() {
    return(
        <div className={styles.container}>
            <div className={styles.containerProfessionalInformation}>

                <div className={styles.profissionalLogo}>
                    <img src={logo} alt="" />
                </div>

                <div className={styles.professionalDescriptions}>
                    <p className={styles.nameProfessional}>Larissa Stephen Vitt</p>
                    <div className={styles.containerSocialNetworks}>
                        <a 
                            href="https://www.instagram.com/lvstudio.3d/"
                            target={'_blank'}
                        >
                            <InstagramLogo 
                                size={32}
                                color={'white'}
                                weight={"regular"} 
                            />
                        </a>
                        <a 
                            href="https://www.facebook.com/larissa.stephenvitt"
                            target={'_blank'}
                        >
                            <FacebookLogo 
                                size={32}
                                color={'white'}
                                weight={"regular"} 
                            />
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/larissavitt-892299216"
                            target={'_blank'}
                        >
                            <LinkedinLogo 
                                size={32}
                                color={'white'}
                                weight={"regular"} 
                            />
                        </a>
                    </div>
                </div>

                <div className={styles.menu}>
                    <h1>Menu</h1>
                    <ul>
                        <li>
                            <div className={styles.itemMenu}>
                                <House 
                                    size={26}
                                    color={'white'}
                                    weight={"thin"} 
                                />
                                <a href="">Inicio</a>
                            </div>
                        </li>
                        <li>
                            <div className={styles.itemMenu}>
                                <ClipboardText 
                                    size={26}
                                    color={'white'}
                                    weight={"thin"} 
                                />
                                <a href="">Projetos</a>
                            </div>
                        </li>
                        <li>
                            <div className={styles.itemMenu}>
                                <UserSquare 
                                    size={26}
                                    color={'white'}
                                    weight={"thin"} 
                                />
                                <a href="">Quem sou</a>
                            </div>
                        </li>
                        <li>
                            <div className={styles.itemMenu}>
                                <AddressBook 
                                    size={26}
                                    color={'white'}
                                    weight={"thin"} 
                                />
                                <a href="">Contatos</a>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>

            <div className={styles.developmentDescriptions}>
                <p>Larissa Stephen Vitt  © Copyright 2022. Todos Os Direitos Reservados Aos Proprietários. Desenvolvido por Leords</p>
            </div>

        </div>
    )
}