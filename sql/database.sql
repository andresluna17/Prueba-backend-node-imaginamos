create database prueba_backend_node;
use prueba_backend_node;

create table drivers(
id int auto_increment primary key,
activo boolean
);

create table clientes(
id int auto_increment primary key,
nombre varchar(100),
apellido varchar(100),
email varchar(100) not null unique,
telefono int
);

create table direcciones(
id int auto_increment primary key,
id_cliente int,
direccion varchar(100),
foreign key (id_cliente) references clientes(id)
);

create table pedidos(
id int auto_increment primary key,
id_direccion int,
id_cliente int,
fecha_entrega date,
hora_minima time,
hora_maxima time,
foreign key (id_direccion) references direcciones(id),
foreign key (id_cliente) references clientes(id)
);

create table pedido_driver(
id int auto_increment primary key,
id_pedido int,
id_driver int,
foreign key (id_pedido) references pedidos(id),
foreign key (id_driver) references drivers(id)
);



insert into drivers(activo) values (true),(false),(true);
insert into clientes(nombre,apellido,email,telefono) values("jaime","luna","jaime@gmail.com",3121323111),("laura","gonzales","laura@gmail.com",305991300);
insert into direcciones (id_cliente,direccion) values (1,"avenida primera de mayo "),(1,"avenidad principal"),(2,"av cali");
insert into pedidos (id_cliente,id_direccion,fecha_entrega,hora_minima,hora_maxima) values (1,1,"2020-03-23","10:30:00","14:30:00"),(1,2,"2020-03-24","10:30:00","14:30:00"),(2,3,"2020-03-23","10:30:00","14:30:00");
insert into pedido_driver (id_pedido,id_driver) values (1,1),(2,2),(3,3);