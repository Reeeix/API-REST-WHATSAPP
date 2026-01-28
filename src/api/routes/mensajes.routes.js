const express = require("express");
const router = express.Router();
const Message = require ("../models/mensajes.js");
const User = require ("../models/usuarios.js");

router.get("/", async (req, res) => {
    const messages = await Message.find();
    res.json(messages);
});

router.get("/:id", async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);
        if (!message) {
            return res.status(404).json("Mensaje no encontrado");
        }
        res.json(message);
    } catch (error) {
        res.status(400).json("ID no válido");
    }
});


router.post("/", async (req,res) => {
    const newMessage = new Message(req.body);
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
})

router.put("/:id", async (req, res) => {
    try {
        const updatedMessage = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMessage) {
            return res.status(404).json("Mensaje no encontrado");
        }
        res.json(updatedMessage);
    } catch (error) {
        res.status(400).json("Error al actualizar");
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedMessage = await Message.findByIdAndDelete(req.params.id);
        if (!deletedMessage) {
            return res.status(404).json("Mensaje no encontrado");
        }
    res.json(deletedMessage);
    } catch (error) {
        res.status(400).json("ID no válido");
    }
});

module.exports = router;
