const mongoose = require('mongoose');


const messageSchema = new mongoose.Schema({
    content: { type: String, required: true },
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    reciever: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
}, { timestamps: true });


const Messages = mongoose.model('messages', messageSchema, 'messages')
module.exports = Messages;