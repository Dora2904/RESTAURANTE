const usuarioService = require('../services/user.service');
//crear un nuevo usuario
const crearUsuario = async (req, res) => {
    try {
        const nuevoUsuario = await usuarioService.crearUsuario(req.body);
        res.status(201).json ({
            exito: true,
            mensaje: "Usuario creado con exito",    
            data: nuevoUsuario,
        });
    } catch (error) {
        res.status(404).json({
                exito: false,
                mensaje: "Error al crear el usuario",
                error: error.message,
            });
    }
};
 // obtener todos los usuarios
 const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await usuarioService.obtenerUsuarios();
        res.status(200).json({
            exito: true,
            data: usuarios,
        });
    } catch (error) {
        res.status(404).json({
            exito: false,
            mensaje: "Error ",
         });
        
    }
 };

// obtener un usuario por id
const obtenerUsuarioPorId = async (req, res) => {
    try {
        const usuario = await usuarioService.obtenerUsuarioPorId(req.params.id);
        res.status(200).json({
            exito: true,
            data: user,
        });
        } catch (error) {
        res.status(404).json({
            exito: false,
            mensaje: "Error",
         });
    }
};
// actualizar un usuario por id
const actualizarUsuario = async (req, res) => {
    try {
        const actualizarUsuario = await usuarioService.actualizarUsuario(
            req.params.id, 
            req.body);
        res.status(200).json({
            exito: true,
            mensaje: "Usuario actualizado con exito",
            data: actualizarUsuario,
        });
    } catch (error) {
        res.status(404).json({
            exito: false,
            mensaje: "Error",
         });
    }
};  
// eliminar un usuario por id
const eliminarUsuario = async (req, res) => {
    try {
        await usuarioService.eliminarUsuario(req.params.id);
        res.status(200).json({
            exito: true,
            mensaje: "Usuario eliminado con exito",
        });
    } catch (error) {
        res.status(404).json({
            exito: false,
            mensaje: "Error",
         });
    }
};
//hash pasword  

const hashPassword = async (req, res) => {
    try {
        const nuevoUsuario = await usuarioService.hashPassword(req.body);
        res.status(201).json ({
            exito: true,
            mensaje: "Usuario creado con exito",    
            data: nuevoUsuario,
        });
    } catch (error) {
        res.status(404).json({
                exito: false,
                mensaje: "Error al crear el usuario",
                error: error.message,
            });
    }
};

//pasword hash


// Exportar las funciones para usarlas en otros archivos
module.exports = {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario
};