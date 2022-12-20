CREATE DATABASE  IF NOT EXISTS `expresiones` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_bin */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `expresiones`;
-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: expresiones
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `oraciones`
--

DROP TABLE IF EXISTS `oraciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oraciones` (
  `codigo` int NOT NULL AUTO_INCREMENT,
  `oracion` varchar(50) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `respuesta` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oraciones`
--

LOCK TABLES `oraciones` WRITE;
/*!40000 ALTER TABLE `oraciones` DISABLE KEYS */;
INSERT INTO `oraciones` VALUES (1,'Hola gordita','Comentario no ofensivo'),(2,'Compraremos donde el chino.','Comentario racista'),(3,'Trabaja como negro','Comentario racista'),(4,'Calladita te ves más bonita','Comentario machista'),(5,'Golpeas como niña','Comentario machista'),(6,'Es trabajo de hombre','Comentario machista'),(7,'¡Ah, como eres indio!','Comentario ofensivo'),(8,'Gritas como chola','Comentario ofensivo'),(9,'Indio tenias que ser!','Comentario ofensivo'),(10,'Muerto de hambre','Comentario ofensivo'),(11,'No seas naco!','Comentario ofensivo'),(12,'Lloras como  nena','Comentario machista'),(13,'Ya va a llorar','Comentario no ofensivo'),(14,'¡Que tonto!','Comentario ofensivo'),(15,'Parece niña','Comentario machista'),(16,'Hola pequeña!','Comentario no ofensivo'),(17,'Esa es una carrera de hombre','Comentario machista'),(18,'Deberías ser más femenina','Comentario machista'),(19,'Los hombres no lloran','Comentario machista'),(20,'Ese color es de niña','Comentario machista');
/*!40000 ALTER TABLE `oraciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `votos`
--

DROP TABLE IF EXISTS `votos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `votos` (
  `codigo` int NOT NULL AUTO_INCREMENT,
  `oraciones` varchar(300) CHARACTER SET utf8mb3 COLLATE utf8mb3_bin DEFAULT NULL,
  `respuesta_racista` int DEFAULT NULL,
  `respuesta_machista` int DEFAULT NULL,
  `respuesta_ofensiva` int DEFAULT NULL,
  `respuesta_no_ofensiva` int DEFAULT NULL,
  PRIMARY KEY (`codigo`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `votos`
--

LOCK TABLES `votos` WRITE;
/*!40000 ALTER TABLE `votos` DISABLE KEYS */;
INSERT INTO `votos` VALUES (1,'Hola gordita',0,0,0,0),(2,'Compraremos donde el chino.',0,0,0,0),(3,'Trabaja como negro',1,0,0,0),(4,'Calladita te ves más bonita',2,0,0,0),(5,'Golpeas como niña',0,0,0,0),(6,'Es trabajo de hombre',0,0,0,0),(7,'¡Ah, como eres indio!',0,0,0,0),(8,'Gritas como chola',0,0,1,0),(9,'Indio tenias que ser!',0,0,0,0),(10,'Muerto de hambre',0,0,0,0),(11,'No seas naco!',2,1,1,0),(12,'Lloras como  nena',0,0,0,0),(13,'Ya va a llorar',0,0,0,0),(14,'¡Que tonto!',0,0,0,0),(15,'Parece niña',1,0,0,0),(16,'Hola pequeña!',0,0,0,0),(17,'Esa es una carrera de hombre',0,0,0,0),(18,'Deberías ser más femenina',1,2,0,0),(19,'Los hombres no lloran',0,0,0,0),(20,'Ese color es de niña',2,0,0,0);
/*!40000 ALTER TABLE `votos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-19 22:37:37
