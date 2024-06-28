//Definimos la constante para establecer comunicación copn el modelo del esquema
const ModelUser = require("../models/model");

//Definimos constante para controlar el usuario
const usuarioCtrl = {};


//Generamos los servicios CRUD

//CREAR [Creamos un nuevo registro]
usuarioCtrl.createUser = async (req, res) =>{				//Información asincrona, da espera a que retorne o se envia alguna información
	const body = req.body;							//construimos variables para simplificar consultas
	const respuesta = await ModelUser.create(body)	//se cargan en body los requerimientos
	res.send(respuesta)
}


//CONSULTAR [Consultamos registros]
usuarioCtrl.getUsers = async (req, res) => {
	const respuesta = await ModelUser.find({})	//Consultar y traer todo lo que encuentre
	if(respuesta == false) return res.status(404).send({message: "No existen usuarios"})
		else res.send(respuesta)
}

//CONSULTAR [Por ID]
usuarioCtrl.getUniqueUser = async (req, res) => { 
	const id = req.params.id;	//Variable con requerimiento de parametros 
	const respuesta = await ModelUser.findById({_id:id});
	if(!respuesta) return res.status(404).send({message: "El usuario consultado No existe"});
		res.status(200).send(respuesta);
}

//ACTUALIZAR [Utilizamos un metodo put]
usuarioCtrl.editUser = async (req, res) => { 	//consulta de acuerdo a un ID
	const body = req.body;					//Cargamos en body lo que se requiere
	const id = req.params.id;				//Variable con requerimiento de parametros
	const respuesta = await ModelUser.findByIdAndUpdate({_id:id},body);	//Encontrar por ID y actualizando en body
	if(respuesta) return res.status(200).send({message: "El Usuario fué actualizado con exito"})
	res.send(respuesta);
}

//ELIMINAR [Por ID]
usuarioCtrl.deleteUser = async (req, res) => { 
	const id = req.params.id;	//Variable con requerimiento de parametros
	const respuesta = await ModelUser.deleteOne({_id:id});
	if(respuesta) return res.status(200).send({message: "Usuario eleminado con exito"})
	res.send(respuesta);
}

module.exports = usuarioCtrl;