SELECT * FROM reg_producto.Producto;

INSERT INTO reg_empleado.Rol_Empleado VALUES(1, 'Administrador');
INSERT INTO reg_empleado.Rol_Empleado VALUES(2, 'Cajero'), (3, 'Bodega'), (4, 'Inventario');

SELECT * FROM reg_empleado.Rol_Empleado;

INSERT INTO reg_cliente.Cliente VALUES('CF', 'Pedro', 'Dos Santos', 'Quetzaltenango', 478454);
INSERT INTO reg_cliente.Cliente VALUES('4560', 'Roni', 'Olivera', 'Guatemala', 556454);
INSERT INTO reg_cliente.Cliente VALUES('5856', 'Juan', 'Diego', 'Francia', 508494);
INSERT INTO reg_cliente.Cliente VALUES('1058', 'Diego', 'Perez', 'Solola', 50185);
INSERT INTO reg_cliente.Cliente VALUES('5587', 'Galilea', 'Velasquez', 'Quetzaltenango', 459842);
INSERT INTO reg_cliente.Cliente VALUES('6965', 'Julia', 'Pineda', 'San Pedro', 587520);
INSERT INTO reg_cliente.Cliente VALUES('5959', 'Oscar', 'Aveiro', 'Quetzaltenango', 685478);


SELECT * FROM reg_cliente.Cliente;


/*Registro Empresa Producto en Sucursal*/

/*Registro Empleados*/
/*1 Admin, 2 Vendedor, 3 Bodega, 4 Inventario*/
/*1 CENTRAL, 2 NORTE, 3 SUR*/

/*	SUCURSAL CENTRAL*/
/*	VENDEDORES CENTRAL*/


INSERT INTO reg_empleado.Empleado VALUES ('2253','Cristiano','Ronaldo','02-05-1985',007,1,35500,2);
INSERT INTO reg_empleado.Empleado VALUES ('2254','Jose','Calderon','03-05-1989',71554,1,2500,2), ('2255','Javier','Gonzales','14-05-1998',45678,1,2800,2),
('2256','Rigo','Tovar','15-09-1999',68554,1,2500,2), ('2257','Monica','LaFuente','08-05-1996',10554,1,2600,2),
('2258','Alicia','De Leon','15-03-2001',70554,1,2500,2);

/**/


/*INVENTARIO CENTRAL*/
INSERT INTO reg_empleado.Empleado VALUES ('2864','Ramon','Calderon','03-05-1995',68554,1,2500,4), ('2605','Armando','Mendoza','14-10-1990',48978,1,2800,4),
('2996','Ringo','Martinez','05-09-1999',68104,1,2500,4), ('2887','Estrella','Lopez','18-05-1999',95405,1,2600,4);

/*BODEGA CENTRAL*/
INSERT INTO reg_empleado.Empleado VALUES
('2901', 'Cristian', 'Nodal', '15-06-1998',77615,1,2900,3);


/*	SUCURSAL NORTE*/
/*	VENDEDORES*/


INSERT INTO reg_empleado.Empleado VALUES ('3253','Agustin','Amado','15-05-1984',71889,2,2500,2), ('3254','Karla','Escobar','26-05-1989',57175,2,2500,2), ('3255','Pablo','Gomez','24-04-1993',41094,2,2500,2),
('3256','Jaime','Toc','15-09-2000',41576,2,2500,2), ('3257','Karin','Benzema','08-09-1992',59118,2,2500,2),
('3258','Maria','Perez','15-08-2003',77889,2,2500,2);


/*INVENTARIO*/
INSERT INTO reg_empleado.Empleado VALUES ('3864','Emilinao','Martinez','23-02-1991',55876,2,2400,4), ('3865','Alejandra','Gutierrez','11-12-1998',48657,2,2400,4),
('3866','Mynor','Ovalle','02-06-1996',49562,2,2400,4), ('3867','Luz','Maldonado','15-03-1996',42496,2,2400,4);

/*BODEGA*/
INSERT INTO reg_empleado.Empleado VALUES
('3901', 'Vicente', 'Garcia', '05-06-1990',40475,2,2800,3);

SELECT * FROM reg_empleado.Empleados;

/*	SUCURSAL SUR*/
/*	VENDEDORES*/


INSERT INTO reg_empleado.Empleado VALUES 
('4223','Jorge','Negrete','16-09-1974',75645,3,2600,2), 
('4224','Alba','Estrada','12-04-1999',45790,3,2600,2), 
('4225','Maria','Gonzales','14-07-1998',41098,3,2600,2),
('4226','Jose','Tovar','15-10-2004',78945,3,2600,2), 
('4227','Karina','Ovalle','08-08-1991',49115,3,2600,2),
('4228','Margot','Morales','15-05-2000',78452,3,2600,2);


/*INVENTARIO*/
INSERT INTO reg_empleado.Empleado VALUES 
('4834','Emilia','Gomez','20-02-1994',57154,3,2400,4), 
('4835','Alejandro','Colom','11-11-1993',40557,3,2400,4),
('4836','Andrea','Rodas','08-08-1998',44562,3,2400,4), 
('4837','Ana','De Leon','25-03-1999',42620,3,2400,4);

/*BODEGA*/
INSERT INTO reg_empleado.Empleado VALUES
('4991', 'Alexander', 'Matias', '05-05-1999',50501,3,2800,3);