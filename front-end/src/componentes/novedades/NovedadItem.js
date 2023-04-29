import '../../estilos/novedades.css'
const NovedadItem =(props)=>{
    const {title, subtitle, imagen, body } = props;

    return(

        <div className='novedad_container'>

            <div className="conta">

                <h2 className='novedad_titulo'>{title}</h2>
                <h3 className='novedad_sub'>{subtitle}</h3>
                <img className='novedad_img' src={imagen}/>
                <div className='novedad_cuerpo' dangerouslySetInnerHTML={{ __html: body }} />
                <hr />

            </div>

        </div>
    );
}

export default NovedadItem;