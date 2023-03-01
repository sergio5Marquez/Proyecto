import React from "react";

const Usuario =()=>{
    return(
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
                                                id="inputEmail4" />
                                        </div>
                                        <div class="col-md-12">
            
                                            <input type="password" placeholder="********" class="form-control"
                                                id="inputPassword4" />
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
    )
}

export default Usuario;