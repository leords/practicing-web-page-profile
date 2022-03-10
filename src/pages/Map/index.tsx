import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import styles from './styles.module.scss';

//@react-google-maps/api

export function Map() {

    //posições iniciais para o map ser iniciado!
    const position = {
        lat: -26.1711685,
        lng: -50.3959391
    }

    // contante isLoad recebendo id e key 
        const { isLoaded } = useJsApiLoader({
          id: 'google-map-script',
          googleMapsApiKey: "AIzaSyDF7FEImBD015js9V1YQRKEStyPPPmTLxM"
        })
    

    return(
        <div className={styles.map}>
            {isLoaded ? ( //isLoad foi carregado?
                <GoogleMap
                    mapContainerStyle={{width:'100%', height:'100%'}}
                    center={position}
                    zoom={20}                   
                >
                    <Marker 
                        position={position} // Criando o marcados no mapa com as posições indicadas!

                    />
                   
                </GoogleMap>
            ) : ( 
            < ></> 
            )}
        </div>
    );
}