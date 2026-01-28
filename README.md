# 📱 API REST – WhatsApp Clone

Este proyecto consiste en una API REST desarrollada con Node.js, Express y MongoDB, que simula el funcionamiento básico de una aplicación de mensajería tipo WhatsApp.

Permite gestionar usuarios, mensajes y las relaciones entre ambas colecciones, incluyendo la obtención de los mensajes enviados por un usuario concreto.

- Gestionar usuarios
- Gestionar mensajes
- Relación entre colecciones
- Obtención de mensajes enviados por un usuario concreto

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Dotenv
- Insomnia (para probar los endpoints)
- Nodemon (para que escuche cambios en nuestro archivo index.js)

## 🗂️ Arquitectura del proyecto

```
PROYECTO API REST - WHATSAPP/
├── node_modules/
├── src/
│   └── api/
│       ├── models/
│       │   ├── mensajes.js
│       │   └── usuarios.js
│       ├── routes/
│       │   ├── mensajes.routes.js
│       │   ├── mensajes.usuarios.js
│       │   └── users.routes.js
│       └── utils/
│           └── seeds/
│               └── usuarios.seed.js
├── .env
├── .gitignore
├── index.js
├── package-lock.json
├── package.json
└── README.md
```

## 🧩 Modelos y relaciones

### 👤 Usuario (users)

- name (String, requerido)
- nickname (String, requerido, único)
- phone (Number, requerido)
- timestamps activados

### 💬 Mensaje (messages)

- contenido (String, requerido)
- remitente (ObjectId → referencia a users)
- destinatario (ObjectId → referencia a users)
- timestamps activados

👉 Existe una relación entre colecciones, ya que cada mensaje referencia a dos usuarios (remitente y destinatario).

## 🌱 Seed de datos

Se ha creado una semilla de **usuarios** para inicializar la base de datos con datos de prueba usando `insertMany`.

## 🔗 Endpoints disponibles

### Usuarios
| Método | Endpoint   | Descripción                |
| ------ | ---------- | -------------------------- |
| GET    | /users     | Obtener todos los usuarios |
| GET    | /users/:id | Obtener usuario por ID     |
| POST   | /users     | Crear un nuevo usuario     |
| PUT    | /users/:id | Actualizar un usuario      |
| DELETE | /users/:id | Eliminar un usuario        |

### Mensajes
| Método | Endpoint      | Descripción                |
| ------ | ------------- | -------------------------- |
| GET    | /messages     | Obtener todos los mensajes |
| GET    | /messages/:id | Obtener mensaje por ID     |
| POST   | /messages     | Crear un nuevo mensaje     |
| PUT    | /messages/:id | Actualizar un mensaje      |
| DELETE | /messages/:id | Eliminar un mensaje        |

### Mensajes por usuario
| Método | Endpoint               | Descripción                                        |
| ------ | ---------------------- | -------------------------------------------------- |
| GET    | /messages-per-user/:id | Obtener todos los mensajes enviados por un usuario |

Este endpoint devuelve todos los mensajes cuyo remitente coincide con el ID del usuario proporcionado (si los hay).

## 🧪 Pruebas 

Todos los endpoints han sido probados correctamente usando Insomnia, incluyendo:

- CRUD completo de usuarios
- CRUD completo de mensajes
- Obtención de mensajes por usuario
- Gestión de errores con try/catch y validación de ID

## ▶️ Ejecución del proyecto

1. Crear el archivo `package.json`:
```sh
npm init -y
```

2. Instalar dependencias:
```sh
npm i express mongoose dotenv
```

3. Instalar nodemon como dependencia de desarrollo:
```sh
npm i -D nodemon
```

4. Crear archivo `.env` con:
```env
PORT=3000
MONGO_URI=tu_uri_de_mongodb
```

5. Crear el servidor en `index.js` con Express.

6. En `package.json`, añadir script:
```sh
"dev": "nodemon index.js"
```
y ejecutarlo con:
```sh
npm run dev
```

7. Crear modelos, semilla de usuarios y cargarla con:
```sh
"seed": "node src/utils/seeds/usuarios.seed.js"
```

8. Crear endpoints y probar que todo funcione.

## 🏁 Conclusión

Este proyecto demuestra el conocimiento de:

- Express para la creación de una API REST
- Mongoose para la gestión de modelos y relaciones
- Relaciones entre colecciones en MongoDB
- Creación de endpoints
- Capacidad de gestionar errores correctamente
