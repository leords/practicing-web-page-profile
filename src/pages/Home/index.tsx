import React from "react";

import styles from './styles.module.scss'

import logo from '../../assets/logo-escuro.png';

import { CarouselItem } from "../Carousel";
import { Header } from "../Header";
import { Profile } from "../Profile";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { TypeProject } from "../TypeProject";


export function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.carousel}>
                <CarouselItem />
            </div>
            <div className={styles.profile}>
                <Profile />
            </div>
            <div>
                <TypeProject />
            </div>
            <div className={styles.containerContact}>
                <Contact />
            </div>
            <div className={styles.separator}>
                <Footer />
            </div>
        </div>
    )
}