import React from "react";

import '../comp-estilos/header.css'



const Header=()=>{
    return(
           
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top">


                <div className="container-fluid ">


                    <div class=" navbar-brad text-white   fw-semibold fs-4" >
                        <div> <i class=" user fa-solid fa-circle-user" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                        </div>
                    
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                            aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Iniciar Sesion </h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                                    </div>
                                    <div class="modal-body">
                
                                        <form class="row g-3">
                                            <div class="col-md-12">
                
                                                <input type="email" placeholder="correo electronico @" class="form-control"
                                                    id="inputEmail4"/>
                                            </div>
                                            <div class="col-md-12">
                
                                                <input type="password" placeholder="********" class="form-control"
                                                    id="inputPassword4"/>
                                            </div>
                
                                            <div class="col-12">
                                                <button type="submit" class="btn btn-secondary">Iniciar sesion</button>
                                            </div>
                                            <div class="col-12">
                                                <button type="submit" class="btn btn-secondary">Registrate</button>
                                            </div>
                                        </form>
                
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                        <button type="button" class="btn btn-secondary">¿Olvidaste tu contraseña?</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>               

                    <div class="logo   align-items-center ">
                        <img class="mando" src="/logo.png" alt="logo"/>
                        <h3>Game play</h3>
                        
                    </div>
                
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <section class="offcanvas offcanvas-start bg-dark" id="menuLateral" tabindex="-1">
                        <div class="offcanvas-header" data-bs-theme="dark">
                            <h5 class="offcanvas-title ">Emprinnos</h5>
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