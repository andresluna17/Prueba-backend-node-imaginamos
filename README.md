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
