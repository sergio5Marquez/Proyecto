import React from "react";

import { NavLink,useLocation } from "react-router-dom";
import '../estilos/secciones.css'

const Secciones = () => {

    const location = useLocation();
    if (location.pathname !== '/'){
        return
    }
    


    return (
        <section className="containerSeccion">

            <div className="seccion">
            <NavLink to='loglos'>
                <h4>Logros y Datos curiosos</h4>
            </NavLink>    
                <p>Un logro, también conocido a veces como un trofeo o un desafío, es una meta definida fuera de los
                    parámetros de un juego.</p>
                <p>El mundo de los videojuegos está repleto de curiosidades, siendo improbable que no te hayas pasado varias
                    por alto.</p>
            </div>

            <div  className="seccion">
                <NavLink to='jefes'>
                <h4>Jefes Dificiles</h4>
                </NavLink>
                <p>Los jefes mas dificiles de los videojuegos que te han puesto a prueba ,y que casi te provocan una
                    deprecion por no poder vencerlos si no fuera por que tu nunca te rendirse como todo campeon </p>
            </div>




            <div className="seccion" >
            <NavLink to='top'>
                <h4>Top de videojuegos del año </h4>
            </NavLink>
                <p>Muchos de nosotros podríamos hacer una larga lista de videojuegos que han patrocinado nuestra infancia,
                    aunque en función de la década, el videojuego de moda será uno u otro: Pacman, Call od Duty, GTA,
                    Pokémon, Tekken o el Fifa, estos son algunos de los juegos que han servido como elemento distractor de
                    muchos jóvenes (y no tan jóvenes) a lo largo de los ultimos 10 años.</p>
            </div>
            



            <div className="seccion">
            <NavLink to='novedades'>
                <h4>Novedades</h4>
            </NavLink>
                <p>Descansa en nuestro pequeño espacio para debatir y dar tu opinion respecto al contenido que te interese
                    ,conoce el pundo de vista de los demas y comparte tu opinion personal, enterate de datos que desconocias
                    pero por soble todo pasatelo bien.
                </p>
            </div>

        </section>
    )
}

export default Secciones