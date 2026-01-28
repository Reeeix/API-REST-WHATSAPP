const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const messageRoutes = require("./src/api/routes/mensajes.routes");
const userRoutes = require("./src/api/routes/users.routes");
const messagesperUserRoutes = require("./src/api/routes/mensajes.usuarios");


const app = express();
app.use(express.json());
const PORT = process.env.PORT

app.use("/messages", messageRoutes);
app.use("/users", userRoutes);
app.use("/messages-per-user", messagesperUserRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Conectado correctamente");      
    });

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});