import '../estilos/jefes.css'

const PropJefes = ({titulo,img,texto,Nimg}) => {
    return (
        <div className="cajaSecc">
            <h5> {titulo}</h5>

            {/* <img src="/secciones/boos1.jpg" height="250px" alt="img" /> */}
            
            <img src={`/secciones/${img}`} height="250px" alt={Nimg} />

            <div className="pantalla1000">
                <h5>{titulo}</h5>
                <p>{texto}</p>
            </div>

        </div>
    )
}

export default PropJefes;