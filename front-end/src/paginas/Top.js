import React from "react";
import '../estilos/top.css'

// import {PropCasilla,PropJefes} from "./PropCasilla";
import PropCasilla from "./PropCasilla";

const Top =()=>{

    return(
        <div>    
            <div className="cartel2">
                <div className="cartelTitulo">
                    <h3>Top de los mejores videojuegos de los ultimos 10 años</h3>
                </div>
            </div>
            <div className="aclaracion">
                <h5>Este top esta basado a los ganadores del juego del año por el festival The Game Awards (su primera edicion fue en 5 de diciembre del 2014) </h5>
            </div>
            <section className="topS">
                <PropCasilla 
                titulo="Elden Ring hola"
                img="eldenRing"
                Nimg="Elden ring"
                año="Año: 2022"
                genero="Genero: Rol de acción"
                premio="
                El juego posee el título a Juego del año del 2022 según "
                Lmarcada="The Game Awards "
                texto="Elden Ring es un videojuego de rol de acción en tercera persona, con una jugabilidad centrada en el combate y la exploración. Presenta características similares de otros juegos desarrollados por FromSoftware, tales como la saga Dark Souls, Bloodborne y Sekiro: Shadows Die Twice. Localizado en un mundo abierto, el jugador puede explorar libremente las Tierras Intermedias y sus seis áreas principales." />
                <hr />
                <PropCasilla 
                titulo="It Takes Two"
                img="it takes two"
                Nimg="It take two"
                año="Año: 2021"
                genero="Genero: acción-aventura y videojuego de plataformas"
                premio="El juego posee el título a Juego del año del 2021 según "
                Lmarcada="The Game Awards "
                texto="It Takes Two es un videojuego de acción y aventuras con elementos de juegos de plataformas. Está diseñado específicamente para el modo multijugador cooperativo en pantalla dividida, lo que significa que debe jugarse con otro jugador a través del juego local o en línea. El juego presenta una gran cantidad de mecánicas de varios géneros de videojuegos" />
                <hr />
                <PropCasilla 
                titulo="The Last of Us Part II"
                img="the last"
                Nimg="The Last of Us Part II"
                año="Año: 2020"
                genero="Genero: Terror, Acción-aventura, Disparos en tercera persona"
                premio="El juego posee el título a Juego del año del 2020 según "
                Lmarcada="The Game Awards "
                texto="La historia transcurre cinco años después de los eventos del primer juego, en esta segunda entrega tomaremos el control de Ellie como la protagonista, la cual emprenderá un largo viaje para lograr su venganza por el asesinato de Joel." />
                <hr />
                <PropCasilla 
                titulo="Sekiro"
                img="sekiro"
                Nimg="sekiro"
                año="Año: 2019"
                genero="Genero: Acción-aventura "
                premio="El juego posee el título a Juego del año del 2019 según "
                Lmarcada="The Game Awards "
                texto="El juego fue lanzado el 22 de marzo de 2019 en las plataformas PlayStation 4, Xbox One y Microsoft Windows.El juego sigue a un shinobi del Período Sengoku, conocido como Lobo, que intenta vengarse de un clan de samuráis que atacó y secuestró a su maestro." />
                <hr />
                <PropCasilla 
                titulo="God of War"
                img="God of War"
                Nimg="god of war 2018"
                año="Año: 2018"
                genero="Genero: Acción-Aventura "
                premio="El juego posee el título a Juego del año del 2018 según "
                Lmarcada="The Game Awards "
                texto="Han pasado años desde que Kratos tomó su venganza contra los Dioses Olímpicos. Habiendo sobrevivido la pelea final contra su padre Zeus, Kratos vive ahora con su joven hijo Atreus en el mundo de los Dioses Nórdicos, una tierra hostil habitada por feroces monstruos y guerreros. Kratos deberá actuar como mentor y protector de su hijo, y tendrá que dominar la ira y enojo que tuvo durante muchos años y atar cabos sueltos." />
                <hr />
                <PropCasilla 
                titulo="The Legend of Zelda: Breath of the Wild"
                img="zelda"
                Nimg="The Legend of Zelda: Breath of the Wild"
                año="Año: 2017"
                genero="Genero: acción-aventura, videojuego de rol y videojuego posapocalíptico"
                premio="El juego posee el título a Juego del año del 2017 según "
                Lmarcada="The Game Awards "
                texto="Link despierta en un mundo postapocalíptico después de estar cien años durmiendo para derrotar a Ganon y salvar al reino de Hyrule. A diferencia de los otros títulos predecesores de la serie, el juego presenta un mundo abierto que le permite al jugador encontrar distintas maneras de completar un objetivo y que la historia pueda ser completada de forma no lineal." />
                <hr />
                <PropCasilla 
                titulo="Overwatch"
                img="overwatch"
                Nimg="Overwatch"
                año="Año: 2016"
                genero="Genero: videojuego de disparos en primera persona"
                premio="El juego posee el título a Juego del año del 2016 según "
                Lmarcada="The Game Awards "
                texto="Es la nueva saga de Blizzard esta vez en forma de multijugador online en primera persona ambientado en un mundo futurista. Habrá muchos personajes distintos y cada uno de ellos hará uso de sus propias armas y amplificadores. Destacar que cada uno de ellos cumplirá un rol diferente dentro del equipo, como Defensa, Tanque, Apoyo y Ataque." />
                <hr />
                <PropCasilla 
                titulo="The Witcher 3: Wild Hunt"
                img="the-witcher-3"
                Nimg="The Witcher 3: Wild Hunt"
                año="Año: 2015"
                genero="Genero: Action-RPG / Mundo abierto / RPG Occidental"
                premio="El juego posee el título a Juego del año del 2015 según "
                Lmarcada="The Game Awards "
                texto="Es un juego de perspectiva en tercera persona, el jugador controla al protagonista Geralt de Rivia, un cazador de monstruos conocido como Lobo Blanco, es un brujo, el cual emprende un largo viaje a través de Los reinos del norte. El jugador lucha contra el peligroso mundo mediante magia y espadas, mientras interactúa con los NPC y completa tanto misiones secundarias como la misión principal de la historia, La cual es encontrar a la hija adoptiva de Geralt, Ciri, y detener la profecía del invierno blanco." />
                <hr />
                <PropCasilla 
                titulo="Dragon Age: Inquisition"
                img="dragon age"
                Nimg="Dragon Age: Inquisition"
                año="Año: 2014"
                genero="Genero: Rol de acción"
                premio="El juego posee el título a Juego del año del 2014 según "
                Lmarcada="The Game Awards "
                texto="Dragon Age: Inquisition tendrá lugar en el continente de Thedas, el mundo fantástico en el que tienen lugar los dos juegos anteriores. El juego cubrirá más territorio que sus predecesores, con un mapa siendo descrito como unas cuatro o cinco veces más grande que Ferelden, el escenario del primer juego de la serie." />
                <hr />
                <PropCasilla 
                titulo="GTA 5"
                img="gta5"
                Nimg="gta 5"
                año="Año: 2013"
                genero="Genero: Acción-aventura, Mundo abierto"
                premio="En esos tiempos no existia los premios The  Game Awards pero es mas que evidente que el mejor videojuego del año fue gta 5"
                Lmarcada="The Game Awards "
                texto="Según Rockstar, el tema central en la historia de GTA V es la búsqueda del todopoderoso dólar. Esta decisión del equipo desarrollador fue sobre la base de la crisis financiera de 2008." />
                <hr />
            </section>    
        </div>
    )
}

export default Top;