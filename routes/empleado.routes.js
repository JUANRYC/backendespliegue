// Vamos a crear rutas del servidor, creamos un módulo por eso utilizamos express
 
//Llamamos constantes requeridas para el funcionamiento
const express = require("express");
const router = express.Router();
const empleadoCtrl = require("../controllers/empleado.controller.js");

router.get("/", empleadoCtrl.getEmpleado);              //Rutas más limpias (obtener empleados)
router.post("/", empleadoCtrl.createEmpleado);          //Guardar
router.get("/:id", empleadoCtrl.getUniqueEmpleado);     //Obtiene un único empleado
router.put("/:id", empleadoCtrl.editEmpleado);          //Actualizar datos (uno a la vez)
router.delete("/:id", empleadoCtrl.deleteEmpleado);     //Eliminar datos por ref. ID     

module.exports = router;