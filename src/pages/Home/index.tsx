import React from "react";

import styles from './styles.module.scss'

import { CarouselItem } from "../Carousel";
import { Header } from "../Header";
import { Profile } from "../Profile";
import { Contact } from "../Contact";
import { Footer } from "../Footer";
import { TypeProject } from "../TypeProject";
import { TopAnchor } from "../../component/TopAnchor";


export function Home() {
    return (
        <div className={styles.container}>
            <div id="Home">
                <Header />
            </div>
            <div>
                <CarouselItem />
            </div>
            <div id="Profile" className={styles.profile}>
                <Profile />
            </div>
            <div className={styles.topAnchor}>
                <TopAnchor />
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