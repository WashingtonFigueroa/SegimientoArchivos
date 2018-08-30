-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 30, 2018 at 04:20 AM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 7.1.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tramites`
--

-- --------------------------------------------------------

--
-- Table structure for table `clientes`
--

CREATE TABLE `clientes` (
  `id` int(10) UNSIGNED NOT NULL,
  `tipo_documento` enum('cedula','ruc') COLLATE utf8mb4_unicode_ci NOT NULL,
  `identificacion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombres` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `celular` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `correo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `documento` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `clientes`
--

INSERT INTO `clientes` (`id`, `tipo_documento`, `identificacion`, `nombres`, `telefono`, `celular`, `correo`, `documento`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'cedula', '1003833447', 'Washington Estuardo Figueroa Cuaspud', '062933515', '0969191290', 'w.figo.1991@gmail.com', 'documento/mr04Ke4stgD7v37as6TvUzVbMH1kpT5kSaKBfdlS.jpeg', NULL, '2018-08-30 05:52:02', '2018-08-30 05:52:02'),
(2, 'cedula', '1004338693', 'Ondina Lizbeth Pascal Rivera', '062933515', '0969936213', 'olpr@gmail.com', 'documento/wMb4VLkpqav9tYOD89VlNlk31v5CN23nS6MCLLYv.jpeg', NULL, '2018-08-30 05:59:19', '2018-08-30 05:59:19');

-- --------------------------------------------------------

--
-- Table structure for table `departamentos`
--

CREATE TABLE `departamentos` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `departamentos`
--

INSERT INTO `departamentos` (`id`, `nombre`, `descripcion`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 'Administrador', 'DTE', NULL, '2018-08-30 04:56:26', '2018-08-30 04:56:26'),
(2, 'Gerencia', 'Gerente general', NULL, '2018-08-30 05:02:16', '2018-08-30 05:02:16'),
(3, 'Dpto Financiero', 'Balances Generales', NULL, '2018-08-30 05:03:17', '2018-08-30 05:03:17'),
(4, 'DTPO Talento Humano', 'Calificación del personal', NULL, '2018-08-30 05:03:51', '2018-08-30 05:03:51'),
(5, 'Dpto Recaudación', 'Control de ingresos', NULL, '2018-08-30 05:04:36', '2018-08-30 05:04:36'),
(6, 'Dpto Créditos y Cobranzas', 'Administracion de clientes', NULL, '2018-08-30 05:05:17', '2018-08-30 05:05:17'),
(7, 'Servicios Generales', 'Ventanilla', NULL, '2018-08-30 05:06:57', '2018-08-30 05:06:57');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_resets_table', 1),
(2, '2018_08_21_125829_create_departamentos_table', 1),
(3, '2018_08_21_12590000_create_users_table', 1),
(4, '2018_08_21_131205_create_tipo_tramites_table', 1),
(5, '2018_08_21_131823_create_recorridos_table', 1),
(6, '2018_08_21_133848_create_clientes_table', 1),
(7, '2018_08_21_134240_create_tramites_table', 1),
(8, '2018_08_21_135905_create_respaldos_table', 1),
(9, '2018_08_23_021823_create_privilegios_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `privilegios`
--

CREATE TABLE `privilegios` (
  `id` int(10) UNSIGNED NOT NULL,
  `departamento_id` int(10) UNSIGNED NOT NULL,
  `ruta` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` tinyint(1) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `privilegios`
--

INSERT INTO `privilegios` (`id`, `departamento_id`, `ruta`, `activo`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'departamento', 1, NULL, '2018-08-30 04:56:26', '2018-08-30 04:56:26'),
(2, 1, 'usuario', 1, NULL, '2018-08-30 04:56:26', '2018-08-30 04:56:26'),
(3, 1, 'privilegio', 1, NULL, '2018-08-30 04:56:26', '2018-08-30 04:56:26'),
(4, 1, 'cliente', 1, NULL, '2018-08-30 04:56:26', '2018-08-30 04:56:26'),
(5, 1, 'tipo_tramite', 1, NULL, '2018-08-30 04:56:26', '2018-08-30 04:56:26'),
(6, 1, 'tramite', 1, NULL, '2018-08-30 04:56:26', '2018-08-30 04:56:26'),
(7, 1, 'recorrido', 1, NULL, '2018-08-30 04:56:26', '2018-08-30 04:56:26'),
(8, 2, 'departamento', 1, NULL, '2018-08-30 05:02:16', '2018-08-30 05:02:16'),
(9, 2, 'usuario', 1, NULL, '2018-08-30 05:02:16', '2018-08-30 05:02:16'),
(10, 2, 'privilegio', 1, NULL, '2018-08-30 05:02:16', '2018-08-30 05:02:16'),
(11, 2, 'cliente', 1, NULL, '2018-08-30 05:02:16', '2018-08-30 05:02:16'),
(12, 2, 'tipo_tramite', 1, NULL, '2018-08-30 05:02:16', '2018-08-30 05:02:16'),
(13, 2, 'tramite', 1, NULL, '2018-08-30 05:02:16', '2018-08-30 05:02:16'),
(14, 2, 'recorrido', 1, NULL, '2018-08-30 05:02:16', '2018-08-30 05:02:16'),
(15, 3, 'departamento', 0, NULL, '2018-08-30 05:03:17', '2018-08-30 05:10:35'),
(16, 3, 'usuario', 0, NULL, '2018-08-30 05:03:17', '2018-08-30 05:10:35'),
(17, 3, 'privilegio', 0, NULL, '2018-08-30 05:03:17', '2018-08-30 05:10:35'),
(18, 3, 'cliente', 1, NULL, '2018-08-30 05:03:17', '2018-08-30 05:03:17'),
(19, 3, 'tipo_tramite', 1, NULL, '2018-08-30 05:03:17', '2018-08-30 05:03:17'),
(20, 3, 'tramite', 1, NULL, '2018-08-30 05:03:17', '2018-08-30 05:03:17'),
(21, 3, 'recorrido', 1, NULL, '2018-08-30 05:03:17', '2018-08-30 05:03:17'),
(22, 4, 'departamento', 0, NULL, '2018-08-30 05:03:51', '2018-08-30 05:10:56'),
(23, 4, 'usuario', 0, NULL, '2018-08-30 05:03:52', '2018-08-30 05:10:56'),
(24, 4, 'privilegio', 0, NULL, '2018-08-30 05:03:52', '2018-08-30 05:10:56'),
(25, 4, 'cliente', 1, NULL, '2018-08-30 05:03:52', '2018-08-30 05:03:52'),
(26, 4, 'tipo_tramite', 1, NULL, '2018-08-30 05:03:52', '2018-08-30 05:03:52'),
(27, 4, 'tramite', 1, NULL, '2018-08-30 05:03:52', '2018-08-30 05:03:52'),
(28, 4, 'recorrido', 1, NULL, '2018-08-30 05:03:52', '2018-08-30 05:03:52'),
(29, 5, 'departamento', 0, NULL, '2018-08-30 05:04:36', '2018-08-30 05:10:47'),
(30, 5, 'usuario', 0, NULL, '2018-08-30 05:04:36', '2018-08-30 05:10:47'),
(31, 5, 'privilegio', 0, NULL, '2018-08-30 05:04:36', '2018-08-30 05:10:47'),
(32, 5, 'cliente', 1, NULL, '2018-08-30 05:04:36', '2018-08-30 05:04:36'),
(33, 5, 'tipo_tramite', 1, NULL, '2018-08-30 05:04:36', '2018-08-30 05:04:36'),
(34, 5, 'tramite', 1, NULL, '2018-08-30 05:04:36', '2018-08-30 05:04:36'),
(35, 5, 'recorrido', 1, NULL, '2018-08-30 05:04:36', '2018-08-30 05:04:36'),
(36, 6, 'departamento', 0, NULL, '2018-08-30 05:05:17', '2018-08-30 05:10:15'),
(37, 6, 'usuario', 0, NULL, '2018-08-30 05:05:17', '2018-08-30 05:10:15'),
(38, 6, 'privilegio', 0, NULL, '2018-08-30 05:05:17', '2018-08-30 05:10:15'),
(39, 6, 'cliente', 1, NULL, '2018-08-30 05:05:17', '2018-08-30 05:05:17'),
(40, 6, 'tipo_tramite', 1, NULL, '2018-08-30 05:05:17', '2018-08-30 05:05:17'),
(41, 6, 'tramite', 1, NULL, '2018-08-30 05:05:18', '2018-08-30 05:05:18'),
(42, 6, 'recorrido', 1, NULL, '2018-08-30 05:05:18', '2018-08-30 05:05:18'),
(43, 7, 'departamento', 0, NULL, '2018-08-30 05:06:57', '2018-08-30 05:11:04'),
(44, 7, 'usuario', 0, NULL, '2018-08-30 05:06:57', '2018-08-30 05:11:04'),
(45, 7, 'privilegio', 0, NULL, '2018-08-30 05:06:57', '2018-08-30 05:11:04'),
(46, 7, 'cliente', 1, NULL, '2018-08-30 05:06:57', '2018-08-30 05:06:57'),
(47, 7, 'tipo_tramite', 1, NULL, '2018-08-30 05:06:57', '2018-08-30 05:06:57'),
(48, 7, 'tramite', 1, NULL, '2018-08-30 05:06:57', '2018-08-30 05:06:57'),
(49, 7, 'recorrido', 1, NULL, '2018-08-30 05:06:57', '2018-08-30 05:06:57');

-- --------------------------------------------------------

--
-- Table structure for table `recorridos`
--

CREATE TABLE `recorridos` (
  `id` int(10) UNSIGNED NOT NULL,
  `tipo_tramite_id` int(10) UNSIGNED NOT NULL,
  `posicion` int(10) UNSIGNED NOT NULL,
  `tiempo_estimado` int(11) NOT NULL,
  `observaciones` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `departamento_id` int(10) UNSIGNED NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `respaldos`
--

CREATE TABLE `respaldos` (
  `id` int(10) UNSIGNED NOT NULL,
  `tramite_id` int(10) UNSIGNED NOT NULL,
  `archivo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tipo_tramites`
--

CREATE TABLE `tipo_tramites` (
  `id` int(10) UNSIGNED NOT NULL,
  `departamento_id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tipo_tramites`
--

INSERT INTO `tipo_tramites` (`id`, `departamento_id`, `nombre`, `descripcion`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 4, 'Nombramiento de personal', 'Aprobación de gerencia y firma de nombramiento.', NULL, '2018-08-30 06:55:05', '2018-08-30 06:55:05'),
(2, 2, 'Gestión de Correspondencia', 'Elaboración de Acuerdo de Gerencia', NULL, '2018-08-30 06:55:30', '2018-08-30 06:55:30'),
(3, 6, 'Asuntos Administrativos', 'Cancelación de Expedientes PINFOR', NULL, '2018-08-30 06:56:10', '2018-08-30 06:56:10'),
(4, 2, 'Planificación Estratégica Institucional', 'Reuniones de Coordinación', NULL, '2018-08-30 06:57:15', '2018-08-30 06:57:15'),
(5, 2, 'Impugnación administrativa.', 'Dar trámite a los Recursos Legales', NULL, '2018-08-30 06:58:14', '2018-08-30 06:58:14');

-- --------------------------------------------------------

--
-- Table structure for table `tramites`
--

CREATE TABLE `tramites` (
  `id` int(10) UNSIGNED NOT NULL,
  `cliente_id` int(10) UNSIGNED NOT NULL,
  `tipo_tramite_id` int(10) UNSIGNED NOT NULL,
  `archivo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` enum('finalizado','proceso','pendiente') COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_inicio` date NOT NULL,
  `recorrido_id` int(10) UNSIGNED NOT NULL,
  `observacion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `permiso` enum('publico','recorrido') COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `departamento_id` int(10) UNSIGNED NOT NULL,
  `nombres` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cuenta` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `usuarios`
--

INSERT INTO `usuarios` (`id`, `departamento_id`, `nombres`, `cuenta`, `password`, `deleted_at`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 1, 'Washington Figueroa', 'DTE', '$2y$10$pCOVU8T82/DK9s5c./E/c.vvsNvCBV8Zd7cieAL5YhCP6ONoBCV3m', NULL, NULL, '2018-08-30 04:56:26', '2018-08-30 04:56:26'),
(2, 2, 'Ing. Xavier Sevilla', 'Multiserec', '$2y$10$P.D.xhVTNuEM1fmJ75rUeOTBssNbWTT8ekR9U7S4p89DYLcZQ7QuC', NULL, NULL, '2018-08-30 05:15:19', '2018-08-30 05:15:19'),
(3, 6, 'Ing. Ondina Pasca', 'Ondi', '$2y$10$P8.mYFVdUP.G7AmckKs2WO/DT6qINh9bDTXvIGo1x3f3YJTKS7az.', NULL, NULL, '2018-08-30 05:47:01', '2018-08-30 05:47:01'),
(4, 3, 'Ing. Estuardo Figueroa', 'Figo', '$2y$10$k1kQOUuGzbG2xBUSYXRds.79XwpeBVwl2Q/HDFFi9mr9FrmdObc/e', NULL, NULL, '2018-08-30 05:48:01', '2018-08-30 05:48:01');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `clientes_identificacion_unique` (`identificacion`);

--
-- Indexes for table `departamentos`
--
ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `privilegios`
--
ALTER TABLE `privilegios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `privilegios_departamento_id_foreign` (`departamento_id`);

--
-- Indexes for table `recorridos`
--
ALTER TABLE `recorridos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recorridos_tipo_tramite_id_foreign` (`tipo_tramite_id`);

--
-- Indexes for table `respaldos`
--
ALTER TABLE `respaldos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tipo_tramites`
--
ALTER TABLE `tipo_tramites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tipo_tramites_departamento_id_foreign` (`departamento_id`);

--
-- Indexes for table `tramites`
--
ALTER TABLE `tramites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tramites_cliente_id_foreign` (`cliente_id`),
  ADD KEY `tramites_tipo_tramite_id_foreign` (`tipo_tramite_id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `usuarios_cuenta_unique` (`cuenta`),
  ADD KEY `usuarios_departamento_id_foreign` (`departamento_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `privilegios`
--
ALTER TABLE `privilegios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `recorridos`
--
ALTER TABLE `recorridos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `respaldos`
--
ALTER TABLE `respaldos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tipo_tramites`
--
ALTER TABLE `tipo_tramites`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tramites`
--
ALTER TABLE `tramites`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `privilegios`
--
ALTER TABLE `privilegios`
  ADD CONSTRAINT `privilegios_departamento_id_foreign` FOREIGN KEY (`departamento_id`) REFERENCES `departamentos` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `recorridos`
--
ALTER TABLE `recorridos`
  ADD CONSTRAINT `recorridos_tipo_tramite_id_foreign` FOREIGN KEY (`tipo_tramite_id`) REFERENCES `tipo_tramites` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tipo_tramites`
--
ALTER TABLE `tipo_tramites`
  ADD CONSTRAINT `tipo_tramites_departamento_id_foreign` FOREIGN KEY (`departamento_id`) REFERENCES `departamentos` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `tramites`
--
ALTER TABLE `tramites`
  ADD CONSTRAINT `tramites_cliente_id_foreign` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `tramites_tipo_tramite_id_foreign` FOREIGN KEY (`tipo_tramite_id`) REFERENCES `tipo_tramites` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `usuarios_departamento_id_foreign` FOREIGN KEY (`departamento_id`) REFERENCES `departamentos` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
