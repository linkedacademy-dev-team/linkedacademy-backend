INSERT INTO `country` (name, code) VALUES ('Colombia', '+57');

INSERT INTO `departament` (`id`, `name`, `countryId`)
VALUES
	(5,'Antioquia', 1),
	(8,'Atlántico',1),
	(11,'Bogotá, D.C.',1),
	(13,'Bolívar',1),
	(15,'Boyacá',1),
	(17,'Caldas',1),
	(18,'Caquetá',1),
	(19,'Cauca',1),
	(20,'Cesar',1),
	(23,'Córdoba',1),
	(25,'Cundinamarca',1),
	(27,'Chocó',1),
	(41,'Huila',1),
	(44,'La Guajira',1),
	(47,'Magdalena',1),
	(50,'Meta',1),
	(52,'Nariño',1),
	(54,'Norte De Santander',1),
	(63,'Quindio',1),
	(66,'Risaralda',1),
	(68,'Santander',1),
	(70,'Sucre',1),
	(73,'Tolima',1),
	(76,'Valle Del Cauca',1),
	(81,'Arauca',1),
	(85,'Casanare',1),
	(86,'Putumayo',1),
	(88,'San Andrés, Providencia Y Santa Catalina',1),
	(91,'Amazonas',1),
	(94,'Guainía',1),
	(95,'Guaviare',1),
	(97,'Vaupés',1),
	(99,'Vichada',1);

INSERT INTO `city` (`id`, `name`, `departamentId`, `coordinates`)
VALUES
	(107,'Bogotá D.C.',11, POINT(4.6486206,-74.272624)),
	(1070,'Villavicencio',50, POINT(4.1249245,-73.691463));