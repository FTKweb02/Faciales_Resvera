-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-09-2021 a las 00:31:00
-- Versión del servidor: 10.4.21-MariaDB
-- Versión de PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `faciales_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cabinas`
--

CREATE TABLE `cabinas` (
  `idCabinas` varchar(45) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Responsable` varchar(45) NOT NULL,
  `Servicios_idServicios` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cabinas`
--

INSERT INTO `cabinas` (`idCabinas`, `Nombre`, `Responsable`, `Servicios_idServicios`) VALUES
('RC01', 'Boss Room', 'General', 'RCBR02'),
('RSC01', 'Saphire', 'Fany', 'RSTEC01'),
('RSC02', 'Emerald', 'Majo', 'RSFAC01'),
('RSC03', 'Ruby', 'Yocelin', 'RSFAC01'),
('RSC04', 'Starlight', 'Daniela', 'RSFAC01'),
('RSC05', 'Opal', 'Priscila Domínguez ', 'RSME00'),
('VV01', 'Cabina 01', 'Yamileth', 'VVTR01'),
('VV02', 'Ariana', 'Ariana', 'VVTR01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `Marca_id` varchar(45) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Dirección` varchar(45) NOT NULL,
  `Teléfono` bigint(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`Marca_id`, `Nombre`, `Dirección`, `Teléfono`) VALUES
('OG', 'OroGold', 'Masaryk 360 Pasaje Polanco Local 00', 0),
('RC', 'Reserve Cut', 'Masaryk 360 Pasaje Polanco Local 18 Polanco', 5589469745),
('RS', 'Resvera', 'Arquimides 198, Colonia Polanco', 5589469744),
('UMAF', 'UMAF', 's/Dirección', 0),
('VV', 'Vine Vera', 'Masaryk 360 Pasaje Polanco Local 00', 0),
('VVEXP', 'Vine Vera Experience', 'Masaryk 360 Pasaje Polanco Local 00', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `idProductos` varchar(45) NOT NULL,
  `Nombre` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios`
--

CREATE TABLE `servicios` (
  `idServicios` varchar(45) NOT NULL,
  `Categoría` varchar(45) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Duración` time NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `servicios`
--

INSERT INTO `servicios` (`idServicios`, `Categoría`, `Nombre`, `Duración`) VALUES
('RCBR01', 'Básico', 'Arreglo de Barba', '01:00:00'),
('RCBR02', 'Boss Room', 'Arreglo de Barba', '01:20:00'),
('RCBR03', 'Básico', 'Afeitado de Barba', '01:00:00'),
('RCBR04', 'Boss Room', 'Afeitado de Barba', '01:20:00'),
('RCBR05', 'Básico', 'Recorte y Arreglo de Bigote', '01:00:00'),
('RCBR06', 'Boss Room', 'Recorte y Arreglo de Bigote', '01:20:00'),
('RCCL01', 'Básico', 'Matizante Especial para Canas', '01:00:00'),
('RCCL02', 'Boss Room', 'Matizante Especial para Canas', '01:20:00'),
('RCCL03', 'Básico', 'Matizante de Canas para Barba', '01:00:00'),
('RCCL04', 'Boss Room', 'Matizante de Canas para Barba', '01:20:00'),
('RCCL05', 'Básico', 'Tinte para Cabello', '01:00:00'),
('RCCL06', 'Boss Room', 'Tinte para Cabello', '01:20:00'),
('RCFAC01', 'Básico', 'Deep Cleanse', '00:30:00'),
('RCFAC02', 'Boss Room', 'Deep Cleanse', '00:50:00'),
('RCFAC03', 'Básico', 'Mascarilla Carbon Activado', '01:00:00'),
('RCFAC04', 'Boss Room', 'Mascarilla Carbon Activado', '01:20:00'),
('RCGR01', 'Básico', 'Corte de Cabello', '01:00:00'),
('RCGR02', 'Boss Room', 'Corte de Cabello', '01:20:00'),
('RCGR03', 'Básico', 'Afeitado de Cabeza', '01:00:00'),
('RCGR04', 'Boss Room', 'Afeitado de Cabeza', '01:20:00'),
('RCGR05', 'Básico', 'Corte Ninos', '01:00:00'),
('RCGR06', 'Boss Room', 'Corte Ninos', '01:20:00'),
('RCMP01', 'Básico', 'Manicure', '01:00:00'),
('RCMP02', 'Boss Room', 'Manicure', '01:20:00'),
('RCMP03', 'Básico', 'Pedicure', '01:00:00'),
('RCMP04', 'Boss Room', 'Pedicure', '01:20:00'),
('RCMP05', 'Básico', 'Manicure y Pedicure', '01:00:00'),
('RCMP06', 'Boss Room', 'Manicure y Pedicure', '01:20:00'),
('RCMS01', 'Boss Room', 'Masaje Shiatsu', '00:20:00'),
('RCMS02', 'Boss Room', 'Masaje Shiatsu', '00:40:00'),
('RCMS03', 'Boss Room', 'Masaje de Manos y Pies', '00:30:00'),
('RCMS04', 'Boss Room', 'Masaje de Manos y Pies con Refelxología', '00:30:00'),
('RCPQ01', 'Básico', 'Gold Xperience', '01:00:00'),
('RCPQ02', 'Boss Room', 'Gold Xperience', '01:20:00'),
('RCPQ03', 'Básico', 'Reserve Cut Xperience', '01:00:00'),
('RCPQ04', 'Boss Room', 'Reserve Cut Xperience', '01:20:00'),
('RSFAC01', 'Avanzado', 'Facial Hydratance', '00:50:00'),
('RSFAC02', 'Básico', 'Facial Hydratance', '00:30:00'),
('RSFAC03', 'Básico', 'Facial Lifting', '01:00:00'),
('RSFAC04', 'Básico', 'Facial Petal Peel', '01:00:00'),
('RSFAC05', 'Básico', 'Facial Aqua Lift', '00:50:00'),
('RSFAC06', 'Básico', 'Deep Cleanse', '00:50:00'),
('RSFAC07', 'Básico', 'Facial Magnetic Detox', '00:50:00'),
('RSFAC08', 'Básico', 'Nefertiti Experience', '02:40:00'),
('RSME00', 'Básico', 'Medicina Estética', '00:00:00'),
('RSMES01', 'Básico', 'D Pigment', '01:00:00'),
('RSMES02', 'Básico', 'Skin Light', '01:00:00'),
('RSMES03', 'Básico', 'Radiance Skin', '00:40:00'),
('RSMES04', 'Básico', 'Vitality Facial', '00:40:00'),
('RSTEC01', 'Básico', 'Reskin', '00:25:00'),
('RSTEC02', 'Avanzado', 'Reskin', '00:45:00'),
('RSTEC03', 'Básico', 'Skin Glow', '00:40:00'),
('RSTEC04', 'Avanzado', 'Skin Glow', '01:00:00'),
('RSTEC05', 'Básico', 'Diamond Lifting', '00:40:00'),
('RSTEC06', 'Avanzado', 'Diamond Lifting', '01:10:00'),
('RSTEC07', 'Básico', 'Skin Renew', '00:40:00'),
('RSTEC08', 'Avanzado', 'Skin Renew', '01:00:00'),
('RSTEC09', 'Básico', 'Luxe Resurfacing', '01:00:00'),
('RSTEC10', 'Básico', 'A New Beginning', '02:40:00'),
('VVTR01', 'Lux', 'Para Manchas', '01:00:00'),
('VVTR02', 'Básico', 'Para Manchas', '01:00:00'),
('VVTR03', 'Lux', 'Facial Biolifting', '01:00:00'),
('VVTR04', 'Avanzado', 'Facial Biolifting', '01:00:00'),
('VVTR05', 'Básico', 'Facial Biolifting', '01:00:00'),
('VVTR06', 'Lux', 'Hidratacion', '01:00:00'),
('VVTR07', 'Avanzado', 'Hidratacion', '01:00:00'),
('VVTR08', 'Básico', 'Hidratacion', '01:00:00'),
('VVTR09', 'Lux', 'Limpieza Profunda', '01:00:00'),
('VVTR10', 'Avanzado', 'Limpieza Profunda', '01:00:00'),
('VVTR11', 'Básico', 'Limpieza', '01:00:00'),
('VVTR12', 'Vip', 'Facial con Sonoforesis Antiacne', '01:00:00'),
('VVTR13', 'Avanzado', 'Facial Antiacne', '01:00:00'),
('VVTR14', 'Básico', 'Facial Antiacne', '01:00:00'),
('VVTR15', 'Avanzado', 'Facial Detox', '01:00:00'),
('VVTR16', 'Super Lux', 'Facial de Oro 24k', '01:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `servicios_has_sucursal`
--

CREATE TABLE `servicios_has_sucursal` (
  `Servicios_idServicios` varchar(45) NOT NULL,
  `Sucursal_idSucursal` varchar(45) NOT NULL,
  `Sucursal_Marca_Marca_id` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `servicios_has_sucursal`
--

INSERT INTO `servicios_has_sucursal` (`Servicios_idServicios`, `Sucursal_idSucursal`, `Sucursal_Marca_Marca_id`) VALUES
('RCBR01', 'RC01', 'RC'),
('RCBR02', 'RC01', 'RC'),
('RCBR03', 'RC01', 'RC'),
('RCBR04', 'RC01', 'RC'),
('RCBR05', 'RC01', 'RC'),
('RCBR06', 'RC01', 'RC'),
('RCCL01', 'RC01', 'RC'),
('RCCL02', 'RC01', 'RC'),
('RCCL03', 'RC01', 'RC'),
('RCCL04', 'RC01', 'RC'),
('RCCL05', 'RC01', 'RC'),
('RCCL06', 'RC01', 'RC'),
('RCFAC01', 'RC01', 'RC'),
('RCFAC02', 'RC01', 'RC'),
('RCFAC03', 'RC01', 'RC'),
('RCFAC04', 'RC01', 'RC'),
('RCGR01', 'RC01', 'RC'),
('RCGR02', 'RC01', 'RC'),
('RCGR03', 'RC01', 'RC'),
('RCGR04', 'RC01', 'RC'),
('RCGR05', 'RC01', 'RC'),
('RCGR06', 'RC01', 'RC'),
('RCMP01', 'RC01', 'RC'),
('RCMP02', 'RC01', 'RC'),
('RCMP03', 'RC01', 'RC'),
('RCMP04', 'RC01', 'RC'),
('RCMP05', 'RC01', 'RC'),
('RCMP06', 'RC01', 'RC'),
('RCMS01', 'RC01', 'RC'),
('RCMS02', 'RC01', 'RC'),
('RCMS03', 'RC01', 'RC'),
('RCMS04', 'RC01', 'RC'),
('RCPQ01', 'RC01', 'RC'),
('RCPQ02', 'RC01', 'RC'),
('RCPQ03', 'RC01', 'RC'),
('RCPQ04', 'RC01', 'RC'),
('RSFAC01', 'RS01', 'RS'),
('RSFAC02', 'RS01', 'RS'),
('RSFAC03', 'RS01', 'RS'),
('RSFAC04', 'RS01', 'RS'),
('RSFAC05', 'RS01', 'RS'),
('RSFAC06', 'RS01', 'RS'),
('RSFAC07', 'RS01', 'RS'),
('RSFAC08', 'RS01', 'RS'),
('RSME00', 'RS01', 'RS'),
('RSMES01', 'RS01', 'RS'),
('RSMES02', 'RS01', 'RS'),
('RSMES03', 'RS01', 'RS'),
('RSMES04', 'RS01', 'RS'),
('RSTEC01', 'RS01', 'RS'),
('RSTEC02', 'RS01', 'RS'),
('RSTEC03', 'RS01', 'RS'),
('RSTEC04', 'RS01', 'RS'),
('RSTEC05', 'RS01', 'RS'),
('RSTEC06', 'RS01', 'RS'),
('RSTEC07', 'RS01', 'RS'),
('RSTEC08', 'RS01', 'RS'),
('RSTEC09', 'RS01', 'RS'),
('RSTEC10', 'RS01', 'RS'),
('VVTR01', 'VV01', 'VV'),
('VVTR02', 'VV01', 'VV'),
('VVTR03', 'VV01', 'VV'),
('VVTR04', 'VV01', 'VV'),
('VVTR05', 'VV01', 'VV'),
('VVTR06', 'VV01', 'VV'),
('VVTR07', 'VV01', 'VV'),
('VVTR08', 'VV01', 'VV'),
('VVTR09', 'VV01', 'VV'),
('VVTR10', 'VV01', 'VV'),
('VVTR11', 'VV01', 'VV'),
('VVTR12', 'VV01', 'VV'),
('VVTR13', 'VV01', 'VV'),
('VVTR14', 'VV01', 'VV'),
('VVTR15', 'VV01', 'VV'),
('VVTR16', 'VV01', 'VV');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal`
--

CREATE TABLE `sucursal` (
  `idSucursal` varchar(45) NOT NULL,
  `Dirección` varchar(45) NOT NULL,
  `Teléfono` bigint(10) NOT NULL,
  `Correo` varchar(45) NOT NULL,
  `Marca_Marca_id` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sucursal`
--

INSERT INTO `sucursal` (`idSucursal`, `Dirección`, `Teléfono`, `Correo`, `Marca_Marca_id`) VALUES
('RC01', 'Masaryk 360 Pasaje Polanco Local 18 ', 5589469744, 'hola@reservecut.com.mx', 'RC'),
('RS01', 'Arquimides 198, Colonia Polanco', 5589469745, 'hola@resvera.com.mx', 'RS'),
('VV01', 'Masaryk 360 Pasaje Polanco Local 00', 0, 'hola@vinevera.com.mx', 'VV');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sucursal_has_cabinas`
--

CREATE TABLE `sucursal_has_cabinas` (
  `Sucursal_idSucursal` varchar(45) NOT NULL,
  `Sucursal_Marca_Marca_id` varchar(45) NOT NULL,
  `Cabinas_idCabinas` varchar(45) NOT NULL,
  `Cabinas_Servicios_idServicios` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `sucursal_has_cabinas`
--

INSERT INTO `sucursal_has_cabinas` (`Sucursal_idSucursal`, `Sucursal_Marca_Marca_id`, `Cabinas_idCabinas`, `Cabinas_Servicios_idServicios`) VALUES
('RC01', 'RC', 'RC01', 'RCBR02'),
('RS01', 'RS', 'RSC01', 'RSTEC01'),
('VV01', 'VV', 'VV02', 'VVTR01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tecnología`
--

CREATE TABLE `tecnología` (
  `idTeconología` varchar(45) NOT NULL,
  `Servicios_idServicios` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuarios` varchar(45) NOT NULL,
  `Nombre` varchar(45) NOT NULL,
  `Puesto` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cabinas`
--
ALTER TABLE `cabinas`
  ADD PRIMARY KEY (`idCabinas`,`Servicios_idServicios`),
  ADD KEY `fk_Cabinas_Servicios1` (`Servicios_idServicios`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`Marca_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`idProductos`);

--
-- Indices de la tabla `servicios`
--
ALTER TABLE `servicios`
  ADD PRIMARY KEY (`idServicios`);

--
-- Indices de la tabla `servicios_has_sucursal`
--
ALTER TABLE `servicios_has_sucursal`
  ADD PRIMARY KEY (`Servicios_idServicios`,`Sucursal_idSucursal`,`Sucursal_Marca_Marca_id`),
  ADD KEY `fk_Servicios_has_Sucursal_Sucursal1` (`Sucursal_idSucursal`,`Sucursal_Marca_Marca_id`);

--
-- Indices de la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD PRIMARY KEY (`idSucursal`,`Marca_Marca_id`),
  ADD KEY `fk_Sucursal_Marca1` (`Marca_Marca_id`);

--
-- Indices de la tabla `sucursal_has_cabinas`
--
ALTER TABLE `sucursal_has_cabinas`
  ADD PRIMARY KEY (`Sucursal_idSucursal`,`Sucursal_Marca_Marca_id`,`Cabinas_idCabinas`,`Cabinas_Servicios_idServicios`),
  ADD KEY `fk_Sucursal_has_Cabinas_Cabinas1` (`Cabinas_idCabinas`,`Cabinas_Servicios_idServicios`);

--
-- Indices de la tabla `tecnología`
--
ALTER TABLE `tecnología`
  ADD PRIMARY KEY (`idTeconología`,`Servicios_idServicios`),
  ADD KEY `fk_Tecnología_Servicios1` (`Servicios_idServicios`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuarios`);

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cabinas`
--
ALTER TABLE `cabinas`
  ADD CONSTRAINT `fk_Cabinas_Servicios1` FOREIGN KEY (`Servicios_idServicios`) REFERENCES `servicios` (`idServicios`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `servicios_has_sucursal`
--
ALTER TABLE `servicios_has_sucursal`
  ADD CONSTRAINT `fk_Servicios_has_Sucursal_Servicios1` FOREIGN KEY (`Servicios_idServicios`) REFERENCES `servicios` (`idServicios`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Servicios_has_Sucursal_Sucursal1` FOREIGN KEY (`Sucursal_idSucursal`,`Sucursal_Marca_Marca_id`) REFERENCES `sucursal` (`idSucursal`, `Marca_Marca_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `sucursal`
--
ALTER TABLE `sucursal`
  ADD CONSTRAINT `fk_Sucursal_Marca1` FOREIGN KEY (`Marca_Marca_id`) REFERENCES `marca` (`Marca_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `sucursal_has_cabinas`
--
ALTER TABLE `sucursal_has_cabinas`
  ADD CONSTRAINT `fk_Sucursal_has_Cabinas_Cabinas1` FOREIGN KEY (`Cabinas_idCabinas`,`Cabinas_Servicios_idServicios`) REFERENCES `cabinas` (`idCabinas`, `Servicios_idServicios`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Sucursal_has_Cabinas_Sucursal1` FOREIGN KEY (`Sucursal_idSucursal`,`Sucursal_Marca_Marca_id`) REFERENCES `sucursal` (`idSucursal`, `Marca_Marca_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `tecnología`
--
ALTER TABLE `tecnología`
  ADD CONSTRAINT `fk_Tecnología_Servicios1` FOREIGN KEY (`Servicios_idServicios`) REFERENCES `servicios` (`idServicios`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
