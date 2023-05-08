import React from "react";
import { useState } from "react";
import axios from 'axios';

const Usuario =(props)=>{

    const initialForm = {
        nombre:'',
        email:'',
        telefono:'',
        mensaje:''
    }
    const [sending, setSending]= useState(false);
    const [msg,setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldFata => ({
            ...oldFata,
            [name]:value//forma dinamica
        }));
    }
    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg( response.data.message);
        if (response.data.error === false){
            setFormData(initialForm)
        }
    }















    return(
        <div class=" navbar-brad text-white   fw-semibold fs-4" > 
                    <div> <i class="user fa-solid fa-comment" data-bs-toggle="modal" data-bs-target="#staticBackdrop"></i>
                    </div>
                    
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                        aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Escriba un comentario</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="close"></button>
                                </div>
                                <div class="modal-body">
            
                                    <form class="row g-3" action="/contacto" method="post" onSubmit={handleSubmit} >

                                        <div class="col-md-12">
            
                                            <input type="text" placeholder="Nombre" name="nombre" value={formData.nombre} onChange={handleChange}  class="form-control"
                                                id="inputEmail4" />
                                        </div>

                                        <div class="col-md-12">
            
                                            <input type="email" placeholder="correo electronico @" name="email" value={formData.email} onChange={handleChange} class="form-control"
                                                id="inputEmail4" />
                                        </div>
                                        <div class="col-md-12">
            
                                            <input type="text" placeholder="Numero telefonio" name="telefono" value={formData.telefono} onChange={handleChange}  class="form-control"
                                                id="inputPassword4" />
                                        </div>
                                        <div class="col-md-12">
            
                                            <label for="">Comentario</label>
                                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange} rows="5"  class="form-control"></textarea>
                                            
                                        </div>

                                        
                                        {sending ? <p>Enviando...</p> : null}
                                        {msg ? <p>{msg}</p>:null}

                                        <p className="centrar"><input type="submit" class="btn btn-secondary" value="Enviar"/> </p>

                                    </form>

            
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                    {/* <button type="button" class="btn btn-secondary">Enviar</button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    )
}

export default Usuario;