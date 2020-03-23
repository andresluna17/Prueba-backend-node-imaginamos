-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-03-2020 a las 18:39:09
-- Versión del servidor: 10.1.36-MariaDB
-- Versión de PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba_backend_node`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `apellido` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `telefono` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id`, `nombre`, `apellido`, `email`, `telefono`) VALUES
(1, '', '', '', 0),
(2, '', '', '', 0),
(3, 'jaime', 'luna', 'jaime@gmail.com', 302193123);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `direccion`
--

CREATE TABLE `direccion` (
  `id` int(11) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `clienteId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `direccion`
--

INSERT INTO `direccion` (`id`, `direccion`, `clienteId`) VALUES
(1, 'avenida primera', 3),
(2, 'av cali - 13', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `driver`
--

CREATE TABLE `driver` (
  `id` int(11) NOT NULL,
  `activo` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `driver`
--

INSERT INTO `driver` (`id`, `activo`) VALUES
(1, 1),
(2, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `driver_pedidos_pedido`
--

CREATE TABLE `driver_pedidos_pedido` (
  `driverId` int(11) NOT NULL,
  `pedidoId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `driver_pedidos_pedido`
--

INSERT INTO `driver_pedidos_pedido` (`driverId`, `pedidoId`) VALUES
(1, 28),
(1, 29),
(1, 30),
(1, 31),
(2, 26),
(2, 32),
(2, 33);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedido`
--

CREATE TABLE `pedido` (
  `id` int(11) NOT NULL,
  `fecha_entrega` date NOT NULL,
  `hora_minima` time NOT NULL,
  `hora_maxima` time NOT NULL,
  `clienteId` int(11) DEFAULT NULL,
  `direccionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pedido`
--

INSERT INTO `pedido` (`id`, `fecha_entrega`, `hora_minima`, `hora_maxima`, `clienteId`, `direccionId`) VALUES
(1, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(4, '2020-03-25', '10:00:00', '13:00:00', 3, 2),
(5, '2020-03-25', '13:00:00', '20:00:00', NULL, NULL),
(6, '2020-03-25', '13:00:00', '20:00:00', NULL, NULL),
(7, '2020-03-25', '13:00:00', '20:00:00', NULL, NULL),
(8, '2020-03-25', '13:00:00', '20:00:00', NULL, NULL),
(9, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(10, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(11, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(12, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(13, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(14, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(15, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(16, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(17, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(18, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(19, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(20, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(21, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(22, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(23, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(24, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(25, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(26, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(27, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(28, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(29, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(30, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(31, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(32, '2020-03-25', '13:00:00', '20:00:00', 3, 1),
(33, '2020-03-25', '13:00:00', '20:00:00', 3, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_db0e996c8ebce5c76e5d7c41155` (`clienteId`);

--
-- Indices de la tabla `driver`
--
ALTER TABLE `driver`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `driver_pedidos_pedido`
--
ALTER TABLE `driver_pedidos_pedido`
  ADD PRIMARY KEY (`driverId`,`pedidoId`),
  ADD KEY `IDX_1ea6b5db3d5309883cf4064d28` (`driverId`),
  ADD KEY `IDX_6da94072c3f1a474ab17ad86d8` (`pedidoId`);

--
-- Indices de la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_2730a0c3947641edf256551f10c` (`clienteId`),
  ADD KEY `FK_896c29ec6272d9dc79649cfadb3` (`direccionId`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `direccion`
--
ALTER TABLE `direccion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `driver`
--
ALTER TABLE `driver`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pedido`
--
ALTER TABLE `pedido`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `direccion`
--
ALTER TABLE `direccion`
  ADD CONSTRAINT `FK_db0e996c8ebce5c76e5d7c41155` FOREIGN KEY (`clienteId`) REFERENCES `cliente` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `driver_pedidos_pedido`
--
ALTER TABLE `driver_pedidos_pedido`
  ADD CONSTRAINT `FK_1ea6b5db3d5309883cf4064d287` FOREIGN KEY (`driverId`) REFERENCES `driver` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_6da94072c3f1a474ab17ad86d80` FOREIGN KEY (`pedidoId`) REFERENCES `pedido` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Filtros para la tabla `pedido`
--
ALTER TABLE `pedido`
  ADD CONSTRAINT `FK_2730a0c3947641edf256551f10c` FOREIGN KEY (`clienteId`) REFERENCES `cliente` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_896c29ec6272d9dc79649cfadb3` FOREIGN KEY (`direccionId`) REFERENCES `direccion` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
