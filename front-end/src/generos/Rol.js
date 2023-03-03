import React from "react";

const Rol = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h3>Rol</h3>
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
                                <img src="/generos/ciber.png" class="d-block w-100" alt="Cyberpunk 2077" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Cyberpunk 2077</h5>
                                    <p>Es una historia de acción y aventura en mundo abierto ambientada en Night City, una megalópolis obsesionada con el poder, el glamur y la modificación corporal. </p>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="3000">
                                <img src="/generos/elden.png" class="d-block w-100" alt="marvel vs capcom" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Elden Ring</h5>
                                    <p>Recorre las Tierras Intermedias, un nuevo mundo de fantasía ideado por Hidetaka Miyazaki, creador de la exitosa serie de videojuegos DARK SOULS</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <img src="/generos/diablo.png" class="d-block w-100" alt="diablo" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Diablo</h5>
                                    <p>es un videojuego de rol de acción (aRPG), desarrollado por Blizzard Entertainment.</p>
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

                        <img src="/generos/dark.jpg" class="col-md-6 float-md-end mb-3 ms-md-3" alt="dark" />

                        <p>
                            El videojuego de rol como género de videojuegos incluye una amplia variedad de sistemas y
                            estilos de juego. Algunos elementos fuertemente asociados a los juegos de rol, como el
                            desarrollo estadístico de personajes, han sido adaptados ampliamente a otros géneros de
                            videojuegos. Aunque usen la palabra «rol», no pueden ser considerados como juegos de rol en sí.
                            La proliferación de este tipo de juegos en los últimos años y el uso de la palabra «rol» para
                            nombrarlos ha hecho que un gran número de personas crea (erróneamente) que los videojuegos de
                            rol son realmente juegos de rol en sí mismos.
                        </p>

                        <h5>Historia</h5>

                        <p>
                            El género comenzó a mediados de los años 1970, inspirado por juegos de rol de mesa como Dungeons
                            & Dragons, publicado en 1974 por la editorial TSR, Inc. Otras fuentes de inspiración para los
                            primeros videojuegos de rol fueron videojuegos de deportes, videojuegos de aventura, juegos de
                            estrategia como el ajedrez, novelas de fantasía de autores como J. R. R. Tolkien e incluso
                            antiguas epopeyas que seguían la misma estructura básica de emprender varias misiones para
                            lograr un objetivo final.
                        </p>
                        <p>Tras el éxito de algunos ejemplares de este género como Dragon Quest, Final Fantasy y Megami
                            Tensei, el género se ramificó en dos estilos, los JRPG y WRPG, juegos de rol japoneses y juegos
                            de rol occidentales respectivamente. Además, mientras que los primeros videojuegos de rol eran
                            para un único jugador, la popularidad de los modos multijugador se incrementó durante la década
                            de 1990, con videojuegos de rol de acción como Secret of Mana y Diablo. Con la llegada de
                            Internet, muchos juegos multijugador han crecido para convertirse en juegos de rol masivos en
                            línea, por ejemplo Lineage, "World of Warcraft", Final Fantasy XI o Ragnarok Online.</p>
                        <img src="/generos/fantasi.jpg" class="col-md-6 float-md-start mb-3 ms-md-3" alt="final fantasi"/>

                        <p>Actualmente, predomina la propuesta de videojuego donde se controla y representa cabalmente a un
                            personaje (o varios), que debe cumplir con una serie de objetivos o misiones bien establecidos
                            por los programadores; usualmente, se crea un mundo perteneciente a un tema de fantasía épica.
                            Para ello, se viene utilizando una interfaz gráfica cada vez más vistosa para utilizar un
                            sofisticado inventario de poderes humanos y sobrenaturales (que el jugador desarrolla poco a
                            poco con práctica y muchas horas de juego), recursos monetarios y objetos diversos en propiedad
                            (comprados o encontrados de manera fortuita), para el logro de las metas.</p>

                        <h5>Diferencias culturales</h5>
                        <p>Tras el éxito de los RPG de consola en Japón, el género comenzó a ser clasificado en dos estilos
                            muy diferentes: RPGs de ordenador y RPGs de consola, debido al estilo, jugabilidad o razones
                            culturales; con estos últimos habiéndose vuelto muy populares e influenciados por el estilo de
                            videojuegos japonés. A pesar de esto, a principios del siglo XXI, cuando las diferencias entre
                            plataformas se hicieron difusas, los RPG de ordenador y de consola acabaron siendo clasificados
                            como videojuegos de rol occidentales (WRPG) y videojuegos de rol orientales (JRPG)
                            respectivamente. </p>
                        <p>
                            A pesar de compartir características fundamentales, las diferencias entre estas dos corrientes
                            eran grandes. Los WRPG tienden a tener gráficos más oscuros, personajes más viejos y están más
                            centrados en la libertad del jugador, el realismo y las mecánicas del juego. En contraste, los
                            JRPG suele tener gráficos más brillantes y similares al anime, personajes más jóvenes y están
                            más centrados en historias más lineales con tramas más intrincadas. De hecho, es común que los
                            WRPG permitan al jugador crear su propio personaje desde la nada y tengan un sistema de árbol de
                            diálogos que permite al jugador tomar sus propias decisiones.7​ Por otra parte, los JRPG limitan
                            a los jugadores a desarrollar personajes predefinidos y no suelen dar la opción de crear uno
                            propio o hacer decisiones respecto a la trama
                        </p>
                        <img src="/generos/Zelda.jpg" class="col-md-6 float-md-end mb-3 ms-md-3" alt="zelda" />

                        <h5>Jugabilidad</h5>

                        <p> Unos de los principales atractivos que persiguen los aficionados a esta clase de videojuego, se
                            aprecian precisamente en la jugabilidad del combate de tipo medieval cada vez más complejo y
                            realista en ciertos aspectos, como en los movimientos y rasgos humanos más naturales en general,
                            los bienes virtuales que se poseen (en especial armas y efectos de guerra encantados o mágicos,
                            que facilitan el juego notablemente, o que simplemente, se presumen), el detalle en las
                            estadísticas que arroja la aventura y los reconocimientos al tiempo invertido en el videojuego
                            (niveles de las habilidades alcanzados, que define la respetabilidad del jugador ante los otros
                            aficionados).</p>
                        <p>
                            La duración de un solo juego de estos demanda mucho tiempo; puede variar mucho para su
                            terminación o fin por parte del usuario promedio. Si se juega a un ritmo sano y detallista, no
                            es raro observar un periodo de varios meses e inclusive más de un año (dependerá de la
                            veneración que le dedique cada jugador a determinado videojuego y si lo abandona por periodos).
                            El juego puede mezclarse con otro género como rol y aventura.
                        </p>


                        <h5>Generos relacionados</h5>
                        <p>A diferencia de los juegos de acción, los combates de un RPG son un desafío táctico, y los
                            videojuegos de rol conllevan decisiones no relacionadas directamente con la acción, por ejemplo,
                            la gestión de un inventario, la elección de opciones de diálogo y la compraventa de objetos.
                        </p>
                        <img src="/generos/fate.webp" class="col-md-6 float-md-start mb-3 ms-md-3" alt="fate"/>
                        <p>A pesar de que los RPG comparten algunas reglas de combate con los juegos de guerra, en los
                            juegos de rol se controla un pequeño grupo de personajes. En los juegos de guerra se tiende a
                            tener grandes grupos de unidades idénticas, junto a unidades no humanoides como tanques y
                            helicópteros. Los juegos de rol no suelen permitir al jugador producir más unidades que las
                            predeterminadas, a pesar de que existen ejemplos que han combinado características de ambos,
                            como la saga Heroes of Might and Magic que combina héroes individuales (similares a los de los
                            RPG) con grandes cantidades de tropas en batallas a gran escala (al estilo de los juegos de
                            guerra). </p>
                        <p>Los RPG rivalizan con los juegos de aventura en términos de tramas ricas, en contraste a géneros
                            que no dependen de su trama, como los juegos de deportes o los juegos de puzles. A pesar de
                            ello, los juegos de aventuras suelen tener personajes bien definidos, mientras que los RPG
                            pueden dar la opción de que el jugador diseñe su propio personaje. Los juegos de aventura suelen
                            centrarse en un único personaje, mientras que en los juegos de rol la trama gira alrededor de un
                            grupo de personajes. Además, los RPG suelen tener un sistema de combate, cosa de la que suelen
                            carecer los juegos de aventuras. Mientras que ambos géneros pueden centrarse en el desarrollo
                            personal o psicológico de un personaje, los RPG suelen hacer énfasis en un complejo sistema de
                            economía donde los personajes son definidos por unos atributos numéricos. </p>
                        <p>Los elementos de jugabilidad asociados con este género, como el desarrollo de personajes
                            estadístico, han sido adaptados a otros géneros. Por ejemplo, Grand Theft Auto: San Andreas, un
                            videojuego de acción-aventuras, usa recursos estadísticos para definir un amplio rango de
                            atributos como el aguante, el atractivo la habilidad con armas, conducción, capacidad pulmonar y
                            tono muscular; y usa numerosas escenas y misiones para avanzar en la historia. Warcraft III:
                            Reign of Chaos un juego de estrategia en tiempo real, contiene héroes que pueden completar
                            misiones, obtener nuevo equipamiento y aprender nuevas habilidades a medida que avanzan de
                            nivel, características propias de un RPG</p>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Rol;