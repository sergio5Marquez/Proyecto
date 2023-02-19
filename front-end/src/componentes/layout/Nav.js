const Nav =(props)=>{
    return(
        
        <nav className="containerGenero" id="genero">
            <form action="">
                <div className="genero">
                    <a href="aventura.html">
                        <h5>Aventura-Accion</h5>
                    </a>
                </div>
                <div className="genero">
                    <a href="lucha.html">
                        <h5>Lucha</h5>
                    </a>
                </div>
                <div className="genero">
                    <a href="rol.html">
                        <h5>Rol</h5>
                    </a>
                </div>
                <div className="genero">
                    <a href="estrategia.html">
                        <h5>Estrategia</h5>
                    </a>
                </div>
            </form>
        </nav>
    );
}

export default Nav;