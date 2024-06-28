//Definimos la constante para establecer comunicación con el modelo del esquema
const ModelEmpleado = require("../models/empleado.js");

//Definimos constante para controlar el usuario
const empleadoCtrl = {};

//DEFINIMOS LOS MÉTODOS
//Generamos los servicios CRUD

//CREAR [Creamos un nuevo registro]
empleadoCtrl.createEmpleado = async (req, res) =>{				//Información asincrona, da espera a que retorne o se envia alguna información
	const body = req.body;							//construimos variables para simplificar consultas
	const respuesta = await ModelEmpleado.create(body);	//se cargan en body los requerimientos
	res.send(respuesta);
}


//CONSULTAR TODOS [Consultamos registros]
empleadoCtrl.getEmpleado = async (req, res) => {
	const respuesta = await ModelEmpleado.find({})	//Consultar y traer todo lo que encuentre
	if(respuesta == false) return res.status(404).send({message: "No existen empleados"});
		else res.send(respuesta);
}

//CONSULTAR [Por ID]
empleadoCtrl.getUniqueEmpleado = async (req, res) => { 
	const id = req.params.id;	//Variable con requerimiento de parametros 
	const respuesta = await ModelEmpleado.findById({_id:id});
	if(!respuesta) return res.status(404).send({message: "El empleado consultado No existe"});
		res.status(200).send(respuesta);
}

//ACTUALIZAR [Utilizamos un metodo put]
empleadoCtrl.editEmpleado = async (req, res) => { 	//consulta de acuerdo a un ID
	const body = req.body;					//Cargamos en body lo que se requiere
	const id = req.params.id;				//Variable con requerimiento de parametros
	const respuesta = await ModelEmpleado.findByIdAndUpdate({_id:id},body);	//Encontrar por ID y actualizando en body
	if(respuesta) return res.status(200).send({message: "El Empleado fué actualizado con exito"});
	res.send(respuesta);
}

//ELIMINAR [Por ID]
empleadoCtrl.deleteEmpleado = async (req, res) => { 
	const id = req.params.id;	//Variable con requerimiento de parametros
	const respuesta = await ModelEmpleado.deleteOne({_id:id});
	if(respuesta) return res.status(200).send({message: "Empleado eleminado con exito"});
	res.send(respuesta);
}

module.exports = empleadoCtrl;