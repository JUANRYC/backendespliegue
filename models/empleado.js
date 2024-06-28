//Modelo que va a tener nuestra base de datos
//Estructura de la clase con las entidades

const mongoose = require("mongoose");   //Modulo donde estan las librerias para la base de datos
const { Schema } = mongoose;

const empleadoModel = new Schema(  //Creamos la variable para controlar el esquema [Campos con sus tipós de datos]
    {
	    name:{ type: String },
	    position:{ type: String },
        office: { type: String },
        salary: { type: Number },
	},
    //Llevar un control de cuando se genero un registro
    {
	timestamps:true,    //Tiempo en el que fue creado el registro
	versionKey:false,   
    }
);

//Creamos asignaciones de variables para facilitar la comunicación con el CRUD
const ModelEmpleado = mongoose.model("empleados",empleadoModel);
module.exports = ModelEmpleado;     //Exportamos para no tener que llamar siempre