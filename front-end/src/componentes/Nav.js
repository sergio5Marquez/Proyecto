import React from "react";
import '../comp-estilos/nav.css'

import { NavLink,useLocation} from "react-router-dom";

const Nav=()=>{

    // const location = useLocation();
    // if (location.pathname != '/'){
    //     return
    // }

    return(
        <nav>
            <div className="containerGenero">
                <div className="genero"> 

                    <NavLink to='aventura' className={({isActive})=>isActive ? 'activo ': undefined}>  
                        <h5>Aventura-Accion</h5>
                    </NavLink>

                </div>
                <div className="genero">

                    <NavLink to='lucha' className={({isActive})=>isActive ? 'activo ': undefined}>  
                        <h5>Lucha</h5>
                    </NavLink>

                </div>
                <div className="genero">

                    <NavLink to='rol' className={({isActive})=>isActive ? 'activo ': undefined}>  
                        <h5>Rol</h5>
                    </NavLink>
                    
                </div>
                <div className="genero">

                    <NavLink to='estrategia' className={({isActive})=>isActive ? 'activo ': undefined}>  
                        <h5>Estrategia</h5>
                    </NavLink>
                    
                </div>
            </div>
        </nav>
    )
}

export default Nav;