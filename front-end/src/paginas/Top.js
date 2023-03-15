import React from "react";
import '../estilos/top.css'

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
                titulo="hola"
                img=""
                año="32kl"
                genero=""
                premio=""
                Lmarcada=""
                texto="" />
                <hr />

            </section>
            



    
        </div>
    )
}

export default Top;