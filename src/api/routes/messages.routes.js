const express = require("express");
const { getAllMessages, getMessageById, createMessage, updateMessage, deleteMessage } = require("../controllers/messages");
const messagesRouter = express.Router();



messagesRouter.get("/", getAllMessages);
messagesRouter.get("/:id", getMessageById);
messagesRouter.post("/", createMessage);
messagesRouter.put("/:id", updateMessage);
messagesRouter.delete("/:id", deleteMessage);

module.exports = messagesRouter;
