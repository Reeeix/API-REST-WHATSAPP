const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    nickname: { type: String, required: true, unique: true },
    phone: { type: Number, required: true },
}, { timestamps: true });

const User = mongoose.model('users', userSchema, 'users');

module.exports = User;