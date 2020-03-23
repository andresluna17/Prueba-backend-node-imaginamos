# Prueba-backend-node-imaginamos

# Endopoint

# create Pedido

POST http://localhost:5000/pedidos

body:
{
"clienteId":3,
"fecha_entrega":"2020-03-25",
"hora_minima": "13:00:00",
"hora_maxima": "20:00:00",
"direccionId":2
}

# driver Task

GET http://localhost:5000/driver
body:
{
"id":2,
"fecha":"2020-03-25"
}

# get clientes

GET http://localhost:5000/cliente

# Create Cliente

Post http://localhost:5000/cliente

body:
{
"nombre":"jaime",
"apellido":"luna",
"telefono":301921333,
"email":"jaime@gmail.com"
}

# arquitectura

utilice una arquitectura de capas combinada con una modular
donde las capas son model,repository y modules
la capa de modulos es una arquitectura modular, ya que en esta se encontraran las funcionalidades y la logica de negocio, las funcionalidades se encuentra divididas por modulos facilmente adaptables a la aplicacion, esto hace que la aplicacion sea facil de modifical, escalable y mantenible al pasar del tiempo
