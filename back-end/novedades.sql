-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 29-04-2023 a las 22:47:42
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectodiplo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `img_id` varchar(250) DEFAULT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `img_id`, `cuerpo`) VALUES
(1, 'Diablo 4 prepara cambios en las mazmorras y ajustes en las clases para su lanzamiento', 'Blizzard ha publicado un nuevo post en su blog oficial en el que habla de algunos de los cambios que van a implementar al juego tras los comentarios de la comunidad.', 'qgiotyilnljidiizffii', 'Hace unas semanas que Blizzard celebró la primera beta abierta de Diablo 4, la nueva entrega de una de las sagas más especiales de ARPG de la historia que, tras su versión de prueba, ha dejado con un muy buen sabor de boca a los jugadores que la han probado volviendo a enfrentarse a los terrores que habitan Santuario.\r\n\r\nEste buen sabor de boca y la sensación general de satisfacción de muchos jugadores no quiere decir ni mucho menos que no haya habido críticas o puntos que la comunidad cree que deben mejorar, con Blizzard siendo consciente de ello y publicando un extenso post en el blog oficial del juego anunciando los comentarios de los jugadores que van a transformar en cambios de cara a la versión final de Diablo 4.'),
(3, '5 cosas que nos gustaría ver en la secuela de Super Mario Bros. La Película', 'La cinta de animación producida por Illumination y Nintendo está arrasando en la taquilla mundial y es por ello que queremos repasar qué cosas querríamos ver en la más que posible secuela.', 'gtdtotjlxkg1fmvlejmi', 'Super Mario Bros. La Película ya se ha convertido en la la adaptación de videojuegos más exitosa de todos los tiempos. Tal y como reportamos hace apenas unos días, la cinta de animación protagonizada por el icónico fontanero italiano de Nintendo ha conseguido alzarse como el mejor estreno de una cinta de animación de la historia e incluso se estima que podría alcanzar los 1200 millones de dólares de recaudación a nivel mundial, todo ello pese a que el veredicto por parte de la crítica especializada no está del todo claro, ya que podemos encontrar opiniones muy diversas y que no terminan de coincidir.\r\n\r\n\r\nTeniendo en cuenta los increíbles números que está cosechando y la inmejorable recepción por parte de los espectadores no nos parece descabellado pensar que desde Illumination y Nintendo ya podrían estar preparando una secuela. Es por ello que desde Vandal hemos querido repasar cinco cosas que nos gustaría ver de cara a una continuación, incluyendo personajes que querríamos ver o que tienen posibilidades de aparecer, posibles historias que se podrían tratar y escenarios míticos que merecerían lucirse en la gran pantalla.\r\n\r\n1. Más personajes del universo de Super Mario\r\nLa primera sugerencia que se nos viene a la mente es la inclusión de más personajes pertenecientes al rico universo de los videojuegos de Super Mario. A pesar de que Super Mario Bros. La Película hace un buen trabajo a la hora presentar a algunas de las caras más conocidas del Reino Champiñón, está claro que, de haber una secuela, no solo se explorarán personajes ya presentados como el propio Mario, Luigi, Peach, Toad, Donkey Kong, Bowser, Kamek y compañía, sino que también se presentarán otros completamente nuevos.'),
(7, 'Blasphemous 2 no dejará atrás a ningún jugador: Tras un malentendido, su productor aclara que el juego también saldrá en PS4 y Xbox One', 'David Erosa, productor de Blasphemous 2, ha señalado en su cuenta de Twitter que están en desarrollo ambas versiones.', 'hp5vmwx1cyx6ygxaxfko', 'Es uno de los videojuegos más esperados del año por muchos aficionados, y por fin ya se sabe su ventana de lanzamiento. Blasphemous 2 anunció que se iba a lanzar en verano de 2023, pero al final del tráiler se pudo apreciar que dos plataformas no aparecían entre las versiones en las que se iba a lanzar. Tras este malentendido, por fin hay buenas noticias para los poseedores de una PS4 o Xbox One.\r\n\r\nDavid Erosa, productor de Blasphemous 2, ha señalado en su cuenta de Twitter lo siguiente: \"Pequeño recordatorio de que Blasphemous 2 también estará en Playstation 4 y en Xbox One. Ambas versiones están en desarrollo, pero aún no tenemos fechas para ellas\". Al fin y al cabo, esta revelación ha alegrado a muchos jugadores, pero cabe matizar que es posible que lleguen más tarde.'),
(9, 'Final Fantasy 16 tendrá pack con PS5: así son sus accesorios temáticos solo para Japón', 'El nuevo videojuego de Square Enix para PlayStation 5 también se venderá junto a la consola en un nuevo pack; Japón contará con carcasa y DualSense temáticos.', 't24yq3cjsli1qqnwsv07', 'En menos de dos meses se lanza Final Fantasy XVI, la nueva entrega de tan popular saga J-RPG que dará un giro a la acción con esta nueva aventura de corte medieval en el reino de Valisthea. Y como no podía ser de otra manera en un lanzamiento exclusivo -al menos por el momento- de un juego para PlayStation, empiezan a surgir accesorios temáticos y packs de consola con juego. Eso sí, mientras que el pack de consola y juego ya se ha confirmado en Europa a un precio de 609,99 euros, tanto la carcasa como el DualSense inspirados en el juego únicamente se venderán en Japón. Conozcamos más sobre estas novedades PlayStation de Final Fantasy XVI.\r\n\r\n\r\n');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
