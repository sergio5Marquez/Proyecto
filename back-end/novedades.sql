-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 16-04-2023 a las 00:09:02
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
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'Diablo 4 prepara cambios en las mazmorras y ajustes en las clases para su lanzamiento', 'Blizzard ha publicado un nuevo post en su blog oficial en el que habla de algunos de los cambios que van a implementar al juego tras los comentarios de la comunidad.', 'Hace unas semanas que Blizzard celebró la primera beta abierta de Diablo 4, la nueva entrega de una de las sagas más especiales de ARPG de la historia que, tras su versión de prueba, ha dejado con un muy buen sabor de boca a los jugadores que la han probado volviendo a enfrentarse a los terrores que habitan Santuario.\r\n\r\nEste buen sabor de boca y la sensación general de satisfacción de muchos jugadores no quiere decir ni mucho menos que no haya habido críticas o puntos que la comunidad cree que deben mejorar, con Blizzard siendo consciente de ello y publicando un extenso post en el blog oficial del juego anunciando los comentarios de los jugadores que van a transformar en cambios de cara a la versión final de Diablo 4.'),
(2, 'Diablo 4 prepara cambios en las mazmorras y ajustes en las clases para su lanzamiento', 'Blizzard ha publicado un nuevo post en su blog oficial en el que habla de algunos de los cambios que van a implementar al juego tras los comentarios de la comunidad.', 'Hace unas semanas que Blizzard celebró la primera beta abierta de Diablo 4, la nueva entrega de una de las sagas más especiales de ARPG de la historia que, tras su versión de prueba, ha dejado con un muy buen sabor de boca a los jugadores que la han probado volviendo a enfrentarse a los terrores que habitan Santuario.\r\n\r\nEste buen sabor de boca y la sensación general de satisfacción de muchos jugadores no quiere decir ni mucho menos que no haya habido críticas o puntos que la comunidad cree que deben mejorar, con Blizzard siendo consciente de ello y publicando un extenso post en el blog oficial del juego anunciando los comentarios de los jugadores que van a transformar en cambios de cara a la versión final de Diablo 4.'),
(3, '5 cosas que nos gustaría ver en la secuela de Super Mario Bros. La Película', 'La cinta de animación producida por Illumination y Nintendo está arrasando en la taquilla mundial y es por ello que queremos repasar qué cosas querríamos ver en la más que posible secuela.', 'Super Mario Bros. La Película ya se ha convertido en la la adaptación de videojuegos más exitosa de todos los tiempos. Tal y como reportamos hace apenas unos días, la cinta de animación protagonizada por el icónico fontanero italiano de Nintendo ha conseguido alzarse como el mejor estreno de una cinta de animación de la historia e incluso se estima que podría alcanzar los 1200 millones de dólares de recaudación a nivel mundial, todo ello pese a que el veredicto por parte de la crítica especializada no está del todo claro, ya que podemos encontrar opiniones muy diversas y que no terminan de coincidir.\r\n\r\n\r\nTeniendo en cuenta los increíbles números que está cosechando y la inmejorable recepción por parte de los espectadores no nos parece descabellado pensar que desde Illumination y Nintendo ya podrían estar preparando una secuela. Es por ello que desde Vandal hemos querido repasar cinco cosas que nos gustaría ver de cara a una continuación, incluyendo personajes que querríamos ver o que tienen posibilidades de aparecer, posibles historias que se podrían tratar y escenarios míticos que merecerían lucirse en la gran pantalla.\r\n\r\n1. Más personajes del universo de Super Mario\r\nLa primera sugerencia que se nos viene a la mente es la inclusión de más personajes pertenecientes al rico universo de los videojuegos de Super Mario. A pesar de que Super Mario Bros. La Película hace un buen trabajo a la hora presentar a algunas de las caras más conocidas del Reino Champiñón, está claro que, de haber una secuela, no solo se explorarán personajes ya presentados como el propio Mario, Luigi, Peach, Toad, Donkey Kong, Bowser, Kamek y compañía, sino que también se presentarán otros completamente nuevos.'),
(4, '5 cosas que nos gustaría ver en la secuela de Super Mario Bros. La Película', 'La cinta de animación producida por Illumination y Nintendo está arrasando en la taquilla mundial y es por ello que queremos repasar qué cosas querríamos ver en la más que posible secuela.', 'Super Mario Bros. La Película ya se ha convertido en la la adaptación de videojuegos más exitosa de todos los tiempos. Tal y como reportamos hace apenas unos días, la cinta de animación protagonizada por el icónico fontanero italiano de Nintendo ha conseguido alzarse como el mejor estreno de una cinta de animación de la historia e incluso se estima que podría alcanzar los 1200 millones de dólares de recaudación a nivel mundial, todo ello pese a que el veredicto por parte de la crítica especializada no está del todo claro, ya que podemos encontrar opiniones muy diversas y que no terminan de coincidir.\r\n\r\n\r\nTeniendo en cuenta los increíbles números que está cosechando y la inmejorable recepción por parte de los espectadores no nos parece descabellado pensar que desde Illumination y Nintendo ya podrían estar preparando una secuela. Es por ello que desde Vandal hemos querido repasar cinco cosas que nos gustaría ver de cara a una continuación, incluyendo personajes que querríamos ver o que tienen posibilidades de aparecer, posibles historias que se podrían tratar y escenarios míticos que merecerían lucirse en la gran pantalla.\r\n\r\n1. Más personajes del universo de Super Mario\r\nLa primera sugerencia que se nos viene a la mente es la inclusión de más personajes pertenecientes al rico universo de los videojuegos de Super Mario. A pesar de que Super Mario Bros. La Película hace un buen trabajo a la hora presentar a algunas de las caras más conocidas del Reino Champiñón, está claro que, de haber una secuela, no solo se explorarán personajes ya presentados como el propio Mario, Luigi, Peach, Toad, Donkey Kong, Bowser, Kamek y compañía, sino que también se presentarán otros completamente nuevos.'),
(5, 'game', 'new game', 'hola como estas ');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
