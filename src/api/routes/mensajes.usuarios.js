const express = require("express");
const router = express.Router();
const Message = require ("../models/mensajes.js");


router.get("/:id", async (req, res) => {
    const mensajesUsuario = [];
    const id = req.params.id;
    try {
         const mensajes = await Message.find();
    for (const mensaje of mensajes) {
        if (mensaje.remitente.toString() === id) {
            mensajesUsuario.push(mensaje);
        }
    } if (mensajesUsuario.length > 0) {
         res.json(mensajesUsuario);
    } else {
        res.json("Vaya, parece que este usuario es muy tímido o tiene pocos amigos...")
    }
    } catch (error) {
        res.status(400).json("ID no válidp");
    }   
})

module.exports = router;