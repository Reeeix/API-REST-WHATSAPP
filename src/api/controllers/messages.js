const Message = require("../models/messages.js");
const User = require("../models/users.js");

const getAllMessages = async (req, res) => {
    try {
        const messages = await Message.find();
        res.json(messages);
    } catch (error) {
        res.status(500).json("Error al obtener los mensajes");
    }
};


const getMessageById = async (req, res) => {
    try {
        const message = await Message.findById(req.params.id);
        if (!message) {
            return res.status(404).json("Mensaje no encontrado");
        }
        res.json(message);
    } catch (error) {
        res.status(400).json("ID no válido");
    }
};


const createMessage = async (req, res) => {
    try {
        const newMessage = new Message(req.body);
        const savedMessage = await newMessage.save();

        
        await User.findByIdAndUpdate(
            savedMessage.sender,
            { $addToSet: { messages: savedMessage._id } }
        );

        res.status(201).json(savedMessage);

    } catch (error) {
        res.status(400).json("Error al crear el mensaje");
        console.log(error);
        
    }
};


const updateMessage = async (req, res) => {
    try {
        const updatedMessage = await Message.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!updatedMessage) {
            return res.status(404).json("Mensaje no encontrado");
        }

        res.json(updatedMessage);
    } catch (error) {
        res.status(400).json("Error al actualizar");
    }
};

const deleteMessage = async (req, res) => {
    try {
        const deletedMessage = await Message.findByIdAndDelete(req.params.id);

        if (!deletedMessage) {
            return res.status(404).json("Mensaje no encontrado");
        }

        res.json(deletedMessage);
    } catch (error) {
        res.status(400).json("ID no válido");
    }
};

module.exports = {
    getAllMessages,
    getMessageById,
    createMessage,
    updateMessage,
    deleteMessage
};
