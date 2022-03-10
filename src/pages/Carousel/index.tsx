import React from "react";

import styles from "./styles.module.scss"

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import render1 from '../../assets/Carousel/render1.png'
import render2 from '../../assets/Carousel/render2.png'
import render3 from '../../assets/Carousel/render3.png'
import render4 from '../../assets/Carousel/render4.png'

//npmjs.com/package/react-responsive-carousel

export function CarouselItem() {
    return(
        <div className={styles.container}>
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                showThumbs={false}
            >
                <div className={styles.renderItem}>
                    <div className={styles.legendItem}>
                    <p>Varanda Externa</p>
                    </div>
                    <img src={render1} alt="Projeto Renderizado 1" />
                </div>

                <div className={styles.renderItem}>
                    <div className={styles.legendItem}>
                        <p>Quarto Casal</p>
                    </div>
                    <img src={render2} alt="Projeto Renderizado 2" />
                </div>

                <div className={styles.renderItem}>
                    <div className={styles.legendItem}>
                        <p>Cozinha planejada</p>
                    </div>
                    <img src={render3} alt="Projeto Renderizado 3" />
                </div>
            </Carousel>
        </div>
    )
}