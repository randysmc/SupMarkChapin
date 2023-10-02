CREATE DATABASE supermarket;

\c supermarket;

CREATE SCHEMA reg_empleado; //Empleado, RolEmpleado
CREATE SCHEMA reg_cliente; //Cliente, TarjetaCliente
CREATE SCHEMA reg_venta; //Venta, DetalleVenta
CREATE SCHEMA reg_producto; // Producto, CategoriaProducto
CREATE SCHEMA reg_empresa; //Sucursal, ProductoSucursal, Tarjeta


CREATE TABLE reg_empresa.Sucursal(
	Id_Sucursal INT NOT NULL,
	Nombre VARCHAR(30),
	Cantidad_Productos INT NOT NULL,
	PRIMARY KEY(Id_Sucursal)
);

CREATE TABLE reg_producto.Categoria_Producto(
	Id_Categoria INT NOT NULL,
	Descripcion VARCHAR(50),
	PRIMARY KEY (Id_categoria)
);

CREATE TABLE reg_empleado.Rol_Empleado (
	Id_Rol INT NOT NULL,
	Cargo VARCHAR(50), 
	PRIMARY KEY(Id_rol)
);

CREATE TABLE reg_cliente.Cliente(
	NIT VARCHAR(20) NOT NULL,
	Nombre VARCHAR(25),
	Apellido VARCHAR(25),
	Direccion VARCHAR(50),
	Telefono INT,
	PRIMARY KEY (NIT)
);

CREATE TABLE reg_empresa.Tarjeta(
	Id_Tarjeta INT NOT NULL,
	Tipo_Tarjeta VARCHAR(25),
	Descuento INT,
	PRIMARY KEY (Id_tarjeta)
);


/*Entidades Debiles*/

CREATE TABLE reg_producto.Producto(
	Id_Producto SERIAL NOT NULL,
	Nombre VARCHAR(50),
	Precio_Venta INT NOT NULL,
	Categoria INT NOT NULL,
	PRIMARY KEY (Id_Producto),
	FOREIGN KEY (Categoria) REFERENCES reg_producto.Categoria_Producto(Id_Categoria)
);

CREATE TABLE reg_empresa.Producto_Sucursal(
	Id_Producto_Sucursal VARCHAR(50) NOT NULL,
	Producto INT NOT NULL,
	Sucursal INT NOT NULL,
	Cantidad_Bodega INT NOT NULL,
	PRIMARY KEY (Id_Producto_Sucursal),
	FOREIGN KEY (Producto) REFERENCES reg_producto.Producto(Id_producto),
	FOREIGN KEY (Sucursal) REFERENCES reg_empresa.Sucursal(Id_Sucursal)
);



CREATE TABLE reg_empleado.Empleado(
	DPI VARCHAR(20) NOT NULL,
	Nombre VARCHAR(25) NOT NULL,
	Apellido VARCHAR(25) NOT NULL,
	Fecha_Nacimiento DATE NULL,
	Telefono INT NULL,
	Sucursal INT NOT NULL,
	Salario INT NOT NULL,
	Rol INT NOT NULL,
	PRIMARY KEY (DPI),
	FOREIGN KEY (Sucursal) REFERENCES reg_empresa.Sucursal(Id_Sucursal),
	FOREIGN KEY (Rol) REFERENCES reg_empleado.rol_Empleado(Id_Rol)
);

CREATE TABLE reg_cliente.Tarjeta_Cliente(
	Id_Tarjeta_Cliente INT NOT NULL,
	Cliente VARCHAR(50) NOT NULL,
	Puntos INT NOT NULL,
	Tarjeta INT NOT NULL,
	PRIMARY KEY (Id_Tarjeta_Cliente),
	FOREIGN KEY (Cliente) REFERENCES reg_cliente.Cliente(NIT),
	FOREIGN KEY (Tarjeta) REFERENCES reg_empresa.Tarjeta(Id_Tarjeta)
);

CREATE TABLE reg_venta.Venta(
	Id_Venta SERIAL NOT NULL,
	Empleado VARCHAR(20) NOT NULL,
	Cliente VARCHAR(20) NOT NULL,
	Fecha_Venta DATE NOT NULL,
	Sucursal INT NOT NULL,
	TOTAL INT NOT NULL,
	PRIMARY KEY (Id_Venta),
	FOREIGN KEY (Empleado) REFERENCES reg_empleado.Empleado(DPI),
	FOREIGN KEY (Cliente) REFERENCES reg_cliente.Cliente(NIT),
	FOREIGN KEY (Sucursal) REFERENCES reg_empresa.Sucursal(Id_Sucursal)
);



CREATE TABLE reg_venta.Detalle_Venta(
	Id_Detalle SERIAL NOT NULL,
	Venta INT NOT NULL,
	Producto INT NOT NULL,
	Cantidad INT NOT NULL,
	Total_Detalle INT NOT NULL,
	PRIMARY KEY (Id_Detalle),
	FOREIGN KEY (Venta) REFERENCES reg_venta.Venta(Id_Venta),
	FOREIGN KEY (Producto) REFERENCES reg_producto.Producto(Id_Producto)
);

CREATE TABLE Usuario(
	Id SERIAL NOT NULL,
	Nombre VARCHAR(50) NOT NULL,
	Email VARCHAR(75) UNIQUE NOT NULL,
	Password VARCHAR(200) NOT NULL,
	Rol_Empleado INT NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (Rol_Empleado) REFERENCES reg_empleado.rol_Empleado(Id_Rol)
);
