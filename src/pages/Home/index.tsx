import React from "react";

import styles from './styles.module.scss'

import { CarouselItem } from "../../component/Carousel";
import { Header } from "../../component/Header";
import { Profile } from "../../component/Profile";
import { Contact } from "../../component/Contact";
import { Footer } from "../../component/Footer";
import { TypeProject } from "../../component/TypeProject";
import { Phrase } from "../../component/Phrase";


import wppLogo from '../../assets/whatsapp.png';


export function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.connectWpp}>
                <a 
                    href="https://api.whatsapp.com/send?phone=5547989118694&text=Ol%C3%A1%2C%20"
                    target={"_blank"}
                >
                    <img src={wppLogo} alt="" />

                </a>
            </div>
            <div id="Home" className={styles.home}>
                <Header />
            </div>
            <div className={styles.carousel}>
                <CarouselItem />
            </div>
            <div>
                <Phrase />
            </div>
            <div id="Profile" className={styles.profile}>
                <Profile />
            </div>
            <div id="Project" className={styles.project}>
                <TypeProject />
            </div>
            <div id="Contact" className={styles.contact}>
                <Contact />
            </div>
            <div >
                <Footer />
            </div>
        </div>
    )
}