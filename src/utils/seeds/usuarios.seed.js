const mongoose = require('mongoose');
const userSchema = require('../../api/models/usuarios.js')
require("dotenv").config()

const users = [
    {
        name: "Eudald",
        nickname: "Shockolocko",
        phone: 626754398,
    },
    {
        name: "Raquel",
        nickname: "Reix",
        phone: 678654321,
    }
];

mongoose.connect(process.env.MONGO_URI)
    .then(() => userSchema.insertMany(users))
    .then (() => {
        console.log("Datos insertados");
        mongoose.disconnect();
    })
    .catch(err => console.log(err));


