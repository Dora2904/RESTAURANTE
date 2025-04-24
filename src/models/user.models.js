const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, "El nombre es obligatorio"],
    },
    email: {
        type: String,
        required: [true, "El email es obligarorio"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/.+@.+\..+/, "Por favor ingrese un email valido"]
    },
    contrasena: {
        type: String,
        required: [true, "El password es obligatorio"],
        select: false // No incluir el password en las consultas por defecto
    },
    edad: {
        type: Number,
        min: 0
    },
    activo: {
        type: Boolean,
        default: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    },
   });



const Usuario = mongoose.model("Usuario", usuarioSchema);
module.exports = Usuario; // Export the User model for use in other files



