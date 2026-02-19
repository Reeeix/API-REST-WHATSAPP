const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    nickname: {type: String, required:true},
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "messages"
        }
    ]
});


const User = mongoose.model('users', userSchema, 'users');
module.exports = User;