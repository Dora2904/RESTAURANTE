const express = require('express');
const {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario,
} =require('../controllers/user.controller');

const router = express.Router();

router.post("/crear", crearUsuario); // Crear un nuevo usuario 
router.get("/", obtenerUsuarios); // Obtener todos los usuarios
router.get("/:id", obtenerUsuarioPorId); // Obtener un usuario por id  
router.put("/:id", actualizarUsuario); // Actualizar un usuario por id
router.delete("/:id", eliminarUsuario); // Eliminar un usuario por id

module.exports = router; // Exportar el router para usarlo en otros archivos