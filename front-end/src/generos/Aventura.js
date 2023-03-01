import React from "react";
import '../estilos/generos.css'

const Aventura = () => {
  return (
    <div className="container">
      
      <div className="row">
        <div className="col">
        
          <h3>Accion y Aventura</h3>  
          <div id="carouselExampleDark" class="carousel  slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">
            
              <div class="carousel-item active" data-bs-interval="3000">
                <img src="/generos/aventura2.jpg" class="d-block w-100" alt="Spider-Man" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>Spider-Man: Miles Morales</h5>
                  <p>El adolescente Miles Morales se va haciendo a su nuevo hogar mientras sigue los pasos de su mentor Peter Parker como el nuevo Spider-Man.</p>
                </div>
              </div>
              <div class="carousel-item " data-bs-interval="3000">
                <img src="/generos/sekiro.png" class="d-block w-100" alt="SEKIRO" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>SEKIRO</h5>
                  <p>El juego sigue a un shinobi del Período Sengoku, conocido como Lobo, que intenta vengarse de un clan de samuráis que atacó y secuestró a su maestro.</p>
                </div>
              </div>
              <div class="carousel-item ">
                <img src="/generos/GOD.png" class="d-block w-100" alt="god of war" />
                <div class="carousel-caption d-none d-md-block">
                  <h5>GOD OF WAR:RAGNAROK</h5>
                  <p>El Fimbulvetr está llegando a su fin y se profetiza que este dará paso al temido Ragnarök.</p>
                </div>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
              data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
              data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>

          <div class="clearfix">
            <h5>Definicion</h5>
            <img src="/generos/aventura-accion.png" class="col-md-6 float-md-end mb-3 ms-md-3" alt="img" />
            <p>
              Es un género de videojuegos que combina elementos del género aventura con elementos del género
              acción, especialmente elementos importantes como los puzles. El género existe en gran medida
              para distinguir este tipo de videojuegos de los videojuegos de aventura o de los videojuegos de
              rol.
            </p>
            <p>
              Algunos ven los videojuegos de acción como un género puro, y a los videojuegos de
              acción y aventura como videojuegos de acción que incluyen solución de problemas situacionales.
            </p>
            <h5>Jugabilidad   </h5>
            <p>
              Los videojuegos de acción y aventura mantienen un ritmo más veloz que los videojuegos de
              aventura, e incluyen retos tanto físicos como conceptuales. A pesar de que se necesitan acciones
              que activen los reflejos (a menudo relacionadas con el combate o el evitar de este), la
              jugabilidad respeta algunos conceptos del género aventura (recolección de objetos, exploración
              del entorno e interacción con el mismo, solución de acertijos). Si bien los controles son al
              estilo arcade (movimiento del personaje, pocos comandos de acción) hay un objetivo final más
              allá del alto puntaje. Este tipo de videojuegos a veces son muy similares con los videojuegos de
              rol.
            </p>

            <p>
              Son distintos de las aventuras gráficas, las cuales a veces tienen personajes centrales con un
              movimiento libre, pero además poseen mayor variedad de comandos y menor o nula cantidad de
              elementos de los videojuegos árcade y también son distintos de las aventuras conversacionales,
              caracterizadas por tener una gran cantidad de comandos introducidos por el usuario mediante un
              complejo analizador de textos y no tener un personaje con movimiento libre. Si bien todos estos
              géneros comparten dinámicas generales de la jugabilidad, los videojuegos de acción y aventura
              varían mucho en el diseño de sus vistas, que incluyen vista aérea, desplazamiento lateral,
              primera persona, tercera persona, por encima del hombro y vista .
            </p>
            <img src="/generos/accion.jpg" class="col-md-6 float-md-start mb-3 ms-md-3" alt="img" />
            <h5>Subgeneros</h5>
            <p>
              Los videojuegos de acción y aventura son difíciles de definir, sin embargo, se pueden
              diferenciar varios subgéneros. Algunos de los subgéneros más populares son:
            </p>
            <ol>
              <li ><i class="fa-solid fa-gamepad"></i>  Survival horror, como las series Project Zero, Resident Evil, Silent Hill, entre otras.
                Estos hacen énfasis en la administración de recursos en el contexto de un juego de terror.6
              </li>
              <li ><i class="fa-solid fa-gamepad"></i>  Videojuegos de plataforma de aventura, como Metroid y Castlevania: Symphony of the Night,
                que priorizan tanto la exploración como la solución de acertijos, pero también presentan
                características tradicionales de los videojuegos de plataforma. A estos videojuegos también
                se los conoce como videojuegos "Castleroid" o "Metroidvania".
              </li>
              <li ><i class="fa-solid fa-gamepad"></i>  Videojuegos de rol de acción, como las series Kingdom Hearts y Baldur's Gate: Dark Alliance
                y los videojuegos Secret of Mana y Landstalker.
              </li>
              <li ><i class="fa-solid fa-gamepad"></i>  Videojuegos de plataformas isométricos, a menudo asociados con el ZX Spectrum, como Knight
                Lore y Head Over Heels. Estos videojuegos presentan entornos completamente explorables con
                una jugabilidad en 3 dimensiones, y gráficos bidimensionales usando una perspectiva
                isométrica. </li>
              <li><i class="fa-solid fa-gamepad"></i>  Videojuegos de acción y aventura en primera persona, como Metroid Prime y Mirror's Edge, que
                combinan disparos en primera persona con elementos de los videojuegos de aventura. Suelen
                tener menos acción que un videojuego de disparos y una trama compleja.
              </li>
            </ol>


          </div>
        </div>
      </div>

    </div>
  )
}

export default Aventura;