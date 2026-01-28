const express = require("express");
const router = express.Router();
const User = require ("../models/usuarios.js");

router.get("/", async (req, res) => {
    const users = await User.find();
    res.json(users);
});

router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json("Usuario no encontrado");
        }
        res.json(user);
    } catch (error) {
        res.status(400).json("ID no válido");
    }
});


router.post("/", async (req,res) => {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
})

router.put("/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).json("Usuario no encontrado");
        }
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json("Error al actualizar");
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).json("Usuario no encontrado");
        }
        res.json(deletedUser);
    } catch (error) {
        res.status(400).json("ID no válido");
    }
});

module.exports = router;
