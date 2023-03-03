import React from "react";

import '../comp-estilos/header.css'
import Usuario from "./Usuario";

import { NavLink } from "react-router-dom";


const Header=()=>{
        const Usu=<Usuario/>
    return(   
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top">


                <div className="container-fluid ">

                    <div>{Usu}</div>

                    <div class="logo   align-items-center ">
                        <img class="mando" src="/logo.png" alt="logo"/>

                        <NavLink to='/'><h3>Game play</h3></NavLink>
                        
                    </div>
                
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <section class="offcanvas offcanvas-start bg-dark" id="menuLateral" tabindex="-1">
                        <div class="offcanvas-header" data-bs-theme="dark">
                            <h5 class="offcanvas-title "><i class="bi bi-steam px-2 fs-2" ></i> Steam </h5>
                            <button class="btn-close " type="button" aria-label="Close" data-bs-dismiss="offcanvas"></button>
                        </div>
                    
                        <div class="offcanvas-body d-flex flex-column justify-content-between px-0">
                            <ul class="navbar-nav fs-5 justify-content-evenly">

                                <div class="orden  d-lg-none align-self-center py-3">
                                    <a href="" class="text-white-50"><i class="bi bi-github 
                                        px-2 text-white fs 2"></i> github</a>
                                    <a href="" class="text-white-50"><i class="bi bi-youtube
                                        px-2 text-white fs 2"></i> youtube</a>
                                    <a href="" class="text-white-50"><i class="bi bi-facebook
                                        px-2 text-white fs 2"></i> facebook </a>
                                    <a href="" class="text-white-50"><i class="bi bi-whatsapp
                                        px-2 text-white fs 2"></i>whatsapp</a>

                                </div>
                        
                            </ul>
                        </div>
                    </section>
                </div>
            </nav>
    )
}

export default Header;