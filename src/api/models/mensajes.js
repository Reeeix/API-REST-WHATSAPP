const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    contenido: { type: String, required: true },
    remitente: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    destinatario: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
}, { timestamps: true });


const Messages = mongoose.model('messages', messageSchema, 'messages')
module.exports = Messages;