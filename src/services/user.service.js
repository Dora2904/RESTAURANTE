
const Usuario = require('../models/user.models');

// crear un nuevo usuario
const crearUsuario = async (userData) => {
    try {
        const nuevoUsuario = new Usuario(userData);
        return await nuevoUsuario.save();    
    } catch (error) {
       console.error(error);
    }
};

// obtener todos los usuarios
const obtenerUsuarios = async () => {
    try {
        return await Usuario.find({});
    } catch (error) {
        console.error(error);
    }
};
// obtener un usuario por id
const obtenerUsuarioPorId = async (id) => {
    try {
        const Usuario= await Usuario.findById(id);
        if (!Usuario) {
            return "Usuario no encontrado";
        }
        return await Usuario.find();
        } catch (error) {
        console.error(error);
    }
}
// actualizar un usuario por existente
const actualizarUsuario = async (id, datosActualizados) => {
    try {
        const actualizarUsuario = await Usuario.findByIdAndUpdate(
            id, 
            datosActualizados,
            { new: true, runValidators: true }
        );

        if (!usuarioActualizado) {
            return "Usuario no encontrado";
        }
        return usuarioActualizado;
    }
    catch (error) {
        console.log("Estas en un error", + error);
    }
};
// eliminar un usuario por id
const eliminarUsuario = async (id) => {
    try {
        const usuarioEliminado = await Usuario.findByIdAndDelete(id);
        if (!usuarioEliminado) {
            return "Usuario no encontrado";
        }
        return { message: "Usuario eliminado" };
    } catch (error) {
        console.error(error);
    }
};

module.exports = {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuarioPorId,
    actualizarUsuario,
    eliminarUsuario,
};

