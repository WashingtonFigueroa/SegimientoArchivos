-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 26, 2018 at 07:09 PM
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
(1, 'cedula', '8875255', 'Ari Goodwin MD', '312-814-1264', '(426) 521-0241 x89363', 'koss.bridie@hotmail.com', NULL, NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(2, 'ruc', '172009752', 'Dwight Schowalter', '+1.381.967.7895', '(386) 780-9323', 'palma69@yahoo.com', NULL, NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(3, 'cedula', '61427992', 'May Rippin', '+1-479-261-7403', '325-225-6822 x58070', 'hal68@hotmail.com', NULL, NULL, '2018-08-24 08:25:03', '2018-08-24 08:25:03'),
(4, 'ruc', '42141891', 'Prof. Elwin Hahn', '552.218.7579 x7493', '619-906-7358 x37965', 'evonrueden@hotmail.com', NULL, NULL, '2018-08-24 08:25:05', '2018-08-24 08:25:05'),
(5, 'cedula', '87125408', 'Torey Bailey DVM', '354-795-5466 x381', '+12353169000', 'marco.hoeger@yahoo.com', NULL, NULL, '2018-08-24 08:25:07', '2018-08-24 08:25:07'),
(6, 'cedula', '1003833447', 'Ada Lueilwitz', '111111111', '3655555555', 'mozelle88@gmail.com', NULL, NULL, '2018-08-24 08:25:09', '2018-08-24 21:13:59'),
(7, 'cedula', '238156986', 'Dr. Ena Hoeger', '794.433.5166', '+1-580-488-3158', 'jakubowski.kathleen@gmail.com', NULL, NULL, '2018-08-24 08:25:11', '2018-08-24 08:25:11'),
(8, 'ruc', '71607624', 'Sally Champlin I', '1-525-544-8049 x343', '680.713.6446', 'bobbie.hilpert@gmail.com', NULL, NULL, '2018-08-24 08:25:13', '2018-08-24 08:25:13'),
(9, 'cedula', '81166391', 'Mrs. Betsy Wyman', '(883) 305-5886', '1-457-451-6265', 'kmedhurst@gmail.com', NULL, NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(10, 'ruc', '227294861', 'Jaylan Wilkinson', '(534) 753-0426 x859', '(607) 300-7877', 'heller.jerrold@yahoo.com', NULL, NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17');

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
(1, 'Administrador', 'DTE', NULL, '2018-08-24 08:24:58', '2018-08-26 18:17:35'),
(2, 'Dpto Financiero', 'educacion', NULL, '2018-08-24 08:25:00', '2018-08-26 18:17:27'),
(5, 'Dpto Talento Humano', 'Comision', NULL, '2018-08-24 08:25:06', '2018-08-26 18:17:42'),
(8, 'Dpto Contabilidad', 'Representantes', NULL, '2018-08-24 08:25:13', '2018-08-26 18:16:59'),
(9, 'Dpto Creditos y Cobranzas', 'creditos', NULL, '2018-08-24 08:25:15', '2018-08-26 18:17:09'),
(10, 'Servicios Generales', 'Admistracion', NULL, '2018-08-24 08:25:16', '2018-08-24 22:05:50'),
(13, 'Dpto Recaudacion', 'Recaudacion', NULL, '2018-08-25 04:50:50', '2018-08-25 04:50:50'),
(14, 'Gerencia', 'Dpto Principal', NULL, '2018-08-26 21:19:46', '2018-08-26 21:19:46'),
(15, 'dsfds', 'dsf', '2018-08-26 21:22:34', '2018-08-26 21:22:25', '2018-08-26 21:22:34');

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
(1, '2014_10_12_000000_create_users_table', 1),
(18, '2014_10_12_100000_create_password_resets_table', 2),
(19, '2018_08_21_125829_create_departamentos_table', 2),
(20, '2018_08_21_12590000_create_users_table', 2),
(21, '2018_08_21_131205_create_tipo_tramites_table', 2),
(22, '2018_08_21_131823_create_recorridos_table', 2),
(23, '2018_08_21_133848_create_clientes_table', 2),
(24, '2018_08_21_134240_create_tramites_table', 2),
(25, '2018_08_21_135905_create_respaldos_table', 2),
(26, '2018_08_23_021823_create_privilegios_table', 2);

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
(18, 1, 'departamento', 1, NULL, '2018-08-25 07:55:54', '2018-08-25 07:55:54'),
(19, 1, 'usuario', 1, NULL, '2018-08-25 07:55:54', '2018-08-25 07:55:54'),
(20, 1, 'privilegio', 1, NULL, '2018-08-25 07:55:54', '2018-08-25 07:55:54'),
(21, 1, 'cliente', 1, NULL, '2018-08-25 07:55:54', '2018-08-25 07:55:54'),
(22, 1, 'tipo_tramite', 1, NULL, '2018-08-25 07:55:54', '2018-08-25 07:55:54'),
(23, 1, 'tramite', 1, NULL, '2018-08-25 07:55:54', '2018-08-25 07:55:54'),
(24, 1, 'recorrido', 1, NULL, '2018-08-25 07:55:54', '2018-08-25 07:55:54'),
(25, 8, 'departamento', 0, NULL, '2018-08-26 18:19:33', '2018-08-26 18:19:34'),
(26, 8, 'usuario', 0, NULL, '2018-08-26 18:19:33', '2018-08-26 18:19:34'),
(27, 8, 'privilegio', 0, NULL, '2018-08-26 18:19:33', '2018-08-26 18:19:34'),
(28, 8, 'cliente', 1, NULL, '2018-08-26 18:19:34', '2018-08-26 18:19:34'),
(29, 8, 'tipo_tramite', 1, NULL, '2018-08-26 18:19:34', '2018-08-26 18:19:34'),
(30, 8, 'tramite', 1, NULL, '2018-08-26 18:19:34', '2018-08-26 18:19:34'),
(31, 8, 'recorrido', 1, NULL, '2018-08-26 18:19:34', '2018-08-26 18:19:34'),
(32, 10, 'departamento', 0, NULL, '2018-08-26 18:29:23', '2018-08-26 18:29:24'),
(33, 10, 'usuario', 0, NULL, '2018-08-26 18:29:23', '2018-08-26 18:29:24'),
(34, 10, 'privilegio', 0, NULL, '2018-08-26 18:29:23', '2018-08-26 18:29:24'),
(35, 10, 'cliente', 1, NULL, '2018-08-26 18:29:23', '2018-08-26 18:29:24'),
(36, 10, 'tipo_tramite', 1, NULL, '2018-08-26 18:29:23', '2018-08-26 18:29:24'),
(37, 10, 'tramite', 1, NULL, '2018-08-26 18:29:24', '2018-08-26 18:29:24'),
(38, 10, 'recorrido', 1, NULL, '2018-08-26 18:29:24', '2018-08-26 18:29:24'),
(39, 14, 'departamento', 1, NULL, '2018-08-26 21:19:47', '2018-08-26 21:19:47'),
(40, 14, 'usuario', 1, NULL, '2018-08-26 21:19:47', '2018-08-26 21:19:47'),
(41, 14, 'privilegio', 1, NULL, '2018-08-26 21:19:47', '2018-08-26 21:19:47'),
(42, 14, 'cliente', 1, NULL, '2018-08-26 21:19:47', '2018-08-26 21:19:47'),
(43, 14, 'tipo_tramite', 1, NULL, '2018-08-26 21:19:47', '2018-08-26 21:19:47'),
(44, 14, 'tramite', 1, NULL, '2018-08-26 21:19:47', '2018-08-26 21:19:47'),
(45, 14, 'recorrido', 1, NULL, '2018-08-26 21:19:47', '2018-08-26 21:19:47'),
(46, 15, 'departamento', 1, '2018-08-26 21:22:34', '2018-08-26 21:22:26', '2018-08-26 21:22:34'),
(47, 15, 'usuario', 1, '2018-08-26 21:22:34', '2018-08-26 21:22:26', '2018-08-26 21:22:34'),
(48, 15, 'privilegio', 1, '2018-08-26 21:22:34', '2018-08-26 21:22:26', '2018-08-26 21:22:34'),
(49, 15, 'cliente', 1, '2018-08-26 21:22:34', '2018-08-26 21:22:26', '2018-08-26 21:22:34'),
(50, 15, 'tipo_tramite', 1, '2018-08-26 21:22:34', '2018-08-26 21:22:26', '2018-08-26 21:22:34'),
(51, 15, 'tramite', 1, '2018-08-26 21:22:34', '2018-08-26 21:22:26', '2018-08-26 21:22:34'),
(52, 15, 'recorrido', 1, '2018-08-26 21:22:34', '2018-08-26 21:22:26', '2018-08-26 21:22:34'),
(53, 9, 'departamento', 0, NULL, '2018-08-26 21:31:39', '2018-08-26 21:31:40'),
(54, 9, 'usuario', 0, NULL, '2018-08-26 21:31:39', '2018-08-26 21:31:40'),
(55, 9, 'privilegio', 0, NULL, '2018-08-26 21:31:40', '2018-08-26 21:31:40'),
(56, 9, 'cliente', 1, NULL, '2018-08-26 21:31:40', '2018-08-26 21:31:40'),
(57, 9, 'tipo_tramite', 1, NULL, '2018-08-26 21:31:40', '2018-08-26 21:31:40'),
(58, 9, 'tramite', 1, NULL, '2018-08-26 21:31:40', '2018-08-26 21:31:40'),
(59, 9, 'recorrido', 1, NULL, '2018-08-26 21:31:40', '2018-08-26 21:31:40'),
(60, 2, 'departamento', 0, NULL, '2018-08-26 21:31:52', '2018-08-26 21:31:52'),
(61, 2, 'usuario', 0, NULL, '2018-08-26 21:31:52', '2018-08-26 21:31:53'),
(62, 2, 'privilegio', 0, NULL, '2018-08-26 21:31:52', '2018-08-26 21:31:53'),
(63, 2, 'cliente', 1, NULL, '2018-08-26 21:31:52', '2018-08-26 21:31:53'),
(64, 2, 'tipo_tramite', 1, NULL, '2018-08-26 21:31:52', '2018-08-26 21:31:53'),
(65, 2, 'tramite', 1, NULL, '2018-08-26 21:31:52', '2018-08-26 21:31:53'),
(66, 2, 'recorrido', 1, NULL, '2018-08-26 21:31:52', '2018-08-26 21:31:53'),
(67, 5, 'departamento', 0, NULL, '2018-08-26 21:32:01', '2018-08-26 21:32:02'),
(68, 5, 'usuario', 0, NULL, '2018-08-26 21:32:01', '2018-08-26 21:32:02'),
(69, 5, 'privilegio', 0, NULL, '2018-08-26 21:32:01', '2018-08-26 21:32:02'),
(70, 5, 'cliente', 1, NULL, '2018-08-26 21:32:01', '2018-08-26 21:32:02'),
(71, 5, 'tipo_tramite', 1, NULL, '2018-08-26 21:32:01', '2018-08-26 21:32:02'),
(72, 5, 'tramite', 1, NULL, '2018-08-26 21:32:01', '2018-08-26 21:32:02'),
(73, 5, 'recorrido', 1, NULL, '2018-08-26 21:32:02', '2018-08-26 21:32:02'),
(74, 13, 'departamento', 0, NULL, '2018-08-26 21:32:20', '2018-08-26 21:32:21'),
(75, 13, 'usuario', 0, NULL, '2018-08-26 21:32:20', '2018-08-26 21:32:21'),
(76, 13, 'privilegio', 0, NULL, '2018-08-26 21:32:20', '2018-08-26 21:32:21'),
(77, 13, 'cliente', 1, NULL, '2018-08-26 21:32:20', '2018-08-26 21:32:20'),
(78, 13, 'tipo_tramite', 1, NULL, '2018-08-26 21:32:20', '2018-08-26 21:32:20'),
(79, 13, 'tramite', 1, NULL, '2018-08-26 21:32:20', '2018-08-26 21:32:20'),
(80, 13, 'recorrido', 1, NULL, '2018-08-26 21:32:21', '2018-08-26 21:32:21');

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

--
-- Dumping data for table `recorridos`
--

INSERT INTO `recorridos` (`id`, `tipo_tramite_id`, `posicion`, `tiempo_estimado`, `observaciones`, `departamento_id`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 48, 'Nobis illum quas quisquam molestias excepturi. Delectus ut est qui recusandae itaque vel ut.', 1, NULL, '2018-08-24 08:24:58', '2018-08-24 08:24:58'),
(2, 1, 6, 63, 'Saepe facilis corrupti non nisi expedita. Ut velit est praesentium. Enim commodi aperiam amet a.', 1, NULL, '2018-08-24 08:24:58', '2018-08-24 08:24:58'),
(3, 1, 1, 8, 'Accusantium non nisi sit dolores est. Sit qui soluta omnis officia enim veritatis similique.', 1, NULL, '2018-08-24 08:24:58', '2018-08-24 08:24:58'),
(4, 1, 13, 13, 'Cum quidem minima doloremque. Consequatur sint voluptas placeat praesentium occaecati omnis qui.', 1, NULL, '2018-08-24 08:24:58', '2018-08-24 08:24:58'),
(5, 1, 7, 48, 'Modi fuga aut asperiores ratione quia culpa. Assumenda magnam reprehenderit sed illo consectetur.', 1, NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(6, 1, 3, 43, 'Rem omnis rem aliquid eum repellendus. Aliquam vitae sit delectus nisi asperiores quidem.', 1, NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(7, 1, 8, 20, 'Sequi et eius minima modi. Placeat corporis vel rerum minima maxime.', 1, NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(8, 1, 11, 70, 'Nobis facere quisquam dolorem eligendi sint nihil delectus et. Saepe aut modi reprehenderit fuga.', 1, NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(9, 1, 1, 58, 'Qui similique ratione et. Ea minima vitae quo fugiat. Et nobis itaque delectus vel.', 1, NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(10, 1, 4, 40, 'Est dolore et cum odit. Ab est et autem rerum. Ea consequatur modi molestias soluta ad aut.', 1, NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(11, 2, 8, 33, 'Eveniet sed animi quis ea corporis. Voluptatum cumque eum beatae est. Nobis corrupti eum ea rerum.', 2, NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(12, 2, 13, 19, 'Et deleniti consectetur amet quae unde quis. Dicta numquam aut nihil nisi. Quo sed id earum.', 2, NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(13, 2, 9, 46, 'Et qui autem neque itaque et. Et voluptas qui excepturi sed. Dicta dolores ipsa nihil et.', 2, NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(14, 2, 15, 65, 'Rerum qui quod sequi quam asperiores. Esse vitae esse ipsam ut.', 2, NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(15, 2, 15, 44, 'Reiciendis incidunt nihil aperiam repellendus vel est. Qui voluptas esse voluptas cumque sint.', 2, NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(16, 2, 11, 1, 'Fugiat consectetur in in recusandae eaque rerum. Rem placeat sed doloribus expedita rerum.', 2, NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(17, 2, 8, 5, 'Et iusto aperiam eos aut quae. Omnis laudantium doloremque non sunt. Quia est dolor numquam in.', 2, NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(18, 2, 6, 15, 'Est iusto eum architecto est. Eaque qui aut magnam enim molestias.', 2, NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(19, 2, 12, 49, 'Atque illo dolor nihil molestiae. Error repellat nesciunt maxime veniam blanditiis molestiae.', 2, NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(20, 2, 1, 38, 'Saepe ea ipsum et voluptate voluptas quia. Eligendi totam in ipsa rerum amet voluptas.', 2, NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(41, 5, 14, 2, 'Et cupiditate vel dignissimos in animi. Ut rerum non et. Eos est nulla quo fuga.', 5, NULL, '2018-08-24 08:25:07', '2018-08-24 08:25:07'),
(42, 5, 3, 44, 'Minima illum est dolor in quia animi. Et harum quaerat porro fugiat est.', 5, NULL, '2018-08-24 08:25:07', '2018-08-24 08:25:07'),
(43, 5, 2, 58, 'Ullam qui in facere et et non. Qui eum doloremque veritatis magni.', 5, NULL, '2018-08-24 08:25:07', '2018-08-24 08:25:07'),
(44, 5, 10, 10, 'Tempora nisi enim sunt minima consequatur et. Aut id qui provident earum molestias esse.', 5, NULL, '2018-08-24 08:25:07', '2018-08-24 08:25:07'),
(45, 5, 7, 54, 'Accusantium sapiente repellendus tempora perspiciatis. In eum voluptatem sint veniam qui.', 5, NULL, '2018-08-24 08:25:07', '2018-08-24 08:25:07'),
(46, 5, 11, 8, 'Et ullam officia quisquam ea eius numquam. Non quasi fugit enim sit.', 5, NULL, '2018-08-24 08:25:07', '2018-08-24 08:25:07'),
(47, 5, 11, 27, 'Quaerat nesciunt quidem dolore sit. Sed earum animi ut inventore ipsa.', 5, NULL, '2018-08-24 08:25:07', '2018-08-24 08:25:07'),
(48, 5, 15, 36, 'Earum ut nihil maiores in. Nostrum ut cumque debitis quaerat magnam. Est qui rem quia id.', 5, NULL, '2018-08-24 08:25:07', '2018-08-24 08:25:07'),
(49, 5, 3, 63, 'Sed doloremque quaerat necessitatibus. Voluptatem quidem fugit qui quia blanditiis.', 5, NULL, '2018-08-24 08:25:07', '2018-08-24 08:25:07'),
(50, 5, 15, 63, 'Qui aut odio voluptatem nam. Rerum sunt non fuga optio. Non eum occaecati occaecati tenetur ut est.', 5, NULL, '2018-08-24 08:25:07', '2018-08-24 08:25:07'),
(71, 8, 14, 12, 'Id consequatur molestias iste. Quis sit dolor unde et nulla beatae quam.', 8, NULL, '2018-08-24 08:25:13', '2018-08-24 08:25:13'),
(72, 8, 15, 6, 'Sed enim ducimus earum quidem ex. Minima aliquid nostrum labore laboriosam aut quidem.', 8, NULL, '2018-08-24 08:25:13', '2018-08-24 08:25:13'),
(73, 8, 3, 41, 'Autem harum et nesciunt aut. Deserunt nihil voluptatem dolores officia ea nesciunt.', 8, NULL, '2018-08-24 08:25:13', '2018-08-24 08:25:13'),
(74, 8, 6, 9, 'Voluptas in quia est architecto quis. Ut commodi nemo sint et.', 8, NULL, '2018-08-24 08:25:13', '2018-08-24 08:25:13'),
(75, 8, 3, 21, 'Non dicta veniam nemo. Dolorem modi quisquam quas. Quam porro atque reprehenderit minima.', 8, NULL, '2018-08-24 08:25:13', '2018-08-24 08:25:13'),
(76, 8, 15, 56, 'Reprehenderit dolorem voluptas voluptas libero. Enim qui natus cum nihil atque saepe quis.', 8, NULL, '2018-08-24 08:25:13', '2018-08-24 08:25:13'),
(77, 8, 15, 62, 'Consequuntur natus et quia rem impedit earum culpa. Corrupti distinctio quis cupiditate.', 8, NULL, '2018-08-24 08:25:13', '2018-08-24 08:25:13'),
(78, 8, 5, 58, 'Est voluptas omnis eum iusto reiciendis iure sit voluptatem. Aliquam libero qui sint rerum aut.', 8, NULL, '2018-08-24 08:25:13', '2018-08-24 08:25:13'),
(79, 8, 9, 15, 'Exercitationem qui qui placeat sunt est earum illum voluptates. Est nam ut recusandae et.', 8, NULL, '2018-08-24 08:25:13', '2018-08-24 08:25:13'),
(80, 8, 8, 31, 'Aut vitae et corrupti molestiae. Voluptas quo reprehenderit odio iste et.', 8, NULL, '2018-08-24 08:25:13', '2018-08-24 08:25:13'),
(81, 9, 11, 62, 'Rerum sint harum ratione ut ad. Qui qui nihil laboriosam et voluptate nulla quod.', 9, NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(82, 9, 5, 27, 'Sit aspernatur a neque. Voluptatem quos voluptas dolor vitae.', 9, NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(83, 9, 12, 2, 'Aperiam quibusdam sit dolor quis labore et hic. Rerum ut doloribus aperiam facere.', 9, NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(84, 9, 12, 49, 'Sint commodi maxime ut odio illum suscipit accusantium. Ab rerum at fugit consequuntur.', 9, NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(85, 9, 3, 39, 'Voluptatem mollitia quaerat occaecati quasi. Quisquam officiis optio velit.', 9, NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(86, 9, 4, 1, 'Distinctio velit aut quasi aut sunt quis qui. Voluptatem aperiam doloribus sed odit.', 9, NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(87, 9, 2, 56, 'Consequatur sit facere rerum error tempore. Et corrupti ut fugiat. Nisi ut qui assumenda quod.', 9, NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(88, 9, 7, 22, 'Quidem sed recusandae sit odio sapiente magnam. Dicta laudantium ea vel modi.', 9, NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(89, 9, 12, 55, 'Dolores ut quia autem a numquam assumenda quia. Fuga sint eos voluptatem saepe dicta.', 9, NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(90, 9, 15, 11, 'Error iure quas mollitia eos saepe. Quasi excepturi rerum non omnis quam rerum nesciunt officiis.', 9, NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(91, 10, 13, 53, 'Placeat quis excepturi nemo reprehenderit. Impedit eos commodi ut maxime alias.', 10, NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(92, 10, 5, 11, 'Voluptatem et quia numquam libero iusto. Labore atque pariatur quia.', 10, NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(93, 10, 13, 33, 'Nihil blanditiis libero sit. Quo a et et. Accusamus voluptatem id fugit.', 10, NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(94, 10, 8, 41, 'Error et atque assumenda rerum. Ipsam ullam consequuntur voluptatibus a accusantium autem vitae.', 10, NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(95, 10, 5, 47, 'Illum explicabo officia et sed eum sunt. Veritatis dolorum odit sequi.', 10, NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(96, 10, 7, 35, 'Sint et aut provident. Beatae dolor esse et quidem. Sint laudantium quasi nisi quis.', 10, NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(97, 10, 6, 35, 'In nostrum molestiae ut sunt sunt aut cupiditate. Praesentium dolores eveniet error aliquam.', 10, NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(98, 10, 6, 66, 'Ut aut praesentium laborum voluptatem. Expedita nihil vero officia est animi.', 10, NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(99, 10, 9, 1, 'Qui voluptatem in nesciunt id officiis in aut et. Alias molestiae sequi repellat fugit nulla.', 10, NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(100, 10, 13, 4, 'Necessitatibus dicta consequatur vel. Dicta saepe in quidem eum dolor hic. Ipsam magnam ea debitis.', 10, NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17');

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

--
-- Dumping data for table `respaldos`
--

INSERT INTO `respaldos` (`id`, `tramite_id`, `archivo`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 'reprehenderit', NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(2, 2, 'ratione', NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(3, 3, 'molestias', NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(4, 4, 'perspiciatis', NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(5, 5, 'nisi', NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(6, 6, 'minus', NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(7, 7, 'provident', NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(8, 8, 'velit', NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(9, 9, 'sequi', NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(10, 10, 'tempora', NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(11, 11, 'quia', NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(12, 12, 'rerum', NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(13, 13, 'voluptatem', NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(14, 14, 'ad', NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(15, 15, 'non', NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(16, 16, 'nam', NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(17, 17, 'alias', NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(18, 18, 'delectus', NULL, '2018-08-24 08:25:02', '2018-08-24 08:25:02'),
(19, 19, 'qui', NULL, '2018-08-24 08:25:02', '2018-08-24 08:25:02'),
(20, 20, 'sed', NULL, '2018-08-24 08:25:02', '2018-08-24 08:25:02'),
(21, 21, 'dolores', NULL, '2018-08-24 08:25:03', '2018-08-24 08:25:03'),
(22, 22, 'officiis', NULL, '2018-08-24 08:25:03', '2018-08-24 08:25:03'),
(23, 23, 'odio', NULL, '2018-08-24 08:25:03', '2018-08-24 08:25:03'),
(24, 24, 'consequatur', NULL, '2018-08-24 08:25:03', '2018-08-24 08:25:03'),
(25, 25, 'et', NULL, '2018-08-24 08:25:03', '2018-08-24 08:25:03'),
(26, 26, 'rerum', NULL, '2018-08-24 08:25:03', '2018-08-24 08:25:03'),
(27, 27, 'vitae', NULL, '2018-08-24 08:25:03', '2018-08-24 08:25:03'),
(28, 28, 'fugiat', NULL, '2018-08-24 08:25:03', '2018-08-24 08:25:03'),
(29, 29, 'quae', NULL, '2018-08-24 08:25:04', '2018-08-24 08:25:04'),
(30, 30, 'voluptatem', NULL, '2018-08-24 08:25:04', '2018-08-24 08:25:04'),
(31, 31, 'deleniti', NULL, '2018-08-24 08:25:05', '2018-08-24 08:25:05'),
(32, 32, 'laborum', NULL, '2018-08-24 08:25:05', '2018-08-24 08:25:05'),
(33, 33, 'incidunt', NULL, '2018-08-24 08:25:05', '2018-08-24 08:25:05'),
(34, 34, 'aut', NULL, '2018-08-24 08:25:05', '2018-08-24 08:25:05'),
(35, 35, 'inventore', NULL, '2018-08-24 08:25:05', '2018-08-24 08:25:05'),
(36, 36, 'voluptas', NULL, '2018-08-24 08:25:06', '2018-08-24 08:25:06'),
(37, 37, 'vero', NULL, '2018-08-24 08:25:06', '2018-08-24 08:25:06'),
(38, 38, 'est', NULL, '2018-08-24 08:25:06', '2018-08-24 08:25:06'),
(39, 39, 'magni', NULL, '2018-08-24 08:25:06', '2018-08-24 08:25:06'),
(40, 40, 'quam', NULL, '2018-08-24 08:25:06', '2018-08-24 08:25:06'),
(41, 41, 'voluptas', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(42, 42, 'ut', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(43, 43, 'quam', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(44, 44, 'esse', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(45, 45, 'voluptas', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(46, 46, 'aut', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(47, 47, 'nisi', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(48, 48, 'sed', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(49, 49, 'repudiandae', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(50, 50, 'error', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(51, 51, 'quis', NULL, '2018-08-24 08:25:09', '2018-08-24 08:25:09'),
(52, 52, 'consequatur', NULL, '2018-08-24 08:25:09', '2018-08-24 08:25:09'),
(53, 53, 'libero', NULL, '2018-08-24 08:25:10', '2018-08-24 08:25:10'),
(54, 54, 'vero', NULL, '2018-08-24 08:25:10', '2018-08-24 08:25:10'),
(55, 55, 'tenetur', NULL, '2018-08-24 08:25:10', '2018-08-24 08:25:10'),
(56, 56, 'excepturi', NULL, '2018-08-24 08:25:10', '2018-08-24 08:25:10'),
(57, 57, 'rem', NULL, '2018-08-24 08:25:10', '2018-08-24 08:25:10'),
(58, 58, 'similique', NULL, '2018-08-24 08:25:10', '2018-08-24 08:25:10'),
(59, 59, 'eveniet', NULL, '2018-08-24 08:25:10', '2018-08-24 08:25:10'),
(60, 60, 'molestiae', NULL, '2018-08-24 08:25:10', '2018-08-24 08:25:10'),
(61, 61, 'doloribus', NULL, '2018-08-24 08:25:12', '2018-08-24 08:25:12'),
(62, 62, 'sit', NULL, '2018-08-24 08:25:12', '2018-08-24 08:25:12'),
(63, 63, 'natus', NULL, '2018-08-24 08:25:12', '2018-08-24 08:25:12'),
(64, 64, 'ut', NULL, '2018-08-24 08:25:12', '2018-08-24 08:25:12'),
(65, 65, 'velit', NULL, '2018-08-24 08:25:12', '2018-08-24 08:25:12'),
(66, 66, 'in', NULL, '2018-08-24 08:25:12', '2018-08-24 08:25:12'),
(67, 67, 'consectetur', NULL, '2018-08-24 08:25:12', '2018-08-24 08:25:12'),
(68, 68, 'ut', NULL, '2018-08-24 08:25:12', '2018-08-24 08:25:12'),
(69, 69, 'autem', NULL, '2018-08-24 08:25:13', '2018-08-24 08:25:13'),
(70, 70, 'praesentium', NULL, '2018-08-24 08:25:13', '2018-08-24 08:25:13'),
(71, 71, 'dignissimos', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(72, 72, 'aperiam', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(73, 73, 'maxime', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(74, 74, 'tempore', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(75, 75, 'ut', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(76, 76, 'minima', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(77, 77, 'et', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(78, 78, 'velit', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(79, 79, 'dolore', NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(80, 80, 'illum', NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(81, 81, 'nemo', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(82, 82, 'aspernatur', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(83, 83, 'ut', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(84, 84, 'sapiente', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(85, 85, 'et', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(86, 86, 'quia', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(87, 87, 'sit', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(88, 88, 'illo', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(89, 89, 'nemo', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(90, 90, 'eum', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(91, 91, 'accusamus', NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(92, 92, 'iusto', NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(93, 93, 'voluptatibus', NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(94, 94, 'harum', NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(95, 95, 'dolor', NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(96, 96, 'explicabo', NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(97, 97, 'expedita', NULL, '2018-08-24 08:25:18', '2018-08-24 08:25:18'),
(98, 98, 'quia', NULL, '2018-08-24 08:25:18', '2018-08-24 08:25:18'),
(99, 99, 'voluptatum', NULL, '2018-08-24 08:25:18', '2018-08-24 08:25:18'),
(100, 100, 'praesentium', NULL, '2018-08-24 08:25:18', '2018-08-24 08:25:18');

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
(1, 1, 'Inspección del Crédito', 'Inspeccion', NULL, '2018-08-24 08:24:58', '2018-08-24 22:40:46'),
(2, 2, 'Operaciones de Crédito', 'dinero', NULL, '2018-08-24 08:25:00', '2018-08-24 22:41:30'),
(5, 5, 'Evaluacion de empleados', 'Documentacion', NULL, '2018-08-24 08:25:07', '2018-08-24 22:42:20'),
(8, 8, 'Balance General', 'Control de ingreso y egresos', NULL, '2018-08-24 08:25:13', '2018-08-24 22:43:01'),
(9, 9, 'Planilla de cobro', 'kardex', NULL, '2018-08-24 08:25:15', '2018-08-24 22:43:40'),
(10, 10, 'Solicitud de Crédito', 'creditos', NULL, '2018-08-24 08:25:16', '2018-08-24 22:40:14');

-- --------------------------------------------------------

--
-- Table structure for table `tramites`
--

CREATE TABLE `tramites` (
  `id` int(10) UNSIGNED NOT NULL,
  `cliente_id` int(10) UNSIGNED NOT NULL,
  `tipo_tramite_id` int(10) UNSIGNED NOT NULL,
  `archivo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` enum('finalizado','proceso') COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_inicio` date NOT NULL,
  `recorrido_id` int(10) UNSIGNED NOT NULL,
  `observacion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `permiso` enum('publico','recorrido') COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tramites`
--

INSERT INTO `tramites` (`id`, `cliente_id`, `tipo_tramite_id`, `archivo`, `estado`, `fecha_inicio`, `recorrido_id`, `observacion`, `permiso`, `deleted_at`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'reprehenderit', 'finalizado', '1974-02-19', 1, 'Eos veritatis nobis sint non distinctio et.', 'publico', NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(2, 1, 1, 'ratione', 'proceso', '1981-06-19', 2, 'Qui neque deserunt qui amet accusantium consequatur.', 'recorrido', NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(3, 1, 1, 'molestias', 'finalizado', '1984-09-25', 3, 'Ratione et veniam consequuntur in.', 'publico', NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(4, 1, 1, 'perspiciatis', 'proceso', '1989-08-25', 4, 'Blanditiis laudantium minus et quisquam aspernatur mollitia voluptates laudantium.', 'recorrido', NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(5, 1, 1, 'nisi', 'finalizado', '2000-07-11', 5, 'Deleniti maiores ea unde sed rerum sunt.', 'publico', NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(6, 1, 1, 'minus', 'proceso', '2013-01-10', 6, 'Earum placeat et earum numquam minus eaque laudantium.', 'recorrido', NULL, '2018-08-24 08:24:59', '2018-08-24 08:24:59'),
(7, 1, 1, 'provident', 'finalizado', '1976-01-28', 7, 'Aut est consequatur eius consequatur amet.', 'publico', NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(8, 1, 1, 'velit', 'proceso', '1995-03-19', 8, 'Aut qui ut numquam velit provident molestias vel.', 'recorrido', NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(9, 1, 1, 'sequi', 'finalizado', '2010-09-20', 9, 'Quo quo quaerat animi.', 'publico', NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(10, 1, 1, 'tempora', 'proceso', '1983-09-18', 10, 'Voluptatum corrupti voluptatum ut veritatis.', 'recorrido', NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(11, 2, 2, 'quia', 'finalizado', '1976-03-09', 11, 'Occaecati quasi veniam quia quia at.', 'publico', NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(12, 2, 2, 'rerum', 'proceso', '1987-01-30', 12, 'Aut quisquam non delectus blanditiis numquam tenetur harum.', 'recorrido', NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(13, 2, 2, 'voluptatem', 'finalizado', '1997-11-20', 13, 'Aliquid ad eum ut est aut voluptatem.', 'publico', NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(14, 2, 2, 'ad', 'proceso', '1979-05-13', 14, 'Nisi quam enim enim esse perferendis numquam aspernatur.', 'recorrido', NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(15, 2, 2, 'non', 'finalizado', '2008-06-17', 15, 'Accusamus qui non in distinctio voluptatibus aut minus nostrum.', 'publico', NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(16, 2, 2, 'nam', 'proceso', '2005-10-03', 16, 'Et sit expedita vel.', 'recorrido', NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(17, 2, 2, 'alias', 'finalizado', '1986-10-11', 17, 'Harum id magnam id aut vitae neque unde.', 'publico', NULL, '2018-08-24 08:25:01', '2018-08-24 08:25:01'),
(18, 2, 2, 'delectus', 'proceso', '1971-02-06', 18, 'Nostrum ullam quasi delectus aut.', 'recorrido', NULL, '2018-08-24 08:25:02', '2018-08-24 08:25:02'),
(19, 2, 2, 'qui', 'finalizado', '1997-05-04', 19, 'Sit aut vitae temporibus quo sequi accusantium.', 'publico', NULL, '2018-08-24 08:25:02', '2018-08-24 08:25:02'),
(20, 2, 2, 'sed', 'proceso', '1986-10-15', 20, 'Voluptas laborum pariatur facere tenetur aut.', 'recorrido', NULL, '2018-08-24 08:25:02', '2018-08-24 08:25:02'),
(41, 5, 5, 'voluptas', 'finalizado', '2009-04-11', 41, 'Neque repellendus quia culpa qui.', 'publico', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(42, 5, 5, 'ut', 'proceso', '1991-09-14', 42, 'Et ut laborum consequatur non ullam tempore impedit.', 'recorrido', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(43, 5, 5, 'quam', 'finalizado', '1973-06-28', 43, 'Id non molestiae consequatur voluptatem facere sed enim.', 'publico', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(44, 5, 5, 'esse', 'proceso', '2009-07-25', 44, 'Quis explicabo omnis fuga atque.', 'recorrido', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(45, 5, 5, 'voluptas', 'finalizado', '1986-03-15', 45, 'Commodi sapiente nesciunt laborum non.', 'publico', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(46, 5, 5, 'aut', 'proceso', '2003-05-20', 46, 'Animi et tenetur sunt et dolorem dolore enim.', 'recorrido', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(47, 5, 5, 'nisi', 'finalizado', '1993-12-06', 47, 'Est quas sit nemo voluptatem quia et.', 'publico', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(48, 5, 5, 'sed', 'proceso', '2014-06-18', 48, 'Vel blanditiis rerum consequatur sit et hic voluptatem.', 'recorrido', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(49, 5, 5, 'repudiandae', 'finalizado', '1975-11-24', 49, 'Odit eveniet similique molestiae dolor.', 'publico', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(50, 5, 5, 'error', 'proceso', '1987-11-02', 50, 'Consequatur tempore et fugiat accusamus doloribus rerum.', 'recorrido', NULL, '2018-08-24 08:25:08', '2018-08-24 08:25:08'),
(71, 8, 8, 'dignissimos', 'finalizado', '1977-07-20', 71, 'Quibusdam magnam deleniti numquam quam autem aut sed impedit.', 'publico', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(72, 8, 8, 'aperiam', 'proceso', '2001-06-09', 72, 'Quo consectetur voluptas eum quia et non.', 'recorrido', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(73, 8, 8, 'maxime', 'finalizado', '1988-09-29', 73, 'Nam aliquid officiis sint iusto labore.', 'publico', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(74, 8, 8, 'tempore', 'proceso', '1992-08-16', 74, 'Excepturi expedita cum autem quam ut rerum.', 'recorrido', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(75, 8, 8, 'ut', 'finalizado', '1970-05-14', 75, 'Fugit possimus consequatur consequatur ad et et harum.', 'publico', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(76, 8, 8, 'minima', 'proceso', '1970-03-27', 76, 'Provident ut aut recusandae perferendis cum.', 'recorrido', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(77, 8, 8, 'et', 'finalizado', '2008-01-08', 77, 'Ducimus corporis nisi aut est eius.', 'publico', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(78, 8, 8, 'velit', 'proceso', '2011-07-21', 78, 'Dolorem omnis quis repellendus a esse nobis.', 'recorrido', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(79, 8, 8, 'dolore', 'finalizado', '2010-01-29', 79, 'Ipsam quos rerum sit maiores adipisci tenetur odio asperiores.', 'publico', NULL, '2018-08-24 08:25:14', '2018-08-24 08:25:14'),
(80, 8, 8, 'illum', 'proceso', '2015-10-11', 80, 'Perferendis quos qui explicabo qui.', 'recorrido', NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(81, 9, 9, 'nemo', 'finalizado', '1992-01-13', 81, 'Omnis adipisci ea cumque incidunt.', 'publico', NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(82, 9, 9, 'aspernatur', 'proceso', '2014-02-14', 82, 'Sit magnam sapiente similique eaque molestiae doloremque.', 'recorrido', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(83, 9, 9, 'ut', 'finalizado', '1994-10-25', 83, 'Quod voluptatem ea quis et aperiam.', 'publico', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(84, 9, 9, 'sapiente', 'proceso', '1994-10-21', 84, 'Aspernatur perferendis est consequatur omnis sit quos.', 'recorrido', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(85, 9, 9, 'et', 'finalizado', '2014-09-25', 85, 'Doloribus aut consequatur sunt eligendi.', 'publico', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(86, 9, 9, 'quia', 'proceso', '2013-08-28', 86, 'Tenetur doloribus earum animi quia autem pariatur a vel.', 'recorrido', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(87, 9, 9, 'sit', 'finalizado', '1974-09-12', 87, 'Occaecati porro quis aut.', 'publico', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(88, 9, 9, 'illo', 'proceso', '1979-04-26', 88, 'Quam est nam nam et vel inventore et.', 'recorrido', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(89, 9, 9, 'nemo', 'finalizado', '1977-04-15', 89, 'Recusandae fugit velit ut omnis eum consequatur quia.', 'publico', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(90, 9, 9, 'eum', 'proceso', '1970-06-14', 90, 'Voluptatem nisi omnis consequatur facere.', 'recorrido', NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16'),
(91, 10, 10, 'accusamus', 'finalizado', '1996-11-17', 91, 'Eos rerum impedit quia necessitatibus.', 'publico', NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(92, 10, 10, 'iusto', 'proceso', '2016-03-14', 92, 'Dolor quidem doloremque officiis repudiandae atque sunt nemo.', 'recorrido', NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(93, 10, 10, 'voluptatibus', 'finalizado', '2002-05-11', 93, 'Doloremque ut rem quam at rerum.', 'publico', NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(94, 10, 10, 'harum', 'proceso', '2001-09-23', 94, 'Suscipit dolorum harum in harum.', 'recorrido', NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(95, 10, 10, 'dolor', 'finalizado', '1989-05-28', 95, 'In dolor cum ut eum provident autem repudiandae.', 'publico', NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(96, 10, 10, 'explicabo', 'proceso', '2013-11-08', 96, 'Perspiciatis sed voluptatem error excepturi et inventore.', 'recorrido', NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(97, 10, 10, 'expedita', 'finalizado', '1990-02-23', 97, 'Harum ut ullam voluptatem quis aut blanditiis vel.', 'publico', NULL, '2018-08-24 08:25:17', '2018-08-24 08:25:17'),
(98, 10, 10, 'quia', 'proceso', '2018-04-24', 98, 'Expedita suscipit aut voluptas et.', 'recorrido', NULL, '2018-08-24 08:25:18', '2018-08-24 08:25:18'),
(99, 10, 10, 'voluptatum', 'finalizado', '1989-12-19', 99, 'Voluptates delectus et aut et atque minima.', 'publico', NULL, '2018-08-24 08:25:18', '2018-08-24 08:25:18'),
(100, 10, 10, 'praesentium', 'proceso', '1990-06-08', 100, 'Fugit dolor optio dicta dolorem nemo dolor.', 'recorrido', NULL, '2018-08-24 08:25:18', '2018-08-24 08:25:18'),
(101, 6, 8, 'archivos/Dx82gmGNkCL6zRP0gXGFHyQrH3Vi5gxkTukv5SLa.pdf', 'proceso', '2018-08-26', 73, 'en proceso', 'recorrido', NULL, '2018-08-26 22:07:15', '2018-08-26 22:07:15');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
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
(1, 1, 'dinero', 'ipsum', '$2y$10$JpQkiFdSvCqM7FcOx68SKuKXCezEOzVIkQC0.QH2kjrcZfQD2UwIK', NULL, NULL, '2018-08-24 08:24:58', '2018-08-24 22:21:39'),
(2, 2, 'Dr. Americo Walsh', 'eos', '$2y$10$2mFkCdiNTN9eIhysh98sq.5yjuXJGTuuJ46FkAbGNzFo2ga78QGEe', NULL, NULL, '2018-08-24 08:25:00', '2018-08-24 08:25:00'),
(5, 5, 'Verda Muller', 'tempora', '$2y$10$64tkRofWIM30kIaK67.eNu5FgmVwtUvioV.5xGnupR5ErhO5whsHq', NULL, NULL, '2018-08-24 08:25:06', '2018-08-24 08:25:06'),
(8, 8, 'Soledad Kuhn', 'aspernatur', '$2y$10$6ZW8qVa/MGCE8Bb9e0hb/ueYA5WQZzvxQNfn53S29sk6NezwkqXC2', NULL, NULL, '2018-08-24 08:25:13', '2018-08-24 08:25:13'),
(9, 9, 'Cara Kuvalis', 'assumenda', '$2y$10$L13K316an432iKRoB8WxNuWrMDy1k.ftblPf4crMOeWR99gJ.Gyam', NULL, NULL, '2018-08-24 08:25:15', '2018-08-24 08:25:15'),
(10, 10, 'Prof. Jillian Hickle', 'non', '$2y$10$yuJnmOLZIXv8UVUyAxIoEO5b5IJqzljqeC2P66qW1bkP4Hu9qhEba', NULL, NULL, '2018-08-24 08:25:16', '2018-08-24 08:25:16');

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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `departamentos`
--
ALTER TABLE `departamentos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `privilegios`
--
ALTER TABLE `privilegios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=81;

--
-- AUTO_INCREMENT for table `recorridos`
--
ALTER TABLE `recorridos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `respaldos`
--
ALTER TABLE `respaldos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT for table `tipo_tramites`
--
ALTER TABLE `tipo_tramites`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tramites`
--
ALTER TABLE `tramites`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=102;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

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
