import React from 'react';

import '../estilos/top.css'

const PropCasilla=({titulo,año,genero,premio,Lmarcada,texto,img,Nimg})=>{
    return(
        <>
            {/* TOPs */}
            <div className="año">
                    <h4>{titulo}</h4>
                    <div className="imgA">
                        <img src={`/secciones/${img}.jpg`} alt={Nimg} />
                        {/* <img src={require(`/secciones/${img}.jpg`)} alt="elden ring" /> */}
                    </div>
                    <div className="detalles">
                        <h6>{año}</h6>
                        <h6>{genero}</h6>
                        <p>{premio} <strong>{Lmarcada}</strong>.</p>
                        <p>{texto}</p>
                    </div>
            </div>


        </>
    )
}


export default PropCasilla;