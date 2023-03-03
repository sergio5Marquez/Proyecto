import React from "react";
// import '../estilos/generos.css'

const Lucha = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Lucha</h3>
                    <div id="carouselExampleDark" class="carousel slide" data-bs-ride="carousel">
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
                                <img src="/generos/teking.jpg" class="d-block w-100" alt="teking" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>THE KING OF FIGHTER</h5>
                                    <p>Es una saga de videojuegos de lucha inicialmente para el sistema Neo Geo desarrollada por la compañía SNK.</p>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img src="/generos/MvsC.png" class="d-block w-100" alt="marvel vs capcom" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>MARVEL VS CAPCOM</h5>
                                    <p>Es una saga de videojuegos de lucha inicialmente para el sistema Neo Geo desarrollada por la compañía SNK.</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="/generos/mk.png" class="d-block w-100" alt="mortal kombat" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>MORTAL KOMBAT</h5>
                                    <p>Es una franquicia de videojuegos de lucha creada por Ed Boon y John Tobias en 1992.</p>
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

                        <img src="/generos/dibu.jpg" class="col-md-6 float-md-end mb-3 ms-md-3"
                            alt="img" />

                        <p>
                            Un videojuego de lucha, pelea o combate, es un videojuego que se basa en manejar un luchador o
                            un grupo de luchadores, ya sea dando golpes, usando poderes mágicos o armas (incluyendo las de
                            fuego), arrojando objetos o ejecutando proyecciones. Este género se podría encuadrar en el
                            super-género de arcade, es decir es más importante la acción que la estrategia, aunque haya
                            mucho de esta última.
                        </p>

                        <p>
                            Los juegos de pelea son categorizados aparte de los videojuegos de deportes (como juegos de
                            lucha libre, boxeo, o artes marciales mixtas).
                        </p>

                        <h5>Subgeneros</h5>
                        <h6>Uno contra uno</h6>
                        <p>
                            El juego de lucha de uno contra uno o enfrentamiento individual varía mucho de un juego a otro,
                            pero por lo general consiste en pelear contra otro luchador, manejado por el CPU o por otro
                            videojugador, cuya finalidad es derrotarlo o evitar que derroten al nuestro, dándole golpes o
                            cualquier otro tipo de ataque para debilitarlo y vencerlo, así como esquivar y contraatacar
                            cualquier ataque recibido.
                        </p>
                        <p>Por lo general suelen usar muchos botones, divididos en puños y patadas, la palanca o cruceta
                            direccional es vital, ya que con ella se pueden hacer diversas combinaciones para que salgan los
                            ataques. Este género se ha hecho muy famoso por las combinaciones complicadas de control, que
                            incluye diagonales. </p>

                        <p>Los combates suelen ser en tres rondas (lo común) o en una sola, hay una barra de energía que
                            indica la salud que le queda a los combatientes para ser vencidos. En los juegos más recientes
                            del género también hay diversos elementos en los escenarios que quitan salud </p>
                        <img src="/generos/26ph.gif" class="col-md-6 float-md-start mb-3 ms-md-3" alt="gif" />

                        <p>Nuestra misión siempre es derrotar todos los combates, en el modo historia contra el CPU o
                            historia, hay que vencer combate tras combate hasta llegar a un Jefe Final y después de
                            derrotarlo se termina el juego. Por lo general al terminar un juego de este tipo presentan la
                            "historia" del personaje con que se ha vencido al Jefe Final y/o el desenlace de la trama del
                            juego. </p>
                        <p>
                            Una variante de este subgénero son combates por equipos, en donde el jugador permite elegir un
                            grupo de 2, 3 o hasta 4 luchadores y enfrentar equipos entre sí, como los pertenecientes a la
                            saga The King of Fighters, e incluso cambiar de luchador en medio de un combate (como en el caso
                            de X-Men vs. Street Fighter en combates 2 Vs. 2 y en The King of Fighters 2003 en combates 3 Vs.
                            3), mientras el otro (u otros) se recupera.
                        </p>

                        <h6>Batalla campal</h6>

                        <p>El género de Lucha Free-For-All ("todos contra todos") o arena fighting que suele presentarse
                            como un juego de batalla campal («battle royal» en inglés) donde el movimiento del jugador suele
                            ser completamente libre en el escenario e incluye, habitualmente, una alta interacción con el
                            escenario, diversos objetos utilizables repartidos sobre el escenario, ataque a distancia, etc.
                            Es por eso por lo que también se los conoce como juegos de lucha sobre plataformas
                            , si además tenemos en cuenta que no tienen por qué ser juegos
                            tridimensionales. </p>
                        <img src="/generos/super-smash-bros-ultimate.webp" class="col-md-6 float-md-end mb-3 ms-md-3"
                            alt="img" />
                        <p>Este subgénero contiene la esencia del juego de lucha 1 vs. 1 pero el enfrentamiento puede ser
                            también de 3 o 4 personas (o personajes controlados por el CPU) simultáneamente; básicamente
                            consiste en enfrentar a todos los jugadores en una sola pelea en diferentes combinaciones (1 vs.
                            1 vs. 1, 1 vs. 1 vs. 1 vs. 1, 2 vs. 1, 3 vs. 1, 2 vs. 2, etc.). </p>
                        <p>Dado que pueden participar más de 2 jugadores a la vez también están contempladas las luchas en
                            equipos, pero a diferencia de las luchas en equipos del "1 vs. 1" (arriba mencionadas), en estas
                            es necesario que todos los participantes se encuentren en combate al mismo tiempo. </p>
                        <p>En este tipo de juegos usualmente se da el ganador por "survival" (es decir, el último que
                            sobrevive a la pelea gana), sin embargo puede haber otros modos de determinar al ganador como su
                            ratio de eliminaciones por tiempo, o puntos de acuerdo al desempeño en el combate, etc. </p>
                    </div>



                    <div class="d-flex position-relative">
                        <img src="/generos/arcade.jpg" class="flex-shrink-0 me-3" alt="..." />
                        <div>
                            <h5 class="mt-0">ARCADE</h5>
                            <p>This is some placeholder content for the custom component. It is intended to mimic what some
                                real-world content would look like, and we're using it here to give the component a bit of
                                body and size.</p>
                            {/* <!-- <a href="#" class="stretched-link">Go somewhere</a> --> */}
                        </div>
                    </div>


                    <div class="d-flex position-relative">
                    <img src="/generos/joystick.jpg" class="flex-shrink-0 me-3" alt="..."/>
                    <div>
                        <h5 class="mt-0">JOYSTICK</h5>
                        <p>This hola is some placeholder content for the custom component. It is intended to mimic what
                            some real-world content would look like, and we're using it here to give the component a bit
                            of body and size.</p>

                    </div>
                </div>
                </div>
            </div>




        </div>
    )
};
export default Lucha;