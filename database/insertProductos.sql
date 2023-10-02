INSERTS INTO schema.Tabla VALUES('')

/*Agregando sucursales*/
INSERT INTO reg_empresa.Sucursal VALUES (1, 'Central', 100);
INSERT INTO reg_empresa.Sucursal VALUES (2,'Norte',75),(3,'Sur', 75);

SELECT * FROM reg_empresa.Sucursal;

/*Agregando los productos existentes*/

INSERT INTO reg_producto.Categoria_Producto VALUES(1, 'Alimento');
INSERT INTO reg_producto.Categoria_Producto VALUES(2, 'Bebida');
INSERT INTO reg_producto.Categoria_Producto VALUES(3, 'Dormitorio');
INSERT INTO reg_producto.Categoria_Producto VALUES(4,'Electrodomesticos'),
(5, 'Ferreteria'),(6, 'Cocina'),(7, 'Linea Blanca'), 
(8, 'Jugueteria'), (9, 'Muebles'), (10, 'Deportes'), 
(11, 'Limpieza');

SELECT * FROM reg_producto.Categoria_Producto;




INSERT INTO reg_empresa.Tarjeta VALUES (1,'Comun', 5);
INSERT INTO reg_empresa.Tarjeta VALUES (2, 'Oro', 10);
INSERT INTO reg_empresa.Tarjeta VALUES (3,'Platino', 20);
INSERT INTO reg_empresa.Tarjeta VALUES (4,'Diamante', 30);

SELECT * FROM reg_empresa.Tarjeta;






INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Martillo Taladro', 125, 4);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Vajilla Navidena', 100, 6);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Plancha ropa', 75, 7);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Carro Mario Bross', 250, 8);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Escritorio Metal', 400, 9);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Remera Leo Messi', 500, 10);

INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Pollo Horneado', 80, 1);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Botella Vino', 75, 2);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Edredon Rayo Mcqueen', 125, 3);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Microondas', 225, 4);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Pulidora', 200, 5);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Vajilla Navidena', 100, 6);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Vasos Cristal', 60, 6);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Lavadora LG', 7500, 7);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Juego de Cartas UNO', 100, 8);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Ropero Melamina', 4000, 9);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Playera del Xelaju MC', 500, 10);
INSERT INTO reg_producto.Producto (Nombre, Precio_Venta, Categoria) VALUES ('Desinfectante liquido', 100, 11);

