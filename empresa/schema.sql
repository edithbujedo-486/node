CREATE TABLE `empleado` (
	`id` INT,
	`nombre` VARCHAR(255),
	`apellido` VARCHAR(255),
	`salario` INT,
	`fecha_de_nacimiento` DATE
);

CREATE TABLE `emp_dep` (
	`id` INT,
	`emp_id` INT,
	`dep_id` INT,
	`fecha_de_inicio` DATE
);

CREATE TABLE `departamento` (
	`id` INT,
	`nombre` VARCHAR(254),
	`tipo` INT
);

CREATE TABLE `tipo_de_departamento` (
	`id` INT,
	`nombre` VARCHAR (255)
);
CREATE TABLE `orden` (
	`id` INT,
	`emp_id` INT,
	`fecha` DATE
);
CREATE TABLE `item` (
	`id` INT,
	`ord_id` INT,
	`pro_id` INT,
	`precio` FLOAT,
	`cantidad` INT
);
CREATE TABLE `producto` (
	`id` INT,
	`nombre` VARCHAR(255),
	`precio` FLOAT
);


show TABLE 