# API REST - Gestión de Usuarios para Restaurante 🍽️

## 📌 Descripción
Esta API Restaurante señor marisco  permite gestionar usuarios para un sistema de restaurante. Implementa operaciones CRUD (Crear, Leer, Actualizar y Eliminar) usando Node.js, Express y MongoDB, organizada por capas y bajo un estilo de programación funcional.

## 🚀 Funcionalidades Principales

- ✅ Crear usuarios
- 📋 Obtener todos los usuarios
- 🔍 Buscar usuario por ID
- ✏️ Actualizar usuarios
- 🗑️ Eliminar usuarios

## 🛠️ Tecnologías Utilizadas

- Node.js
- Express
- MongoDB + Mongoose
- Dotenv
- Nodemon (dev)

## 🧠 Estructura del Proyecto

```
api-usuarios/
│
├── config/             # Configuración de la base de datos
├── controllers/        # Lógica que maneja las peticiones/respuestas
├── models/             # Definición de esquemas (Mongoose)
├── routes/             # Definición de endpoints
├── services/           # Lógica de negocio
├── app.js           # Punto de entrada del servidor
├── package.json
```
## 📬 Endpoints

| Método | Ruta                  | Descripción                     |
|--------|------------------------|---------------------------------|
| POST   | `/api/usuarios`        | Crear nuevo usuario             |
| GET    | `/api/usuarios`        | Listar todos los usuarios       |
| GET    | `/api/usuarios/:id`    | Obtener usuario por ID          |
| PUT    | `/api/usuarios/:id`    | Actualizar datos del usuario    |
| DELETE | `/api/usuarios/:id`    | Eliminar usuario                |

## 🔄 Formato de Respuesta

**Éxito:**

```json
{
  "exito": true,
  "mensaje": "Operación exitosa",
  "datos": { ... }
}
```

**Error:**

```json
{
  "exito": false,
  "mensaje": "Descripción del error",
  "error": { ... }
}