const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const messageRoutes = require("./src/api/routes/messages.routes");
const userRoutes = require("./src/api/routes/users.routes");


const app = express();
app.use(express.json());
const PORT = process.env.PORT

app.use("/messages", messageRoutes);
app.use("/users", userRoutes);


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Conectado correctamente");      
    });

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});