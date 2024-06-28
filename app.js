//Llamamos los modulos para establecer la comunicación
//Se utiliza CONST para hacer la definición de variables y contenidos para trabajar con EXPRESS

//Definimos variables
const express = require("express");
const morgan = require('morgan');
const cors = require("cors");
const dbconnect = require("./config"); //Conectarse a la BD
const app = express();// la constante app tendrá ahora todo el funcionamiento del servidor

//Configuraciones
app.use(express.json());// método que ayuda a convertir el código para que el servidor pueda entender lo que viene del cliente.
app.use(morgan('dev'));
app.use(cors({origin:"*"})); // método para comunicar con el cliente [*: cualquier cliente en la nube
//Rutas de nuestro servidor
app.use("/api/usuarios",require ("./routes/usuario.routes"));
app.use("/api/empleados",require ("./routes/empleado.routes"));

//Definimos puerto para la conexion, se inicia el servidor
app.listen(3005, ()=>{
	console.log("El servidor se encuentra en el puerto 3005");
	});

dbconnect();
