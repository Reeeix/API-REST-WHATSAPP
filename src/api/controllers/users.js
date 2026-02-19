const User = require("../models/users.js");
const Messages = require("../models/messages.js");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json("Error al obtener los usuarios");
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
            .populate("messages");
        if (!user) {
            return res.status(404).json("Usuario no encontrado");
        }
        res.json(user);
    } catch (error) {
        res.status(400).json("ID no válido");
        console.log(error);
        
    }
};

const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json("Error al crear el usuario");
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json("Usuario no encontrado");
        }

        res.json(updatedUser);
    } catch (error) {
        res.status(400).json("Error al actualizar");
    }
};


const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json("Usuario no encontrado");
        }

        res.json(deletedUser);
    } catch (error) {
        res.status(400).json("ID no válido");
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
};
