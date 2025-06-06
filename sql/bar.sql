-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: db
-- Tiempo de generación: 20-02-2025 a las 16:46:23
-- Versión del servidor: 8.0.39
-- Versión de PHP: 8.2.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bar`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pedidos`
--

CREATE TABLE `pedidos` (
  `idpedido` int NOT NULL,
  `cliente` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `idplato` int NOT NULL,
  `unidades` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `pedidos`
--

INSERT INTO `pedidos` (`idpedido`, `cliente`, `idplato`, `unidades`) VALUES
(1, 'Paco', 40, 2),
(2, 'Juan', 36, 2),
(4, 'Paco', 37, 1),
(5, 'Juan', 38, 2),
(6, 'Susana', 35, 1),
(7, 'Susana', 45, 2),
(8, 'Paco ', 39, 1),
(9, 'Gloria', 43, 3),
(10, 'Gloria', 44, 2),
(11, 'Juan', 38, 2),
(14, 'Hugo', 43, 5),
(15, 'HUGO', 44, 1),
(16, 'HUGO', 39, 5),
(17, 'hugo', 44, 9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `platos`
--

CREATE TABLE `platos` (
  `idplato` int NOT NULL,
  `nombre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `descripcion` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci NOT NULL,
  `precio` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `platos`
--

INSERT INTO `platos` (`idplato`, `nombre`, `descripcion`, `precio`) VALUES
(35, 'Jamón ibérico 7 jotas', 'Jamón ibérico de bellota de calidad excepcional 7 bellotas.', 32.00),
(36, 'GAMBAS', 'GAMBAS BLANCAS DE HUELVA COCIDAS EN AGUA DE MAR', 10.00),
(37, 'PATATAS BRAVAS', 'Patatas cortadas en forma cúbica con salsa brava', 3.50),
(38, 'SOLOMILLO AL WHISKEY', 'Solomillo de cerdo ibérico en la salsa sevillana al whiskey', 3.00),
(39, 'GARBANZOS CON ESPINACAS', 'Guiso sevillano de garbanzos con espinacas', 2.50),
(40, 'BACALAO CON TOMATE', 'Clásico sevillano para la época de cuaresma, el famoso bacalao con tomate casero', 5.25),
(41, 'MONTADITO DE PRINGÁ', 'Auténtico montadito sevillano de pringá con chorizo, morcilla y carne de cerdo y ternera.', 2.75),
(42, 'CARACOLES', 'Caracoles, un plato no apto para guiris.', 2.50),
(43, 'CABRILLAS EN TOMATE', 'Cabrillas en salsa de tomate, como los caracoles, pero más grandes.', 3.50),
(44, 'PAVÍAS DE BACALAO', 'Como decía El Pali monstrandosu espíritu pacifista y afición a este plato \"Menos misiles y más pavías de bacalao\" ', 4.50),
(45, 'PAPAS ALIÑÁS', 'Patatas cultivadas en terrenos arenosos de Sanlúcar de Barrameda, cocidas y aliñadas con aceite de oliva virgen extra de Andalucía.', 3.00),
(58, 'Tostada de zurrapa', 'Medio mollete untado con exquisita zurrapa blanca', 1.50),
(61, 'Tostada', 'Pan tostado con aceite de oliva', 1.50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `username` varchar(30) COLLATE utf8mb4_spanish_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_spanish_ci NOT NULL,
  `password` varchar(60) COLLATE utf8mb4_spanish_ci NOT NULL,
  `role` varchar(15) COLLATE utf8mb4_spanish_ci NOT NULL DEFAULT 'user'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `role`) VALUES
(1, 'pepe', 'pepe@gmail.com', '$2b$10$WizWab3EW/O64A8g4HrisempX.zwLwLev7Uq45Z1frPD9ZbnIiQRi', 'user'),
(2, 'juan', 'juan@gmail.com', '$2b$10$9IxtZvqFW2ikknrLaBCAo.wW45YyiPKyB1DXczZ8hmPcAXk/XSkdO', 'user'),
(3, 'manuel', 'manuel@gmail.com', '$2b$10$/J01Z2Z4eSnymMOk7fnlpuUgnAFJbI9Fr9sP/hE4gjptomQwTw/yy', 'admin'),
(4, 'adrian', 'adrian@gmail.com', '$2b$10$5zDll.AL51JIH.VvilmdduZWJgINx.xV7bpa.8xzlDLUbkLfoVaUC', 'user'),
(5, 'virginia', 'virginia@gmail.com', '$2b$10$YQNU3YkFIgQwhyd7uk6p3OB.l4Z5XMwi99Dwws2K/YVcBdnDigmJ6', 'user'),
(6, 'lucia', 'lucia@gmail.com', '$2b$10$inqNVTYYUSmQdH/kLqnQpOV22B8aB6QDerrAIE7IMRW27dzHNChhK', 'user'),
(7, 'Santiago', 'santi@gmail.com', '$2b$10$tZ0E1SefkpudwH2r7LBEu.1bGylgsH69fvVgmnirg2guJc6v8w4py', 'user'),
(8, 'Ángel', 'angel@gmail.com', '$2b$10$p72Y1TyCn3m2xlGBLI5PAuhqRHu5v.keuF86uKt27fvMzxz6SFHf.', 'user'),
(9, 'Nicolai', 'nicolai@gmail.com', '$2b$10$1I66Y1dnYpaPtiqBlk2lpeQH.GRxtbfexrtax2rmNAuk8tLTuTlhq', 'user'),
(10, 'Ángel', 'angel9144039@gmail.com', '$2b$10$mFM8nHpT72cMvwojbsib7u/ZtQRjZSO9NaOZqu5qvvJ4O/aN0nham', 'user'),
(11, 'Ángel', 'angel4434320@gmail.com', '$2b$10$GqjmzW3BvXwO07B5qMeY0ePGMkeT/.OmXtBOMUgRZC.XQXYiLDqCK', 'user'),
(12, 'Ángel', 'angel3084195@gmail.com', '$2b$10$lZUMweMx2p0yZoWFuP9Lu.CdQuq5wsFPloRpIGESoAna3jyLUtIli', 'user');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD PRIMARY KEY (`idpedido`),
  ADD KEY `FK_PLATOS` (`idplato`);

--
-- Indices de la tabla `platos`
--
ALTER TABLE `platos`
  ADD PRIMARY KEY (`idplato`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `pedidos`
--
ALTER TABLE `pedidos`
  MODIFY `idpedido` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `platos`
--
ALTER TABLE `platos`
  MODIFY `idplato` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `pedidos`
--
ALTER TABLE `pedidos`
  ADD CONSTRAINT `FK_PLATOS` FOREIGN KEY (`idplato`) REFERENCES `platos` (`idplato`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
